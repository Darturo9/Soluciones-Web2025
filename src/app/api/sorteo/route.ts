import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import OpenAI from 'openai'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

export async function POST(request: NextRequest) {
  try {
    const { nombre, email, telefono, nombreNegocio, problema } = await request.json()

    if (!nombre || !email || !problema) {
      return NextResponse.json(
        { error: 'Nombre, email y problema son requeridos' },
        { status: 400 }
      )
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `Eres un consultor de software experto. El usuario te describe un problema de su negocio que le quita tiempo.

Tu tarea es:
1. Proponer una solución tecnológica concreta (puede ser automatización, sistema web, app, integración, etc.)
2. Dar un presupuesto estimado en USD (rango)

Responde en formato JSON con esta estructura:
{
  "solucion": "Descripción clara de la solución propuesta (2-3 oraciones)",
  "presupuesto": "Rango de precio en USD, ej: $500 - $1,500"
}`
        },
        {
          role: 'user',
          content: `Negocio: ${nombreNegocio || 'No especificado'}
Problema: ${problema}`
        }
      ],
      response_format: { type: 'json_object' },
    })

    const respuestaIA = JSON.parse(completion.choices[0].message.content || '{}')

    const { data, error } = await supabase
      .from('sorteo_participantes')
      .insert({
        nombre,
        email,
        telefono,
        nombre_negocio: nombreNegocio,
        problema,
        solucion_ia: respuestaIA.solucion,
        presupuesto_estimado: respuestaIA.presupuesto,
      })
      .select()
      .single()

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'Este email ya está registrado en el sorteo' },
          { status: 400 }
        )
      }
      throw error
    }

    return NextResponse.json({
      success: true,
      solucion: respuestaIA.solucion,
      presupuesto: respuestaIA.presupuesto,
    })
  } catch (error) {
    console.error('Error en sorteo:', error)
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    )
  }
}

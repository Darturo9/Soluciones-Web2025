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
    const { participantId, message, history } = await request.json()

    if (!participantId || !message) {
      return NextResponse.json(
        { error: 'Datos incompletos' },
        { status: 400 }
      )
    }

    const { data: participant } = await supabase
      .from('sorteo_participantes')
      .select('nombre_negocio, presupuesto_cliente')
      .eq('id', participantId)
      .single()

    const messages: OpenAI.ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: `Eres un asesor comercial amigable de "Soluciones Web". Ayudas a dueños de negocios a entender cómo la tecnología puede resolver sus problemas del día a día.

Información del cliente:
- Negocio: ${participant?.nombre_negocio || 'No especificado'}
- Presupuesto disponible: ${participant?.presupuesto_cliente || 'No especificado'}

REGLAS IMPORTANTES:
- NUNCA menciones términos técnicos como APIs, frameworks, bases de datos, backend, frontend, etc.
- Habla en términos simples que cualquier dueño de negocio entienda
- Enfócate en los BENEFICIOS: ahorro de tiempo, menos errores, más ventas, mejor organización
- Siempre considera el presupuesto del cliente al proponer soluciones
- Si el presupuesto es bajo, sugiere soluciones más simples o por fases

Lo que puedes ofrecer (sin mencionar tecnologías):
- Páginas web profesionales y rápidas
- Sistemas de gestión personalizados (inventario, clientes, citas, etc.)
- Automatización de tareas repetitivas
- Notificaciones automáticas por WhatsApp o SMS
- Chatbots inteligentes para atención al cliente
- Integraciones entre herramientas que ya usan
- Reportes y dashboards para tomar mejores decisiones

Tu objetivo:
1. Escuchar y entender el problema real del cliente
2. Hacer 1-2 preguntas para clarificar si es necesario
3. Proponer una solución clara explicando qué haría y cómo le beneficia
4. Dar un rango de precio aproximado acorde a su presupuesto

IMPORTANTE - Finalización de conversación:
- Cuando hayas dado una propuesta completa con precio estimado y el cliente parezca satisfecho o no tenga más preguntas, agrega al FINAL de tu mensaje (en una línea aparte): [FINALIZAR]
- Solo usa [FINALIZAR] cuando la conversación haya madurado: entendiste el problema, diste una solución y un precio
- El cliente NO ve esta etiqueta, es solo para el sistema

Tono: Cercano, profesional, como un amigo que sabe de tecnología. Respuestas cortas y claras. No uses markdown ni formatos especiales.`,
      },
      ...history.map((msg: { role: string; content: string }) => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
      })),
      { role: 'user', content: message },
    ]

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages,
      max_tokens: 500,
    })

    let response = completion.choices[0].message.content || ''
    const shouldFinalize = response.includes('[FINALIZAR]')

    // Remover la etiqueta del mensaje visible
    response = response.replace('[FINALIZAR]', '').trim()

    await supabase
      .from('sorteo_participantes')
      .update({
        conversacion: JSON.stringify([...history, { role: 'user', content: message }, { role: 'assistant', content: response }]),
      })
      .eq('id', participantId)

    return NextResponse.json({ response, shouldFinalize })
  } catch (error) {
    console.error('Error en chat:', error)
    return NextResponse.json(
      { error: 'Error al procesar mensaje' },
      { status: 500 }
    )
  }
}

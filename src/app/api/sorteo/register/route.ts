import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const rateLimitMap = new Map<string, number>()

async function sendTelegramNotification(data: {
  nombre: string
  email: string
  telefono: string
  nombreNegocio: string
  presupuesto: string
}) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) return

  const message = `🎉 *Nuevo registro en el sorteo*

👤 *Nombre:* ${data.nombre}
📧 *Email:* ${data.email}
📱 *Teléfono:* ${data.telefono}
🏢 *Negocio:* ${data.nombreNegocio}
💰 *Presupuesto:* ${data.presupuesto}`

  try {
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    })
  } catch (error) {
    console.error('Error enviando notificación Telegram:', error)
  }
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    const now = Date.now()
    const lastRequest = rateLimitMap.get(ip)

    // Rate limit: 1 request per 10 seconds per IP
    if (lastRequest && now - lastRequest < 10000) {
      return NextResponse.json(
        { error: 'Demasiados intentos. Espera unos segundos.' },
        { status: 429 }
      )
    }
    rateLimitMap.set(ip, now)

    const { nombre, email, telefono, nombreNegocio, presupuesto, website, acceptedTerms } = await request.json()

    // Honeypot check - if filled, it's a bot
    if (website) {
      return NextResponse.json({ success: true, id: 'fake-id' })
    }

    if (!nombre || !email || !telefono || !nombreNegocio || !presupuesto || !acceptedTerms) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('sorteo_participantes')
      .insert({
        nombre,
        email,
        telefono,
        nombre_negocio: nombreNegocio,
        presupuesto_cliente: presupuesto,
        acepto_terminos: true,
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

    // Enviar notificación a Telegram
    await sendTelegramNotification({ nombre, email, telefono, nombreNegocio, presupuesto })

    return NextResponse.json({ success: true, id: data.id })
  } catch (error) {
    console.error('Error en registro:', error)
    return NextResponse.json(
      { error: 'Error al registrar' },
      { status: 500 }
    )
  }
}

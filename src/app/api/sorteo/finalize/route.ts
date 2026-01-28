import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const { participantId } = await request.json()

    if (!participantId) {
      return NextResponse.json(
        { error: 'ID de participante requerido' },
        { status: 400 }
      )
    }

    const { data: participant } = await supabase
      .from('sorteo_participantes')
      .select('*')
      .eq('id', participantId)
      .single()

    if (!participant) {
      return NextResponse.json(
        { error: 'Participante no encontrado' },
        { status: 404 }
      )
    }

    // Formatear conversación
    const conversacion = participant.conversacion || []
    let chatText = ''
    for (const msg of conversacion) {
      const emoji = msg.role === 'user' ? '👤' : '🤖'
      chatText += `${emoji} ${msg.content}\n\n`
    }

    const message = `📋 *Resumen de participación*

👤 *Nombre:* ${participant.nombre}
📧 *Email:* ${participant.email}
📱 *Teléfono:* ${participant.telefono}
🏢 *Negocio:* ${participant.nombre_negocio}
💰 *Presupuesto:* ${participant.presupuesto_cliente}

💬 *Conversación:*
${chatText || 'Sin mensajes'}`

    // Enviar a Telegram
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (botToken && chatId) {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown',
        }),
      })
    }

    // Marcar como finalizado
    await supabase
      .from('sorteo_participantes')
      .update({ finalizado: true })
      .eq('id', participantId)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error al finalizar:', error)
    return NextResponse.json(
      { error: 'Error al finalizar participación' },
      { status: 500 }
    )
  }
}

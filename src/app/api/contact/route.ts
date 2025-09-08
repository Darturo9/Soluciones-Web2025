import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message, service } = await request.json();

    // Validar campos requeridos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Configurar el transportador de email
    // Nota: Necesitarás configurar las credenciales de Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // solucionesweb2025@gmail.com
        pass: process.env.GMAIL_APP_PASSWORD, // Contraseña de aplicación de Gmail
      },
    });

    // Configurar el email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'solucionesweb2025@gmail.com',
      subject: `Nuevo contacto desde la web: ${service || 'Consulta general'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Nuevo contacto desde Soluciones-web</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Información del cliente:</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
            ${service ? `<p><strong>Servicio de interés:</strong> ${service}</p>` : ''}
          </div>

          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #2563eb;">
            <h3 style="color: #334155; margin-top: 0;">Mensaje:</h3>
            <p style="line-height: 1.6; color: #475569;">${message}</p>
          </div>

          <div style="margin-top: 30px; padding: 20px; background-color: #f1f5f9; border-radius: 8px;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              Este email fue enviado desde el formulario de contacto de Soluciones-web.
            </p>
          </div>
        </div>
      `,
    };

    // Enviar el email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email enviado correctamente' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error enviando email:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
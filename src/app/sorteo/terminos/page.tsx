'use client'

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-gray-950 pt-32 pb-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Terminos y Condiciones del Sorteo</h1>

        <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl p-8 border border-gray-800 space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Organizador</h2>
            <p>El presente sorteo es organizado por Soluciones Web (en adelante "el Organizador"), con el objetivo de promover sus servicios de desarrollo de software y soluciones digitales.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Elegibilidad y Participacion</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Pueden participar personas mayores de 18 anos residentes en cualquier pais.</li>
              <li>La participacion es gratuita y no requiere compra previa.</li>
              <li>Se permite una sola participacion por persona/correo electronico.</li>
              <li>Es requisito indispensable completar el formulario de registro y haber interactuado con el Asistente de IA proporcionando datos reales.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. El Premio</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>El ganador recibira el desarrollo de una solucion tecnologica (sitio web, sistema web o aplicacion basica) basada en las necesidades diagnosticadas durante su conversacion con el asistente.</li>
              <li>El valor comercial del premio equivale a un maximo de $3,000 USD en horas de desarrollo y consultoria.</li>
              <li><strong className="text-white">Exclusiones:</strong> El premio NO incluye costos de terceros tales como: compra de dominios, servicios de hosting/servidores, licencias de software de pago, publicidad, ni mantenimiento mensual posterior a la entrega. Estos costos deberan ser cubiertos por el ganador.</li>
              <li>El premio no es transferible a terceros ni canjeable por dinero en efectivo.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Seleccion y Notificacion</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>El ganador sera seleccionado de forma aleatoria entre los participantes validos.</li>
              <li>El cierre de inscripciones sera el dia <strong className="text-white">28 de febrero de 2026</strong>.</li>
              <li>El sorteo se realizara el dia <strong className="text-white">1 de marzo de 2026</strong> y se anunciara en los canales oficiales.</li>
              <li>El ganador sera contactado por email/telefono. Si no responde en un plazo de 5 dias habiles, el premio se declarara desierto o se seleccionara un suplente, a discrecion del Organizador.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Condiciones del Desarrollo</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>El alcance final del proyecto sera acordado en una reunion inicial. Si los requerimientos exceden los $3,000 USD, el ganador podra optar por pagar la diferencia o reducir el alcance.</li>
              <li>El Organizador retiene el derecho de mostrar el proyecto final en su portafolio.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Uso del Asistente de IA</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Las respuestas y presupuestos preliminares dados por el asistente de IA son meramente orientativos y no constituyen una oferta comercial vinculante.</li>
              <li>El Organizador no se hace responsable por alucinaciones o errores tecnicos en las respuestas del asistente.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Datos Personales</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Los datos recolectados se usaran para gestionar el sorteo y enviar informacion sobre los servicios de Soluciones Web. No seran vendidos a terceros.</li>
              <li>Para ejercer sus derechos de acceso o eliminacion de datos, contactar a: solucionesweb2025@gmail.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Aceptacion</h2>
            <p>La simple participacion en el sorteo implica la aceptacion total de estas bases y condiciones.</p>
          </section>

          <div className="pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm">Ultima actualizacion: Enero 2026</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="/sorteo" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← Volver al sorteo
          </a>
        </div>
      </div>
    </div>
  )
}

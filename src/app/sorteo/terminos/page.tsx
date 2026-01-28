'use client'

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-gray-950 pt-32 pb-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Términos y Condiciones del Sorteo</h1>

        <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl p-8 border border-gray-800 space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Organizador</h2>
            <p>El presente sorteo es organizado por Soluciones Web ("el Organizador"), con el objetivo de promover sus servicios de desarrollo de software.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Participación</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Pueden participar personas mayores de 18 años.</li>
              <li>La participación es gratuita y no requiere ningún tipo de compra.</li>
              <li>Cada persona puede participar una sola vez con un email único.</li>
              <li>Es necesario completar el formulario de registro con datos reales y válidos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Premio</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>El ganador recibirá el desarrollo de una solución tecnológica sin costo, basada en el problema descrito durante la conversación con el asistente.</li>
              <li>El valor máximo del desarrollo será de hasta $3,000 USD en tiempo de desarrollo.</li>
              <li>El alcance final del proyecto será acordado entre el ganador y el Organizador.</li>
              <li>El premio no es transferible ni canjeable por dinero en efectivo.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Selección del Ganador</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>El ganador será seleccionado de forma aleatoria entre todos los participantes válidos.</li>
              <li>La fecha del sorteo será anunciada a través de los canales oficiales del Organizador.</li>
              <li>El ganador será contactado por email y/o teléfono dentro de los 5 días hábiles posteriores al sorteo.</li>
              <li>Si el ganador no responde en un plazo de 10 días hábiles, se seleccionará un nuevo ganador.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Uso de Datos Personales</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Los datos proporcionados serán utilizados únicamente para los fines del sorteo y para contactar a los participantes con información sobre los servicios del Organizador.</li>
              <li>Los datos no serán vendidos ni compartidos con terceros.</li>
              <li>El participante puede solicitar la eliminación de sus datos en cualquier momento escribiendo a solucionesweb2025@gmail.com.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Uso del Asistente de IA</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Las respuestas proporcionadas por el asistente de IA son orientativas y no constituyen un compromiso contractual.</li>
              <li>Los presupuestos estimados son aproximados y pueden variar según el alcance final del proyecto.</li>
              <li>Las conversaciones son almacenadas para mejorar el servicio y evaluar las necesidades de los participantes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Modificaciones</h2>
            <p>El Organizador se reserva el derecho de modificar o cancelar el sorteo en cualquier momento, notificando a los participantes a través de los canales oficiales.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Contacto</h2>
            <p>Para cualquier consulta relacionada con el sorteo, contactar a: solucionesweb2025@gmail.com</p>
          </section>

          <div className="pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm">Última actualización: Enero 2025</p>
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

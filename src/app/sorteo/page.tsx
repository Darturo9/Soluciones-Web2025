'use client'

import { useState, useRef, useEffect } from 'react'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export default function SorteoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    nombreNegocio: '',
    presupuesto: '',
    website: '', // honeypot
  })
  const [registered, setRegistered] = useState(false)
  const [participantId, setParticipantId] = useState<string | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [finalized, setFinalized] = useState(false)
  const [finalizing, setFinalizing] = useState(false)
  const [showFinalizeButton, setShowFinalizeButton] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/sorteo/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error)
        return
      }

      setParticipantId(data.id)
      setRegistered(true)
      setMessages([
        {
          role: 'assistant',
          content: `¡Hola ${formData.nombre}! Soy tu asistente de Soluciones Web. Cuéntame: ¿qué proceso de tu negocio te quita más tiempo o te gustaría mejorar? Te daré una propuesta de solución.`,
        },
      ])
    } catch {
      setError('Error al registrar. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || loading) return

    const userMessage = input.trim()
    setInput('')
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }])
    setLoading(true)

    try {
      const res = await fetch('/api/sorteo/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          participantId,
          message: userMessage,
          history: messages,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error)
        return
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: data.response }])

      if (data.shouldFinalize) {
        setShowFinalizeButton(true)
      }
    } catch {
      setError('Error al enviar mensaje.')
    } finally {
      setLoading(false)
    }
  }

  const handleFinalize = async () => {
    if (finalizing || finalized) return
    setFinalizing(true)

    try {
      const res = await fetch('/api/sorteo/finalize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ participantId }),
      })

      if (res.ok) {
        setFinalized(true)
      }
    } catch {
      setError('Error al finalizar.')
    } finally {
      setFinalizing(false)
    }
  }

  if (registered) {
    return (
      <div className="min-h-screen bg-gray-950 pt-24 pb-8 px-4">
        <div className="max-w-3xl mx-auto h-[calc(100vh-8rem)] flex flex-col">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-white">Asistente de Soluciones</h1>
            <p className="text-gray-400 text-sm">Cuéntame tu problema y te propongo una solución</p>
          </div>

          <div className="flex-1 bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl border border-gray-800 flex flex-col overflow-hidden">
            <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-100'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-gray-800 rounded-2xl px-4 py-3">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.1s]" />
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-800">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>

          {finalized ? (
            <div className="mt-4 bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
              <p className="text-green-400 font-medium">Participacion guardada exitosamente</p>
              <p className="text-gray-400 text-sm mt-1">Te contactaremos si resultas ganador. Gracias por participar.</p>
            </div>
          ) : showFinalizeButton ? (
            <button
              onClick={handleFinalize}
              disabled={finalizing}
              className="mt-4 w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-medium hover:from-green-700 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {finalizing ? 'Guardando...' : 'Finalizar y guardar participacion'}
            </button>
          ) : null}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 pt-32 pb-24 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-md mx-auto relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Gana tu sistema gratis
          </h1>
          <p className="text-gray-400">
            Regístrate para chatear con nuestra IA y recibir una propuesta personalizada.
            Un participante será seleccionado para el desarrollo sin costo.
          </p>
        </div>

        <form onSubmit={handleRegister} className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl p-8 border border-gray-800">
          <div className="space-y-5">
            {/* Honeypot field - hidden from humans */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">
                Nombre completo *
              </label>
              <input
                type="text"
                id="nombre"
                required
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-2">
                Teléfono *
              </label>
              <input
                type="tel"
                id="telefono"
                required
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="+1 234 567 8900"
              />
            </div>

            <div>
              <label htmlFor="nombreNegocio" className="block text-sm font-medium text-gray-300 mb-2">
                Nombre de tu negocio *
              </label>
              <input
                type="text"
                id="nombreNegocio"
                required
                value={formData.nombreNegocio}
                onChange={(e) => setFormData({ ...formData, nombreNegocio: e.target.value })}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Mi Empresa"
              />
            </div>

            <div>
              <label htmlFor="presupuesto" className="block text-sm font-medium text-gray-300 mb-2">
                Presupuesto disponible *
              </label>
              <select
                id="presupuesto"
                required
                value={formData.presupuesto}
                onChange={(e) => setFormData({ ...formData, presupuesto: e.target.value })}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="">Selecciona un rango</option>
                <option value="$500 - $1,000">$500 - $1,000</option>
                <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000+">$10,000+</option>
              </select>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terminos"
                required
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-gray-700 bg-gray-800 text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-900"
              />
              <label htmlFor="terminos" className="text-sm text-gray-400">
                Acepto los{' '}
                <a
                  href="/sorteo/terminos"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  términos y condiciones
                </a>{' '}
                del sorteo y el uso de mis datos para ser contactado.
              </label>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !acceptedTerms}
              className="w-full py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Registrando...' : 'Continuar al chat'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

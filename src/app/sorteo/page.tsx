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
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({})
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

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email) && email.length <= 100
  }

  const validatePhone = (phone: string): boolean => {
    // Acepta formatos: +1234567890, 123-456-7890, (123) 456-7890, 1234567890
    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/
    const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, '')
    return cleanPhone.length >= 7 && cleanPhone.length <= 15 && phoneRegex.test(phone)
  }

  const validateName = (name: string): boolean => {
    // Permite letras (incluyendo tildes y ñ), espacios y guiones
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s\-']+$/
    return nameRegex.test(name) && name.length >= 2 && name.length <= 100
  }

  const validateBusinessName = (name: string): boolean => {
    // Permite letras, números, espacios y algunos caracteres especiales comunes en nombres de negocio
    const businessRegex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ\s\-&'.,:]+$/
    return businessRegex.test(name) && name.length >= 2 && name.length <= 150
  }

  const sanitizeInput = (input: string): string => {
    // Elimina caracteres potencialmente peligrosos para prevenir XSS
    return input.trim().replace(/[<>\"']/g, '')
  }

  const validateForm = (): boolean => {
    const errors: { [key: string]: string } = {}

    // Validar nombre
    const sanitizedNombre = sanitizeInput(formData.nombre)
    if (!sanitizedNombre) {
      errors.nombre = 'El nombre es requerido'
    } else if (sanitizedNombre.length < 2) {
      errors.nombre = 'El nombre debe tener al menos 2 caracteres'
    } else if (sanitizedNombre.length > 100) {
      errors.nombre = 'El nombre no puede exceder 100 caracteres'
    } else if (!validateName(sanitizedNombre)) {
      errors.nombre = 'El nombre solo puede contener letras, espacios y guiones'
    }

    // Validar email
    const sanitizedEmail = sanitizeInput(formData.email)
    if (!sanitizedEmail) {
      errors.email = 'El email es requerido'
    } else if (!validateEmail(sanitizedEmail)) {
      errors.email = 'Ingresa un email válido (ej: tu@email.com)'
    } else if (sanitizedEmail.length > 100) {
      errors.email = 'El email no puede exceder 100 caracteres'
    }

    // Validar teléfono
    const sanitizedTelefono = sanitizeInput(formData.telefono)
    if (!sanitizedTelefono) {
      errors.telefono = 'El teléfono es requerido'
    } else if (!validatePhone(sanitizedTelefono)) {
      errors.telefono = 'Ingresa un teléfono válido (ej: +1 234 567 8900)'
    }

    // Validar nombre del negocio
    const sanitizedNegocio = sanitizeInput(formData.nombreNegocio)
    if (!sanitizedNegocio) {
      errors.nombreNegocio = 'El nombre del negocio es requerido'
    } else if (sanitizedNegocio.length < 2) {
      errors.nombreNegocio = 'El nombre del negocio debe tener al menos 2 caracteres'
    } else if (sanitizedNegocio.length > 150) {
      errors.nombreNegocio = 'El nombre del negocio no puede exceder 150 caracteres'
    } else if (!validateBusinessName(sanitizedNegocio)) {
      errors.nombreNegocio = 'El nombre del negocio contiene caracteres no permitidos'
    }

    // Validar presupuesto
    if (!formData.presupuesto) {
      errors.presupuesto = 'Selecciona un rango de presupuesto'
    }

    // Validar términos
    if (!acceptedTerms) {
      errors.terminos = 'Debes aceptar los términos y condiciones'
    }

    // Validar honeypot (anti-bot)
    if (formData.website) {
      errors.bot = 'Registro sospechoso detectado'
    }

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setFieldErrors({})

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      // Sanitizar datos antes de enviar
      const sanitizedData = {
        nombre: sanitizeInput(formData.nombre),
        email: sanitizeInput(formData.email),
        telefono: sanitizeInput(formData.telefono),
        nombreNegocio: sanitizeInput(formData.nombreNegocio),
        presupuesto: formData.presupuesto,
        website: formData.website,
        acceptedTerms,
      }

      const res = await fetch('/api/sorteo/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedData),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Error al registrar')
        return
      }

      setParticipantId(data.id)
      setRegistered(true)
      setMessages([
        {
          role: 'assistant',
          content: `¡Hola ${sanitizedData.nombre}! Soy tu asistente de Soluciones Web. Cuéntame: ¿qué proceso de tu negocio te quita más tiempo o te gustaría mejorar? Te daré una propuesta de solución.`,
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
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${msg.role === 'user'
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
                value={formData.nombre}
                onChange={(e) => {
                  setFormData({ ...formData, nombre: e.target.value })
                  if (fieldErrors.nombre) setFieldErrors({ ...fieldErrors, nombre: '' })
                }}
                maxLength={100}
                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${fieldErrors.nombre ? 'border-red-500 focus:border-red-500' : 'border-gray-700 focus:border-blue-500'
                  }`}
                placeholder="Juan Pérez"
              />
              {fieldErrors.nombre && (
                <p className="mt-1 text-sm text-red-400">{fieldErrors.nombre}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value })
                  if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: '' })
                }}
                maxLength={100}
                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${fieldErrors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-700 focus:border-blue-500'
                  }`}
                placeholder="tu@email.com"
              />
              {fieldErrors.email && (
                <p className="mt-1 text-sm text-red-400">{fieldErrors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-2">
                Teléfono *
              </label>
              <input
                type="tel"
                id="telefono"
                value={formData.telefono}
                onChange={(e) => {
                  setFormData({ ...formData, telefono: e.target.value })
                  if (fieldErrors.telefono) setFieldErrors({ ...fieldErrors, telefono: '' })
                }}
                maxLength={20}
                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${fieldErrors.telefono ? 'border-red-500 focus:border-red-500' : 'border-gray-700 focus:border-blue-500'
                  }`}
                placeholder="+1 234 567 8900"
              />
              {fieldErrors.telefono && (
                <p className="mt-1 text-sm text-red-400">{fieldErrors.telefono}</p>
              )}
            </div>

            <div>
              <label htmlFor="nombreNegocio" className="block text-sm font-medium text-gray-300 mb-2">
                Nombre de tu negocio *
              </label>
              <input
                type="text"
                id="nombreNegocio"
                value={formData.nombreNegocio}
                onChange={(e) => {
                  setFormData({ ...formData, nombreNegocio: e.target.value })
                  if (fieldErrors.nombreNegocio) setFieldErrors({ ...fieldErrors, nombreNegocio: '' })
                }}
                maxLength={150}
                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${fieldErrors.nombreNegocio ? 'border-red-500 focus:border-red-500' : 'border-gray-700 focus:border-blue-500'
                  }`}
                placeholder="Mi Empresa S.A."
              />
              {fieldErrors.nombreNegocio && (
                <p className="mt-1 text-sm text-red-400">{fieldErrors.nombreNegocio}</p>
              )}
            </div>

            <div>
              <label htmlFor="presupuesto" className="block text-sm font-medium text-gray-300 mb-2">
                Presupuesto disponible *
              </label>
              <select
                id="presupuesto"
                value={formData.presupuesto}
                onChange={(e) => {
                  setFormData({ ...formData, presupuesto: e.target.value })
                  if (fieldErrors.presupuesto) setFieldErrors({ ...fieldErrors, presupuesto: '' })
                }}
                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white focus:outline-none transition-colors ${fieldErrors.presupuesto ? 'border-red-500 focus:border-red-500' : 'border-gray-700 focus:border-blue-500'
                  }`}
              >
                <option value="">Selecciona un rango</option>
                <option value="$500 - $1,000">$500 - $1,000</option>
                <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000+">$10,000+</option>
              </select>
              {fieldErrors.presupuesto && (
                <p className="mt-1 text-sm text-red-400">{fieldErrors.presupuesto}</p>
              )}
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

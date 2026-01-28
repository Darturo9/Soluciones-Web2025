'use client'

import { useState, useEffect } from 'react'
import { createClientBrowser } from '@/lib/supabase'
import type { User } from '@supabase/supabase-js'

type Participante = {
  id: string
  nombre: string
  email: string
  telefono: string
  nombre_negocio: string
  presupuesto_cliente: string
  conversacion: string | null
  created_at: string
  finalizado: boolean
  acepto_terminos: boolean
}

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export default function AdminPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState<User | null>(null)
  const [participantes, setParticipantes] = useState<Participante[]>([])
  const [loading, setLoading] = useState(true)
  const [authLoading, setAuthLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedParticipante, setSelectedParticipante] = useState<Participante | null>(null)

  const supabase = createClientBrowser()

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      if (user) {
        await loadParticipantes()
      }
    } catch {
      console.error('Error checking user')
    } finally {
      setLoading(false)
    }
  }

  const loadParticipantes = async () => {
    const { data, error } = await supabase
      .from('sorteo_participantes')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      setError('Error al cargar participantes')
      return
    }

    setParticipantes(data || [])
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setAuthLoading(true)
    setError('')

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setError('Credenciales incorrectas')
        return
      }

      setUser(data.user)
      await loadParticipantes()
    } catch {
      setError('Error al iniciar sesion')
    } finally {
      setAuthLoading(false)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
    setParticipantes([])
  }

  const parseConversacion = (conv: string | null): Message[] => {
    if (!conv) return []
    try {
      const cleaned = conv.startsWith('"') ? JSON.parse(conv) : conv
      return JSON.parse(cleaned)
    } catch {
      return []
    }
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleString('es-GT', {
      dateStyle: 'medium',
      timeStyle: 'short',
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-gray-900 p-8 rounded-xl border border-gray-800 w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Panel</h1>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white mb-4 focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white mb-4 focus:outline-none focus:border-blue-500"
          />
          {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            disabled={authLoading}
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {authLoading ? 'Verificando...' : 'Entrar'}
          </button>
        </form>
      </div>
    )
  }

  if (selectedParticipante) {
    const mensajes = parseConversacion(selectedParticipante.conversacion)

    return (
      <div className="min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedParticipante(null)}
            className="mb-6 text-gray-400 hover:text-white flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a la lista
          </button>

          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-6">
            <h1 className="text-2xl font-bold mb-4">{selectedParticipante.nombre}</h1>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-400">Email:</span>
                <p>{selectedParticipante.email}</p>
              </div>
              <div>
                <span className="text-gray-400">Telefono:</span>
                <p>{selectedParticipante.telefono}</p>
              </div>
              <div>
                <span className="text-gray-400">Negocio:</span>
                <p>{selectedParticipante.nombre_negocio}</p>
              </div>
              <div>
                <span className="text-gray-400">Presupuesto:</span>
                <p>{selectedParticipante.presupuesto_cliente}</p>
              </div>
              <div>
                <span className="text-gray-400">Fecha registro:</span>
                <p>{formatDate(selectedParticipante.created_at)}</p>
              </div>
              <div>
                <span className="text-gray-400">Estado:</span>
                <p className={selectedParticipante.finalizado ? 'text-green-400' : 'text-yellow-400'}>
                  {selectedParticipante.finalizado ? 'Finalizado' : 'En progreso'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
            <h2 className="text-xl font-bold mb-4">Conversacion</h2>
            {mensajes.length === 0 ? (
              <p className="text-gray-500">No hay conversacion registrada</p>
            ) : (
              <div className="space-y-4">
                {mensajes.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-xl px-4 py-3 ${
                        msg.role === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-800 text-gray-100'
                      }`}
                    >
                      <p className="text-xs text-gray-400 mb-1">
                        {msg.role === 'user' ? 'Cliente' : 'Bot'}
                      </p>
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Participantes del Sorteo</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">{participantes.length} participantes</span>
            <span className="text-gray-500 text-sm">{user.email}</span>
            <button
              onClick={handleLogout}
              className="text-sm text-gray-400 hover:text-white"
            >
              Cerrar sesion
            </button>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-300">Nombre</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-300">Negocio</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-300">Presupuesto</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-300">Fecha</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-300">Estado</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-300">Chat</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {participantes.map((p) => (
                <tr key={p.id} className="hover:bg-gray-800/50 transition-colors">
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium">{p.nombre}</p>
                      <p className="text-sm text-gray-400">{p.email}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">{p.nombre_negocio}</td>
                  <td className="px-4 py-3 text-sm">{p.presupuesto_cliente}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{formatDate(p.created_at)}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex px-2 py-1 text-xs rounded-full ${
                        p.finalizado
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}
                    >
                      {p.finalizado ? 'Finalizado' : 'En progreso'}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => setSelectedParticipante(p)}
                      className="text-blue-400 hover:text-blue-300 text-sm"
                    >
                      Ver chat
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

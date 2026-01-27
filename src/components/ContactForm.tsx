'use client';
import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-900 to-gray-900/50 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">
                Envianos un mensaje
            </h3>

            {/* Name */}
            <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Nombre completo *
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-colors"
                    placeholder="Tu nombre completo"
                />
            </div>

            {/* Email */}
            <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-colors"
                    placeholder="tu@email.com"
                />
            </div>

            {/* Phone */}
            <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                    Telefono
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-colors"
                    placeholder="+(502) 0000-0000"
                />
            </div>

            {/* Service */}
            <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">
                    Servicio de interes
                </label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-colors"
                >
                    <option value="">Selecciona un servicio</option>
                    <option value="Automatizacion de Procesos">Automatizacion de Procesos</option>
                    <option value="Sistema a Medida">Sistema a Medida</option>
                    <option value="APIs e Integraciones">APIs e Integraciones</option>
                    <option value="IA y Procesamiento de Datos">IA y Procesamiento de Datos</option>
                    <option value="Consultoria">Consultoria</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>

            {/* Message */}
            <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Mensaje *
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-colors resize-none"
                    placeholder="Cuentanos sobre tu proyecto..."
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-emerald-900/30 border border-emerald-700 rounded-lg">
                    <p className="text-emerald-300 text-center">
                        Mensaje enviado. Te contactaremos pronto.
                    </p>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-900/30 border border-red-700 rounded-lg">
                    <p className="text-red-300 text-center">
                        Error al enviar. Por favor intenta de nuevo.
                    </p>
                </div>
            )}
        </form>
    );
}

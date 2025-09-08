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
        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Envíanos un mensaje
            </h3>

            {/* Name */}
            <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nombre completo *
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                    placeholder="Tu nombre completo"
                />
            </div>

            {/* Email */}
            <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                    placeholder="tu@email.com"
                />
            </div>

            {/* Phone */}
            <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Teléfono
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                    placeholder="+(502) 0000-0000"
                />
            </div>

            {/* Service */}
            <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Servicio de interés
                </label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                >
                    <option value="">Selecciona un servicio</option>
                    <option value="Sitio Web Profesional">Sitio Web Profesional</option>
                    <option value="Tienda Online (E-commerce)">Tienda Online (E-commerce)</option>
                    <option value="Automatización">Automatización</option>
                    <option value="Aplicación Móvil">Aplicación Móvil</option>
                    <option value="Mantenimiento Web">Mantenimiento Web</option>
                    <option value="Consultoría Digital">Consultoría Digital</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>

            {/* Message */}
            <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mensaje *
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto, objetivos y cualquier detalle importante..."
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-emerald-600 transition-all duration-300 shadow-lg transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg">
                    <p className="text-green-800 dark:text-green-200 text-center">
                        ¡Mensaje enviado correctamente! Te contactaremos pronto.
                    </p>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg">
                    <p className="text-red-800 dark:text-red-200 text-center">
                        Error al enviar el mensaje. Por favor intenta de nuevo.
                    </p>
                </div>
            )}
        </form>
    );
}
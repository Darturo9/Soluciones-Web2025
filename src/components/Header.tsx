'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo y nombre como enlace */}
                    <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                        <Image
                            src="/logo.png"
                            alt="Soluciones-web Logo"
                            width={40}
                            height={40}
                            className="rounded-lg"
                        />
                        <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                            Soluciones-web
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                            Inicio
                        </a>
                        <a href="/servicios" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                            Servicios
                        </a>
                        <a href="/nosotros" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                            Nosotros
                        </a>
                        <a href="/contacto" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                            Contacto
                        </a>
                    </nav>

                    {/* Desktop Button */}
                    <a
                        href="/contacto"
                        className="hidden md:block bg-blue-600 text-white px-4 lg:px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md text-sm lg:text-base"
                    >
                        Empezar Proyecto
                    </a>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
                        <nav className="flex flex-col space-y-4">
                            <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                                Inicio
                            </a>
                            <a href="/servicios" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                                Servicios
                            </a>
                            <a href="/nosotros" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                                Nosotros
                            </a>
                            <a href="/contacto" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                                Contacto
                            </a>
                            <a
                                href="/contacto"
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md text-center"
                            >
                                Empezar Proyecto
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
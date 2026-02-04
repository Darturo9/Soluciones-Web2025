import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Soluciones Web | Desarrollo de Software y Automatizaciones",
    template: "%s | Soluciones Web"
  },
  description:
    "Desarrollo de sistemas a medida, automatizaciones e integraciones para empresas. Software personalizado que transforma negocios.",
  keywords: [
    "desarrollo de software",
    "automatizaciones",
    "sistemas a medida",
    "integraciones API",
    "Next.js",
    "Guatemala",
    "desarrollo web profesional"
  ],
  authors: [{ name: "Soluciones Web" }],
  creator: "Soluciones Web",
  metadataBase: new URL("https://www.solucionesweb-2025.com"),
  openGraph: {
    type: "website",
    locale: "es_GT",
    siteName: "Soluciones Web",
    title: "Soluciones Web | Desarrollo de Software y Automatizaciones",
    description: "Desarrollo de sistemas a medida, automatizaciones e integraciones para empresas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soluciones Web | Desarrollo de Software y Automatizaciones",
    description: "Desarrollo de sistemas a medida, automatizaciones e integraciones para empresas.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Soluciones Web',
  url: 'https://www.solucionesweb-2025.com',
  logo: 'https://www.solucionesweb-2025.com/logo.png',
  description: 'Desarrollo de sistemas a medida, automatizaciones e integraciones para empresas.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GT',
  },
  sameAs: [
    'https://www.tiktok.com/@solucionesweb2025',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['Spanish'],
  },
  offers: {
    '@type': 'AggregateOffer',
    offerCount: 4,
    itemOffered: [
      {
        '@type': 'Service',
        name: 'Automatizacion de Procesos',
        description: 'Elimina tareas repetitivas y reduce errores humanos con flujos de trabajo automatizados.',
      },
      {
        '@type': 'Service',
        name: 'Sistemas a Medida',
        description: 'Aplicaciones web y moviles disenadas especificamente para las necesidades de tu negocio.',
      },
      {
        '@type': 'Service',
        name: 'APIs e Integraciones',
        description: 'Conecta tus sistemas existentes y crea flujos de datos entre plataformas.',
      },
      {
        '@type': 'Service',
        name: 'IA y Procesamiento de Datos',
        description: 'Chatbots inteligentes, analisis de datos y automatizaciones con inteligencia artificial.',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="sWnlHzvLkaDBzaEAtYE7aktVt8UZaHdU7nCx1wbw_bA" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-900 transition-colors duration-300`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
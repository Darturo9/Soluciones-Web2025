import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#030712',
};

export const metadata: Metadata = {
  title: {
    default: "Soluciones Web | Más clientes para tu negocio en Guatemala",
    template: "%s | Soluciones Web"
  },
  description:
    "Ayudo a restaurantes, tiendas, clínicas y gimnasios en Guatemala a conseguir más clientes por internet. Páginas web profesionales, respuestas automáticas y presencia en Google. Sin tecnicismos.",
  keywords: [
    "página web para negocios Guatemala",
    "más clientes por internet Guatemala",
    "página web restaurante Guatemala",
    "presencia en Google Guatemala",
    "página web gimnasio Guatemala",
    "desarrollo web Guatemala",
    "página web profesional Guatemala",
    "conseguir clientes por WhatsApp"
  ],
  authors: [{ name: "Soluciones Web" }],
  creator: "Soluciones Web",
  metadataBase: new URL("https://www.solucionesweb-2025.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_GT",
    url: "https://www.solucionesweb-2025.com",
    siteName: "Soluciones Web",
    title: "Soluciones Web | Más clientes para tu negocio en Guatemala",
    description: "Ayudo a restaurantes, tiendas, clínicas y gimnasios en Guatemala a conseguir más clientes por internet. Sin que tengas que saber nada de tecnología.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Soluciones Web - Más clientes para tu negocio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soluciones Web | Más clientes para tu negocio en Guatemala",
    description: "Ayudo a restaurantes, tiendas, clínicas y gimnasios en Guatemala a conseguir más clientes por internet.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.png',
  },
  verification: {
    google: 'sWnlHzvLkaDBzaEAtYE7aktVt8UZaHdU7nCx1wbw_bA',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Soluciones Web',
  url: 'https://www.solucionesweb-2025.com',
  logo: 'https://www.solucionesweb-2025.com/logo.png',
  description: 'Ayudo a restaurantes, tiendas, clinicas y gimnasios en Guatemala a conseguir mas clientes por internet.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ciudad de Guatemala',
    addressRegion: 'Guatemala',
    addressCountry: 'GT',
  },
  sameAs: [
    'https://www.tiktok.com/@solucionesweb2025',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: '+502-5558-0173',
    availableLanguage: ['Spanish'],
    areaServed: 'GT',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios para negocios locales',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pagina web para negocios',
          description: 'Pagina profesional para que tus clientes te encuentren en Google y escriban por WhatsApp.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Respuestas automaticas',
          description: 'Mensajes automaticos, citas y recordatorios sin estar pegado al celular todo el dia.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Atencion 24 horas',
          description: 'Asistente que responde preguntas y toma datos de clientes de noche y fin de semana.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Herramienta a medida',
          description: 'Solucion creada especificamente para como funciona tu restaurante, tienda o clinica.',
        },
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D2KNQQWV7B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D2KNQQWV7B');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vvrd77y1pd");
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-[#030712]`}>
        <Header />
        <Breadcrumbs />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

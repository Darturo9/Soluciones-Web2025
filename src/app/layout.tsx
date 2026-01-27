import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";


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
  metadataBase: new URL("https://soluciones-web.vercel.app"),
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-900 transition-colors duration-300`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
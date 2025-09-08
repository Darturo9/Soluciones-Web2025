import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soluciones-web | Desarrollo Web para Negocios Locales",
  description:
    "Desarrollamos software web personalizado para negocios locales que buscan crecer, automatizar procesos y destacar en el mundo digital.",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
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
        <link rel="icon" href="/logo.png" sizes="any" />
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
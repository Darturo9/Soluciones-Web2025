export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-gray-950 text-white min-h-screen">
        {children}
      </body>
    </html>
  )
}

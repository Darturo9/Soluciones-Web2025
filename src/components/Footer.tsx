export default function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-[#0f1f38] py-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#1e3a5f] text-sm">
          © 2026 Soluciones Web. Todos los derechos reservados.
        </p>
        <a
          href="mailto:solucionesweb2025@gmail.com"
          className="text-[#1e3a5f] hover:text-[#60a5fa] text-sm transition-colors"
        >
          solucionesweb2025@gmail.com
        </a>
      </div>
    </footer>
  );
}

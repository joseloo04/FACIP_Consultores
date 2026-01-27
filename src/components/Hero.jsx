function Hero() {
  return (
    // ✅ Figma: Fondo blanco limpio
    // ✅ Updated: pt-32 md:pt-40 to clear h-28 header (112px) with moderate spacing
    // ✅ Guide: pb-32 for bottom spacing
    <section className="pt-32 md:pt-40 pb-32 bg-white overflow-hidden">

      {/* ✅ CRÍTICO: max-w-7xl mx-auto = CENTRADO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Guide: Grid gap-12 (48px) */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* COLUMNA IZQUIERDA - TEXTO */}
          <div data-aos="fade-right" className="text-center md:text-left">
            {/* Badge: increased spacing mb-8 */}
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-8 bg-emerald-100/60 text-emerald-600 tracking-wide">
              Consultoría Profesional ISO
            </span>

            {/* H1: increased spacing mb-8 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 text-slate-900 leading-[1.2] tracking-tight">
              Certificaciones ISO <br />
              para tu empresa
            </h1>

            {/* P: increased spacing mb-10 */}
            <p className="text-xl mb-10 text-slate-600 leading-relaxed max-w-lg mx-auto md:mx-0">
              Soy Fabiola Cisternas, Ingeniera en Alimentos especializada en la
              implementación, consultoría y auditoría de normas ISO. Te ayudo a
              alcanzar los más altos estándares de calidad y seguridad alimentaria.
            </p>

            {/* Buttons: mb-8, gap-4 */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center md:justify-start">
              <a
                href="#contacto"
                // Guide: px-8 py-6 (Large)
                className="inline-flex items-center justify-center px-8 py-6 text-base font-medium text-white transition-all duration-200 bg-emerald-600 rounded-lg hover:bg-emerald-700 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
              >
                Solicitar Consultoría
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <a
                href="#servicios"
                // Guide: px-8 py-6 (Large)
                className="inline-flex items-center justify-center px-8 py-6 text-base font-medium text-emerald-600 transition-all duration-200 bg-transparent border border-emerald-600 rounded-lg hover:bg-emerald-50 hover:text-slate-900 whitespace-nowrap"
              >
                Ver Servicios
              </a>
            </div>

            {/* Stats: pt-8 (32px), gap-6 (24px) */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-1">10+</div>
                <div className="text-sm font-medium text-gray-500">Años de experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-1">50+</div>
                <div className="text-sm font-medium text-gray-500">Empresas certificadas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-1">100%</div>
                <div className="text-sm font-medium text-gray-500">Éxito en auditorías</div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA - IMAGEN */}
          <div className="relative" data-aos="fade-left">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/imagenes/hero/fabiola-cisternas.png"
                alt="Fabiola Cisternas - Ingeniera en Alimentos"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay Guide: emerald-900/30 to transparent */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent pointer-events-none"></div>
            </div>

            {/* NOTA: El badge flotante "Certificación" no aparecía en el screenshot de Figma nuevo (Image 0), 
                así que lo remuevo para mayor fidelidad al diseño clean. 
                Si se requiere, se puede descomentar. */}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
function About() {
  return (
    // ✅ Updated: py-24 (mobile) lg:py-32 (desktop) for premium spacing
    <section id="acerca" className="py-24 lg:py-32 bg-white overflow-hidden">

      {/* ✅ CRÍTICO: max-w-7xl mx-auto = CENTRADO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Grid: Imagen izquierda, Texto derecha */}
        {/* En móvil: Imagen arriba, texto abajo. Centrado todo. */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center text-center md:text-left">

          {/* COLUMNA IZQUIERDA - IMAGEN */}
          <div data-aos="fade-right" className="mx-auto w-full max-w-md md:max-w-full relative">
            {/* Decorative Squares Guide: Top-right emerald-100, Bottom-left emerald-600 */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-100 rounded-2xl -z-10 hidden md:block"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-600 rounded-2xl -z-10 hidden md:block"></div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/imagenes/hero/fabiola-cisternas.png"
                alt="Fabiola Cisternas - Ingeniera en Alimentos"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* COLUMNA DERECHA - TEXTO */}
          <div data-aos="fade-left">
            {/* Badge pill shape */}
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6 bg-emerald-100/60 text-emerald-600 tracking-wide">
              Acerca de mí
            </span>

            {/* H2 Guide: Mobile 30px (3xl), Tablet 36px (4xl), Desktop 48px (5xl). Weight Medium. */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-2 text-gray-900 tracking-tight">
              Fabiola Cisternas
            </h2>

            <p className="text-xl font-medium mb-6 text-emerald-600">
              Ingeniera en Alimentos | Consultora ISO
            </p>

            <div className="text-gray-600 mb-8 leading-relaxed text-lg">
              <p className="mb-4">
                Consultora FACIP ofrece asesorías en Sistemas de Gestión, en forma
                personalizada y con un enfoque holístico, comprendiendo las
                necesidades y realidades de cada Cliente.
              </p>
              <p>
                A través de profesionales con amplia experiencia en empresas
                multinacionales, integramos la implementación, capacitaciones y
                auditorías para liderar a tu organización hacia el éxito sostenible.
              </p>
            </div>

            {/* Lista de características estilo Figma (Vertical con iconos) */}
            <div className="space-y-6">

              {/* Item 1 */}
              <div className="flex flex-col md:flex-row gap-4 items-center md:items-start text-center md:text-left">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mx-auto md:mx-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Experiencia Certificada</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Más de 10 años implementando y auditando normas ISO en la industria alimentaria.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col md:flex-row gap-4 items-center md:items-start text-center md:text-left">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mx-auto md:mx-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Enfoque Personalizado</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Desarrollo soluciones adaptadas a las necesidades específicas de cada empresa.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col md:flex-row gap-4 items-center md:items-start text-center md:text-left">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mx-auto md:mx-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Garantía de Calidad</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Acompañamiento completo hasta lograr la certificación exitosa.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
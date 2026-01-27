function Services() {
  const servicios = [
    {
      id: 1,
      // Icono: Clipboard Check
      icono: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
      titulo: "Implementación ISO",
      descripcion: "Diseño e implementación completa de sistemas de gestión de calidad según normas ISO 9001, ISO 22000, HACCP y otras.",
      caracteristicas: [
        "Diagnóstico inicial y brechas",
        "Documentación y procesos",
        "Capacitación del personal",
        "Puesta en marcha"
      ]
    },
    {
      id: 2,
      // Icono: File Text / Consultoria
      icono: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      titulo: "Consultoría Especializada",
      descripcion: "Asesoría experta para optimizar tus procesos y mantener la conformidad con los estándares internacionales.",
      caracteristicas: [
        "Mejora continua de procesos",
        "Actualización de sistemas",
        "Gestión de no conformidades",
        "Planes de acción correctiva"
      ]
    },
    {
      id: 3,
      // Icono: Search / Auditoria
      icono: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      titulo: "Auditorías Internas",
      descripcion: "Auditorías exhaustivas para evaluar el cumplimiento de las normas ISO y preparar a tu empresa para la certificación.",
      caracteristicas: [
        "Auditorías programadas",
        "Informes detallados",
        "Recomendaciones de mejora",
        "Preparación certificación"
      ]
    }
  ];

  return (
    // ✅ Updated: py-24 (mobile) lg:py-32 (desktop) for premium spacing
    <section id="servicios" className="py-24 lg:py-32 bg-white transition-colors duration-300">

      {/* Contenedor centrado */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ============ ENCABEZADO ============ */}
        <div className="text-center mb-20" data-aos="fade-up">
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-emerald-100/60 text-emerald-600 tracking-wide">
            Servicios Profesionales
          </span>

          {/* Título */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 text-gray-900 tracking-tight">
            Soluciones integrales para tu <br className="hidden md:block" />certificación ISO
          </h2>

          {/* Descripción */}
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Servicios especializados diseñados para guiar a tu empresa hacia los más
            altos estándares de calidad.
          </p>
        </div>

        {/* ============ GRID DE TARJETAS ============ */}
        <div className="grid md:grid-cols-3 gap-8">

          {servicios.map((servicio, index) => (
            <div
              key={servicio.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              // Guide: rounded-xl (12px), p-8 (32px), shadow (base), hover:shadow-xl, border-0
              className="group p-8 rounded-xl bg-white shadow hover:shadow-xl hover:-translate-y-1
                         transition-all duration-300 cursor-default"
            >

              {/* Ícono Sólido Verde */}
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 
                              bg-emerald-600 text-white shadow-lg shadow-emerald-200">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={servicio.icono}
                  />
                </svg>
              </div>

              {/* Título */}
              <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-emerald-700 transition-colors">
                {servicio.titulo}
              </h3>

              {/* Descripción */}
              <p className="mb-8 text-slate-600 leading-relaxed min-h-[80px]">
                {servicio.descripcion}
              </p>

              {/* Lista de características */}
              <ul className="space-y-3 pt-6 border-t border-gray-50">
                {servicio.caracteristicas.map((caracteristica, i) => (
                  <li
                    key={i}
                    className="flex items-start"
                  >
                    {/* Bullet dot */}
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 mr-3"></span>

                    {/* Texto */}
                    <span className="text-sm text-slate-500 font-medium">
                      {caracteristica}
                    </span>
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;
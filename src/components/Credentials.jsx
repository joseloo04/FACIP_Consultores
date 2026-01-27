function Credentials() {
  // ============ DATOS ============
  const educacion = [
    {
      id: 1,
      titulo: "Ingeniera en Alimentos, Universidad Católica de Valparaíso"
    },
    {
      id: 2,
      titulo: "Magíster en Ciencia y Tecnología de los Alimentos de la Universidad de Chile"
    },
    {
      id: 3,
      titulo: "Diplomado en Sistemas Integrados de Gestión, Universidad Adolfo Ibáñez"
    }
  ];

  const certificaciones = [
    {
      id: 1,
      titulo: "Auditor Líder SGI del IRCA"
    },
    {
      id: 2,
      titulo: "Auditor ISO 22000, del IRCA"
    },
    {
      id: 3,
      titulo: "Lead Auditor ISO 9001:2008, ISO 14001:2004 e ISO 9001:2015 del IRCA"
    }
  ];

  const experiencia = [
    {
      id: 1,
      texto: "Desde 1995 desempeñándose como Ingeniero Jefe del Control de Calidad, Gerente de Calidad y Asesora en grandes empresas."
    },
    {
      id: 2,
      texto: "El año 2013 conforma FACIP Consultores SpA, ofreciendo servicios especializados de consultoría en sistemas de Gestión."
    }
  ];

  return (
    // ✅ Figma: Fondo verde muy muy suave para separar secciones visualmente
    // ✅ Updated: py-24 (mobile) lg:py-32 (desktop) for premium spacing
    <section className="py-24 lg:py-32 bg-emerald-50/30 overflow-hidden">

      {/* Contenedor centrado */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ============ ENCABEZADO ============ */}
        <div className="text-center mb-16" data-aos="fade-up">
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-emerald-100/60 text-emerald-600 tracking-wide">
            Credenciales Profesionales
          </span>

          {/* Título */}
          {/* Guide H2: 30px-48px (3xl-5xl) */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 text-gray-900 tracking-tight">
            Formación y Experiencia
          </h2>

          {/* Descripción */}
          <p className="text-xl max-w-3xl mx-auto text-slate-600">
            Respaldo académico y trayectoria profesional en la industria
          </p>
        </div>

        {/* ============ GRID DE CREDENCIALES ============ */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">

          {/* ====== FORMACIÓN ACADÉMICA ====== */}
          <div data-aos="fade-right" className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 flex items-center justify-center md:justify-start gap-2">
              Formación Académica
            </h3>

            <div className="space-y-4">
              {educacion.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Bullet point verde distintivo */}
                    <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full mt-2 bg-emerald-500"></div>

                    {/* Texto */}
                    <p className="text-slate-700 font-medium">
                      {item.titulo}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ====== CERTIFICACIONES ====== */}
          <div data-aos="fade-left" className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 flex items-center justify-center md:justify-start gap-2">
              Certificaciones Profesionales
            </h3>

            <div className="space-y-4">
              {certificaciones.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Bullet point verde distintivo */}
                    <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full mt-2 bg-emerald-500"></div>

                    {/* Texto */}
                    <p className="text-slate-700 font-medium">
                      {item.titulo}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============ EXPERIENCIA PROFESIONAL ============ */}
        {/* ============ EXPERIENCIA PROFESIONAL ============ */}
        <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up">
          {experiencia.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full mt-2 bg-emerald-500"></div>
              <p className="text-lg text-slate-700 leading-relaxed">
                {item.texto}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Credentials;
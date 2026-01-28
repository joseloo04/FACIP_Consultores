function ExperienceInAction() {
    return (
        // ✅ Figma: Background white, large section
        // ✅ Updated: py-24 (mobile) lg:py-32 (desktop) for premium spacing
        <section className="py-24 lg:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Encabezado */}
                <div className="text-center mb-16" data-aos="fade-up">
                    {/* Guide H2: 30px-48px (3xl-5xl) */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 text-gray-900">
                        Experiencia en Acción
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Capacitación y resultados reales con empresas certificadas
                    </p>
                </div>

                {/* Grid de 2 Cards Grandes */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

                    {/* Card 1: Capacitaciones */}
                    <div
                        className="group relative h-[400px] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
                        data-aos="fade-right"
                    >
                        {/* Imagen de fondo */}
                        <div className="absolute inset-0">
                            {/* Placeholder si no hay imagen específica, o usar una genérica */}
                            <img
                                src={`${import.meta.env.BASE_URL}imagenes/experiencia/capacitacion.png`}
                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2670&auto=format&fit=crop' }}
                                alt="Capacitaciones presenciales"
                                // ✅ FIX: object-top to keep faces visible + reduced gradient height
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay gradiente oscuro SOLO abajo (h-3/4) */}
                            <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300"></div>
                        </div>

                        {/* Contenido Texto Abajo */}
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <h3 className="text-2xl font-bold text-white mb-2" style={{ color: '#ffffff' }}>
                                Capacitaciones Especializadas
                            </h3>
                            <p className="text-gray-200 text-lg opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" style={{ color: '#e5e7eb' }}>
                                Sesiones de formación práctica para equipos de trabajo en implementación de sistemas ISO
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Resultados */}
                    <div
                        className="group relative h-[400px] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
                        data-aos="fade-left"
                    >
                        {/* Imagen de fondo */}
                        <div className="absolute inset-0">
                            <img
                                src={`${import.meta.env.BASE_URL}imagenes/experiencia/certificados.jpg`}
                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop' }}
                                alt="Resultados y certificaciones"
                                // ✅ FIX: object-top to keep faces visible
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay gradiente oscuro SOLO abajo (h-3/4) */}
                            <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300"></div>
                        </div>

                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <h3 className="text-2xl font-bold text-white mb-2" style={{ color: '#ffffff' }}>
                                Resultados Comprobados
                            </h3>
                            <p className="text-gray-200 text-lg opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" style={{ color: '#e5e7eb' }}>
                                Empresas y profesionales exitosamente certificados en estándares internacionales
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default ExperienceInAction;

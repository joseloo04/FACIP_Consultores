function Footer() {
  // ============ CONFIGURACIÓN CENTRALIZADA ============
  const config = {
    nombreEmpresa: "FACIP",
    nombreCompleto: "FACIP Consultores",
    descripcion: "Servicios profesionales de ingeniería en alimentos y consultoría ISO para empresas que buscan la excelencia en calidad y seguridad alimentaria.",
    certificacion: "ISO 9001:2015",
    email: "fabiolacisternas@facip.cl",
    telefonoMovil: "+56 9 8505 5611",
    ubicacion: "Santiago, Chile"
  };

  const añoActual = new Date().getFullYear();

  // ============ ENLACES RÁPIDOS ============
  const enlacesRapidos = [
    { id: 1, texto: "Acerca de", href: "#acerca" },
    { id: 2, texto: "Servicios", href: "#servicios" },
    { id: 3, texto: "Credenciales", href: "#acerca" },
    { id: 4, texto: "Contacto", href: "#contacto" }
  ];

  // ============ REDES SOCIALES ============
  const redesSociales = [
    {
      id: 1,
      nombre: "LinkedIn",
      url: "https://linkedin.com",
      icono: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
    },
    {
      id: 2,
      nombre: "Email",
      url: `mailto:${config.email}`,
      icono: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    {
      id: 3,
      nombre: "WhatsApp",
      url: "https://wa.me/56985055611",
      icono: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
    }
  ];

  // ============ ENLACES LEGALES ============
  const enlacesLegales = [
    { id: 1, texto: "Política de Privacidad", href: "#" },
    { id: 2, texto: "Términos de Servicio", href: "#" }
  ];

  return (
    // ✅ CAMBIO 1: bg-gray-900 text-gray-50 (en vez de inline)
    <footer className="bg-gray-900 text-gray-50">

      {/* SECCIÓN PRINCIPAL */}
      {/* ✅ CAMBIO 2: max-w-7xl (consistencia) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid md:grid-cols-3 gap-8">

          {/* ============ COLUMNA 1: LOGO Y DESCRIPCIÓN ============ */}
          <div>
            {/* Logo */}
            <div className="flex items-center h-8">
              <img
                src={`${import.meta.env.BASE_URL}imagenes/LOGO_FACIP.png`}
                alt="FACIP Quality Management"
                // Logo con altura del 100% del contenedor y ancho automático
                className="h-full w-auto max-h-8 object-contain"
              />
            </div>

            {/* Descripción */}
            <p className="text-sm mb-4 text-gray-300 leading-relaxed">
              {config.descripcion}
            </p>

            {/* Badge certificación */}
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800">
              {/* Ícono check */}
              <svg
                className="w-5 h-5 text-emerald-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-300">
                {config.certificacion}
              </span>
            </div>
          </div>

          {/* ============ COLUMNA 2: ENLACES RÁPIDOS ============ */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">
              Enlaces Rápidos
            </h3>

            <ul className="space-y-3">
              {enlacesRapidos.map((enlace) => (
                <li key={enlace.id}>
                  <a
                    href={enlace.href}
                    className="text-sm text-gray-300 hover:text-emerald-500 transition-colors"
                  >
                    {enlace.texto}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ============ COLUMNA 3: REDES SOCIALES Y CONTACTO ============ */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">
              Conecta Conmigo
            </h3>

            {/* Íconos de redes sociales */}
            <div className="flex gap-3 mb-6">
              {redesSociales.map((red) => (
                <a
                  key={red.id}
                  href={red.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={red.nombre}
                  // ✅ CAMBIO 3: Hover con Tailwind puro
                  className="p-3 rounded-lg bg-gray-800 text-gray-300
                             hover:bg-emerald-600 hover:text-white 
                             transition-all duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={red.icono} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Información de contacto */}
            <div className="space-y-2">
              <p className="text-sm text-gray-300">
                📧 {config.email}
              </p>
              <p className="text-sm text-gray-300">
                📱 {config.telefonoMovil}
              </p>
              <p className="text-sm text-gray-300">
                📍 {config.ubicacion}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ============ BARRA DE COPYRIGHT ============ */}
      {/* ✅ CAMBIO 4: border-t bg-gray-950 (en vez de inline) */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © {añoActual} {config.nombreCompleto}. Todos los derechos reservados.
            </p>

            {/* Enlaces legales */}
            <div className="flex gap-6">
              {enlacesLegales.map((enlace) => (
                <a
                  key={enlace.id}
                  href={enlace.href}
                  className="text-sm text-gray-400 hover:text-emerald-500 transition-colors"
                >
                  {enlace.texto}
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
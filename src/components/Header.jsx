import { useState } from 'react';

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    // Header fijo con altura de 112px (h-28) para acomodar logo grande
    <header className="bg-white fixed w-full top-0 z-50 h-28 transition-all duration-300 shadow-sm">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">

        <div className="flex justify-between items-center h-full">

          {/* ============ LOGO ============ */}
          <div className="flex items-center h-20">
            <img
              src={`${import.meta.env.BASE_URL}imagenes/LOGO_FACIP.png`}
              alt="FACIP Quality Management"
              className="h-full w-auto max-h-20 object-contain"
            />
          </div>

          {/* ============ MENÚ DESKTOP ============ */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#acerca"
              className="text-gray-600 hover:text-emerald-600 transition-colors text-base font-medium"
            >
              Acerca de
            </a>

            <a
              href="#servicios"
              className="text-gray-600 hover:text-emerald-600 transition-colors text-base font-medium"
            >
              Servicios
            </a>

            <a
              href="#contacto"
              className="text-gray-600 hover:text-emerald-600 transition-colors text-base font-medium"
            >
              Contacto
            </a>

            {/* Botón CTA */}
            <a href="#contacto" className="btn-primary text-base px-6 py-3">
              Contáctame
            </a>
          </div>

          {/* ============ BOTÓN MENÚ MÓVIL ============ */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Abrir menú"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuAbierto ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* ============ MENÚ MÓVIL (Desplegable) ============ */}
        {menuAbierto && (
          <div className="md:hidden absolute left-0 right-0 top-28 bg-white border-t border-gray-100 shadow-lg">
            <div className="flex flex-col p-6 space-y-4 max-w-7xl mx-auto">

              <a
                href="#acerca"
                className="block py-3 px-4 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors text-lg"
                onClick={() => setMenuAbierto(false)}
              >
                Acerca de
              </a>

              <a
                href="#servicios"
                className="block py-3 px-4 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors text-lg"
                onClick={() => setMenuAbierto(false)}
              >
                Servicios
              </a>

              <a
                href="#contacto"
                className="block py-3 px-4 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors text-lg"
                onClick={() => setMenuAbierto(false)}
              >
                Contacto
              </a>

              <a
                href="#contacto"
                className="btn-primary inline-block text-center mt-4 text-lg py-3"
                onClick={() => setMenuAbierto(false)}
              >
                Contáctame
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
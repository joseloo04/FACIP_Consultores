import { useState } from 'react';

function Contact() {
  // ============ CONFIGURACIÓN ============
  const SISTEMA_AGENDAMIENTO = 'formulario';
  const CALENDLY_URL = 'https://calendly.com/fabiolacisternas-facip/consultoria-inicial';
  const WHATSAPP_NUMBER = '56985055611';

  // ============ ESTADO DEL FORMULARIO ============
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    mensaje: '',
    fechaPreferida: '',
    horaPreferida: ''
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  // ============ MANEJADORES ============
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    setSubmitStatus('success');

    setTimeout(() => {
      setFormData({
        nombre: '',
        email: '',
        empresa: '',
        mensaje: '',
        fechaPreferida: '',
        horaPreferida: ''
      });
      setSubmitStatus(null);
    }, 3000);
  };

  // ============ HORAS DISPONIBLES ============
  const horasDisponibles = [
    '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00', '12:00 - 13:00',
    '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00'
  ];

  // ============ INFORMACIÓN DE CONTACTO ============
  const infoContacto = [
    {
      id: 1,
      icono: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      titulo: "Email",
      contenido: "fabiolacisternas@facip.cl",
      link: "mailto:fabiolacisternas@facip.cl"
    },
    {
      id: 2,
      icono: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      titulo: "Teléfono Móvil",
      contenido: "+56 9 8505 5611",
      link: "tel:+56985055611"
    },
    {
      id: 3,
      icono: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      titulo: "Teléfono Oficina",
      contenido: "+56 2 847 2930",
      link: "tel:+56284729 30"
    },
    {
      id: 4,
      icono: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
      titulo: "Dirección",
      contenido: "Av. Providencia 1881, OF. 201, Santiago",
      link: null
    }
  ];

  const getFechaMinima = () => new Date().toISOString().split('T')[0];

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ============ ENCABEZADO ============ */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 bg-emerald-100 text-emerald-700">
            Contáctame
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Iniciemos tu proyecto de certificación ISO
          </h2>

          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Estoy aquí para responder tus preguntas y ayudarte a alcanzar los estándares de calidad que tu empresa necesita.
          </p>
        </div>

        {/* ============ GRID DE FORMULARIO Y INFO ============ */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* ====== COLUMNA IZQUIERDA: FORMULARIO ====== */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label htmlFor="nombre" className="block text-sm font-medium mb-2 text-gray-700">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="empresa" className="block text-sm font-medium mb-2 text-gray-700">
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder="Nombre de tu empresa"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none transition-all"
                />
              </div>

              {SISTEMA_AGENDAMIENTO === 'formulario' && (
                <>
                  <div>
                    <label htmlFor="fechaPreferida" className="block text-sm font-medium mb-2 text-gray-700">
                      Fecha Preferida
                    </label>
                    <input
                      type="date"
                      id="fechaPreferida"
                      name="fechaPreferida"
                      value={formData.fechaPreferida}
                      onChange={handleChange}
                      min={getFechaMinima()}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="horaPreferida" className="block text-sm font-medium mb-2 text-gray-700">
                      Hora Preferida
                    </label>
                    <select
                      id="horaPreferida"
                      name="horaPreferida"
                      value={formData.horaPreferida}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none transition-all"
                    >
                      <option value="">Selecciona un horario</option>
                      {horasDisponibles.map((hora, index) => (
                        <option key={index} value={hora}>{hora}</option>
                      ))}
                    </select>
                  </div>
                </>
              )}

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium mb-2 text-gray-700">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Cuéntame sobre tu proyecto o consulta..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none transition-all resize-vertical"
                />
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center">
                Enviar Mensaje
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 rounded-lg bg-emerald-50">
                  <p className="text-emerald-700">✓ Mensaje enviado exitosamente. Te contactaré pronto.</p>
                </div>
              )}

              <p className="text-sm text-center text-gray-500">
                Al enviar este formulario, aceptas que te contacte para responder a tu consulta.
              </p>

            </form>
          </div>

          {/* ====== COLUMNA DERECHA: INFORMACIÓN DE CONTACTO ====== */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Información de Contacto
            </h3>

            <p className="mb-8 text-gray-600">
              Completa el formulario o contáctame directamente por los siguientes medios:
            </p>

            <div className="space-y-6">
              {infoContacto.map((info) => (
                <div key={info.id} className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-emerald-100">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={info.icono} />
                    </svg>
                  </div>

                  <div>
                    <h4 className="font-medium mb-1 text-gray-900">{info.titulo}</h4>
                    {info.link ? (
                      <a href={info.link} className="text-gray-600 hover:text-emerald-600 transition-colors">
                        {info.contenido}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.contenido}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-xl bg-emerald-50 border border-emerald-100">
              <h4 className="font-bold mb-2 text-emerald-700">
                ⏱️ Horario de Atención
              </h4>
              <p className="text-emerald-700">
                Lunes a Viernes: 9:00 - 18:00<br />
                Respuesta en 24 horas hábiles
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
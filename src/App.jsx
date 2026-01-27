import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Credentials from './components/Credentials';
import Services from './components/Services';
import ExperienceInAction from './components/ExperienceInAction'; // ✅ Nuevo componente
import Contact from './components/Contact';
import Footer from './components/Footer';

// ✅ Importar AOS (Animate On Scroll)
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // ✅ Inicializar AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Duración de la animación en ms
      once: false,   // ✅ Se anima CADA VEZ que haces scroll (subir/bajar)
      mirror: true,  // ✅ Animar elementos al hacer scroll hacia arriba
      offset: 100,   // Offset de inicio
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    // Contenedor principal con altura mínima de pantalla completa
    <div className="min-h-screen bg-white">
      {/* 
        Header: Navegación fija en la parte superior
        Se mantiene visible al hacer scroll
      */}
      <Header />

      {/* 
        Hero: Sección principal con foto y mensaje de bienvenida
        Primera impresión del sitio
      */}
      <Hero />

      {/* 
        About: Sección "Acerca de mí"
        Información sobre Fabiola y FACIP
      */}
      <About />

      {/* 
        Credentials: Formación académica y certificaciones
        Muestra credenciales profesionales
      */}
      <Credentials />

      {/* 
        Services: Servicios ofrecidos
        Implementación ISO, Consultoría, Auditorías
      */}
      <Services />

      {/* 
        ExperienceInAction: Experiencia en acción (Visual)
        Capacitaciones y resultados comprobados con imágenes
      */}
      <ExperienceInAction />

      {/* 
        Contact: Formulario de contacto
        Permite a clientes potenciales comunicarse
      */}
      <Contact />

      {/* 
        Footer: Pie de página
        Enlaces, información de contacto, redes sociales
      */}
      <Footer />
    </div>
  );
}

export default App;
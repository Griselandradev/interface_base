import React from 'react'; 
import './About.css'; 
import Header from '../components/Header'; 

function About() {
  return (
    <div>
      <Header />
      <div className="about-container">
        <div className="grid-container">
          <div className="grid-item">
            <h2>Misión</h2>
            <p>La Misión Fibras y Figuras SAS es atender las necesidades en diseño, innovación y creación de productos en fibra de vidrio,
               proporcionando a sus clientes servicios y productos de calidad, aplicables en campos como la construcción, la industria y el hogar.</p>
          </div>
          <div className="grid-item">
            <h2>Visión</h2>
            <p>La Visión es convertirnos en una compañía orientada a la innovación y soluciones en productos de fibra de vidrio.
               A la vanguardia de las necesidades de la sociedad constructora e industrial. Con un continuo crecimiento y extensión nacional,
              que nos reconozcamos ante nuestros clientes por la excelencia en el servicio y la calidad de nuestros productos, a su vez que
               representemos el crecimiento y desarrollo del equipo de trabajo.</p>
          </div>
          <div className="grid-item">
            <h2>Política</h2>
            <p>Para nuestra compañía es de vital importancia la confianza de los clientes a través de la solución integral
               de sus necesidades, la cual radica en cuatro pilares fundamentales:
               <ul>
                 <li>La calidad de nuestros productos.</li>
                 <li>Oportunidad en el servicio.</li>
                 <li>Personal calificado.</li>
                 <li>Mejoramiento continuo de los procesos.</li>
               </ul>
              Garantizando la sostenibilidad de nuestra empresa en el tiempo, de nuestro personal y accionistas.</p>
          </div>
        </div>
        <p>Contacto: <a href="tel:+573216436377">3216436377</a></p>
        <p>Dirección: Calle 99 Sur # 56-35. Barrio La Tablaza, La Estrella, Antioquia.</p>
      </div>
    </div>
  );
}

export default About;


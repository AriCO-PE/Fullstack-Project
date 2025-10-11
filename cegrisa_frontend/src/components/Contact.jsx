import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="title">Contáctanos</h2>
          <p className="sub muted">¿Tienes alguna pregunta? Escríbenos y te responderemos a la brevedad.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="form">
              <label htmlFor="name" className="label">Nombre completo</label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="input" />

              <label htmlFor="email" className="label">Correo electrónico</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="input" />

              <label htmlFor="phone" className="label">Teléfono</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="input" />

              <label htmlFor="message" className="label">Mensaje</label>
              <textarea id="message" name="message" rows="4" required value={formData.message} onChange={handleChange} className="textarea" />

              <button type="submit" className="btn btn-primary" style={{width:'100%'}}>Enviar mensaje</button>
            </form>
          </div>
          <div className="contact-info">
            <h3 className="info-title">Información de contacto</h3>
            <ul className="info-list">
              <li>
                <strong>Dirección:</strong><br />
                Av. Industrial #1234, Zona Industrial, Ciudad, Estado, C.P. 12345
              </li>
              <li>
                <strong>Teléfono:</strong> <a href="tel:+521234567890">+52 123 456 7890</a>
              </li>
              <li>
                <strong>Email:</strong> <a href="mailto:contacto@cegrisa.com">contacto@cegrisa.com</a>
              </li>
            </ul>

            <div className="schedule">
              <h3 className="info-title">Horario de atención</h3>
              <ul>
                <li><span>Lunes a Viernes</span><strong>9:00 AM - 6:00 PM</strong></li>
                <li><span>Sábado</span><strong>9:00 AM - 2:00 PM</strong></li>
                <li><span>Domingo</span><strong>Cerrado</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

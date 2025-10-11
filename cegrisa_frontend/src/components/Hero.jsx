import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="hero-title">Soluciones en Acero Inoxidable de Alta Calidad</h1>
            <p className="hero-sub">Especialistas en fabricación y diseño de productos en acero inoxidable para la industria y el hogar.</p>
            <div className="hero-actions">
              <a href="/contact" className="btn btn-primary">Solicitar Cotización</a>
              <a href="/products" className="btn-link">Ver Productos →</a>
            </div>
          </motion.div>
        </div>
        <div className="hero-image">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=1400&q=80" alt="Trabajador soldando acero inoxidable" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

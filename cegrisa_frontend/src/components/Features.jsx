import './Features.css';

const features = [
  {
    name: 'Materiales de Calidad',
    description: 'Utilizamos acero inoxidable de la más alta calidad para garantizar durabilidad y resistencia.',
  },
  {
    name: 'Trabajo Preciso',
    description: 'Cortes y soldaduras de precisión para un acabado impecable en cada pieza.',
  },
  {
    name: 'Entrega a Tiempo',
    description: 'Comprometidos con los plazos de entrega acordados con nuestros clientes.',
  },
  {
    name: 'Garantía',
    description: 'Todos nuestros productos cuentan con garantía por defectura en materiales y mano de obra.',
  },
];

export default function Features() {
  return (
    <section className="features section" id="about">
      <div className="container">
        <div className="features-head text-center">
          <h2 className="eyebrow">Sobre Nosotros</h2>
          <h3 className="title">Soluciones en Acero Inoxidable</h3>
          <p className="sub muted">Más de 15 años de experiencia ofreciendo productos de acero inoxidable de la más alta calidad para la industria y el hogar.</p>
        </div>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.name} className="feature-card">
              <div className="feature-icon" />
              <h4 className="feature-title">{f.name}</h4>
              <p className="feature-desc muted">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

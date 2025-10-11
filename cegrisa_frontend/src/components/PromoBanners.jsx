import './PromoBanners.css';

export default function PromoBanners() {
  return (
    <section className="promos section">
      <div className="container promos-grid">
        <a className="promo-card left" href="#">
          <div className="promo-content">
            <span className="promo-kicker">Pavimentos</span>
            <h4 className="promo-title">Desde 25€ / m²</h4>
          </div>
        </a>
        <a className="promo-card right" href="#">
          <div className="promo-content">
            <span className="promo-kicker">Colecciones</span>
            <h4 className="promo-title">Selección de la mejor calidad al mejor precio</h4>
            <span className="promo-cta">Ver más</span>
          </div>
        </a>
      </div>
    </section>
  );
}

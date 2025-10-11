import './PromoBar.css';

export default function PromoBar() {
  return (
    <div className="promobar">
      <div className="container promobar-inner">
        <span className="promo-text">¡Cocinas Roca en liquidación! Ahorra hasta 25% en modelos seleccionados.</span>
        <a href="#" className="promo-cta">Ver ofertas</a>
      </div>
    </div>
  );
}

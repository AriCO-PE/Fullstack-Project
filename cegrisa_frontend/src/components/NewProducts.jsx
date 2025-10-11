import './NewProducts.css';

const newItems = [
  { id: 1, name: 'Gres porcelánico 60x60', variant: 'BEI - 60 x 60', price: 'Desde 12.99€', img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=60' },
  { id: 2, name: 'Grifo monomando latón', variant: 'Acabado latón cepillado', price: '79.00€', img: 'https://images.unsplash.com/photo-1600566753190-17f3a23f8d14?auto=format&fit=crop&w=800&q=60' },
  { id: 3, name: 'Grifo de lavabo', variant: 'Acabado cromo', price: '59.00€', img: 'https://images.unsplash.com/photo-1576698483491-8cdda7c17f66?auto=format&fit=crop&w=800&q=60' },
  { id: 4, name: 'Mezcladora cocina', variant: 'Acabado acero', price: '69.00€', img: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?auto=format&fit=crop&w=800&q=60' },
];

export default function NewProducts() {
  return (
    <section className="newproducts section">
      <div className="container">
        <h3 className="block-title">Novedades</h3>
        <div className="new-grid">
          {newItems.map(it => (
            <div key={it.id} className="new-card">
              <div className="new-media">
                <img src={it.img} alt={it.name} />
              </div>
              <div className="new-body">
                <div className="new-name">{it.name}</div>
                <div className="new-variant muted">{it.variant}</div>
                <div className="new-price">{it.price}</div>
                <button className="btn btn-primary new-btn">Añadir</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

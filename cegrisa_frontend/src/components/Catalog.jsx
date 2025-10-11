import './Catalog.css';

const items = [
  { label: 'Grifería', img: 'https://images.unsplash.com/photo-1583341845082-894dde7e58f9?auto=format&fit=crop&w=300&q=60' },
  { label: 'Sanitarios', img: 'https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=300&q=60' },
  { label: 'Azulejos', img: 'https://images.unsplash.com/photo-1576426863848-c21f53c8a09f?auto=format&fit=crop&w=300&q=60' },
  { label: 'Accesorios', img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=300&q=60' },
  { label: 'Cocinas', img: 'https://images.unsplash.com/photo-1556909114-16a5ac26437b?auto=format&fit=crop&w=300&q=60' },
  { label: 'Materiales', img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=300&q=60' },
];

export default function Catalog() {
  return (
    <section className="catalog section">
      <div className="container">
        <h3 className="block-title">Catálogo de Productos</h3>
        <div className="catalog-grid">
          {items.map((it) => (
            <a key={it.label} href="#" className="catalog-tile">
              <div className="tile-media">
                <img src={it.img} alt={it.label} />
              </div>
              <div className="tile-label">{it.label}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

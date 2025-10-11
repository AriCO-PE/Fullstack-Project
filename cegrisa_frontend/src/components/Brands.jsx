import './Brands.css';

const brands = ['Roca', 'Cosmic', 'Agape', 'Onix', 'Mykons', 'Grohe', 'Hansgrohe'];

export default function Brands() {
  return (
    <section className="brands section">
      <div className="container">
        <h3 className="block-title">Nuestras marcas</h3>
        <div className="brands-strip">
          {brands.map((b) => (
            <div key={b} className="brand-pill">{b}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

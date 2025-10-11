import './TopBar.css';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-links">
          <a href="#">Promociones</a>
          <span className="sep">|</span>
          <a href="#">Nuestras tiendas</a>
          <span className="sep">|</span>
          <a href="#">Ayuda</a>
        </div>
        <div className="topbar-info">
          <span>Envíos a todo el país</span>
        </div>
      </div>
    </div>
  );
}

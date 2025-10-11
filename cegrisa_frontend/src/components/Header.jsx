import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const navigation = [
  { name: 'Inicio', to: '/' },
  { name: 'Sobre Nosotros', to: '/about' },
  { name: 'Productos', to: '/products' },
  { name: 'Contacto', to: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Global">
        <div className="brand">
          <Link to="/" className="logo">CEGRISA</Link>
        </div>
        <button className="nav-toggle" aria-label="Abrir menú" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          {navigation.map((item) => (
            <Link key={item.name} to={item.to} className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              {item.name}
            </Link>
          ))}
          <Link to="/contact" className="nav-cta" onClick={() => setMobileMenuOpen(false)}>Contacto →</Link>
        </div>
      </nav>
    </header>
  );
}

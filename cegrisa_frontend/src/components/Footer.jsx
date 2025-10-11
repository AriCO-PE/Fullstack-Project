import { Link } from 'react-router-dom';
import './Footer.css';

const navigation = {
  main: [
    { name: 'Inicio', to: '/' },
    { name: 'Sobre Nosotros', to: '/about' },
    { name: 'Productos', to: '/products' },
    { name: 'Contacto', to: '/contact' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
    },
    {
      name: 'Instagram',
      href: '#',
    },
    {
      name: 'Twitter',
      href: '#',
    },
  ],
};

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <nav className="footer-nav" aria-label="Footer">
          {navigation.main.map((item) => (
            <Link key={item.name} to={item.to} className="footer-link">
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="footer-social">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="social-link" aria-label={item.name}>
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
              </svg>
            </a>
          ))}
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} CEGRISA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

import { useState } from 'react';
import { ArrowUpRight, Github, Menu, X, Mail } from 'lucide-react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { profile } from '../data/content';

const navItems = [
  { text: 'Work', href: '/#experience' },
  { text: 'Projects', href: '/#projects' },
  { text: 'Publication', href: '/#research' },
  { text: 'About', href: '/#about' },
  { text: 'Dashboards', href: '/dashboards' },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return <div className="site-shell">
    <div className="noise-overlay" aria-hidden="true" />
    <header className="site-header">
      <div className="container nav-content">
        <Link className="brand" to="/" onClick={() => setMenuOpen(false)} aria-label="Abrar — home">ABRAR<span className="brand-dot">.</span></Link>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navItems.map(item => item.href.startsWith('/#') ?
            <Link key={item.text} to={item.href} className="nav-link" onClick={() => setMenuOpen(false)}>{item.text}</Link> :
            <NavLink key={item.text} to={item.href} className={({ isActive }) => `nav-link ${isActive ? 'nav-active' : ''}`} onClick={() => setMenuOpen(false)}>{item.text}</NavLink>
          )}
        </nav>
        <a className="nav-contact" href={profile.linkedin} target="_blank" rel="noreferrer">
          Connect on LinkedIn <ArrowUpRight size={15} />
        </a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
    <main key={location.pathname}><Outlet /></main>
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <Link className="brand footer-brand" to="/">ABRAR<span className="brand-dot">.</span></Link>
          <p>Built with curiosity. Designed to stay simple.</p>
        </div>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a>
          {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>}
          {profile.email && <a href={`mailto:${profile.email}`}><Mail size={17} /> Email <ArrowUpRight size={14} /></a>}
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} {profile.name}</span><span>{profile.location}</span></div>
      </div>
    </footer>
  </div>;
}

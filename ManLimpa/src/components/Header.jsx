import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/header.css';

const Header = () => {
  const location = useLocation();
  
  // Verifica se o link corresponde à rota atual
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="logo">
        <img 
          src="/logo.png" 
          alt="Logo do site" 
          className="logo-image"
          onError={(e) => {
            e.target.src = "../../assets/logo.png"; // Caminho alternativo para a imagem
          }} />
        
      </div>
      
      {/* Botão do menu mobile */}
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-button">
        <span></span>
        <span></span>
        <span></span>
      </label>
      
      <nav className="nav-links">
        <Link to="/" className={isActive('/')}>GESTÃO DE RESÍDUOS</Link>
        <Link to="/coleta" className={isActive('/coleta')}>PONTOS DE COLETA</Link>
        <Link to="/educacao" className={isActive('/educacao')}>EDUCAÇÃO</Link>
        <Link to="/denuncia" className={isActive('/denuncia')}>DENÚNCIAS</Link>
      </nav>
    </header>
  );
};

export default Header;
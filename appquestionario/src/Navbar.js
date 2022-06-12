import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className="barraMenu">
        <Link to="/">
          <div className="logo">
            <h2>BRENO CORRÊA</h2>
            <h5>fotografia</h5>
          </div>
        </Link>
        <nav className="menuItens">
          <Link to="/Galeria"> Galeria</Link>
          <Link to="/Sobre"> Sobre</Link>
          <Link to="/Contato"> Contato</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

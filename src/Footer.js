import React from 'react';

function Footer() {
  return (
    <footer className="footer has-background-dark has-text-white">
      <div className="content has-text-centered">
        <p>
          <strong>Mathkids</strong> © {new Date().getFullYear()} - Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

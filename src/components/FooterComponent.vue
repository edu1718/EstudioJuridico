<template>
  <footer class="footer">
    <div class="footer-container">

      <!-- 1. Info del estudio -->
      <div class="footer-column">
        <h3>Estudio Jurídico Penal</h3>
        <p>Defensa penal especializada con atención inmediata.</p>
        <p class="footer-legal">© 2025 Todos los derechos reservados.</p>
      </div>

      <!-- 2. Contacto -->
      <div class="footer-column">
        <h4>Contacto</h4>
        <p>📍 Jr. Justicia 245 – Lima, Perú</p>
        <p>📞 916 650 268</p>
        <p>✉ contacto@estudiopenal.com</p>
        <p>🕒 L-V: 8am – 8pm | Emergencias 24/7</p>
      </div>

      <!-- 3. Enlaces -->
      <div class="footer-column">
        <h4>Enlaces</h4>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Casos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>

      <!-- 4. Redes -->
      <div class="footer-column">
        <h4>Síguenos</h4>
        <div class="social-icons">
          <a href="#">🔵</a>
          <a href="#">🟣</a>
          <a href="#">🟢</a>
        </div>
        <p class="legal-note">
          *La información de esta web es referencial.
          No constituye asesoría legal automática.
        </p>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>
<style>
html, body {
    overflow-x: hidden;
}


/* FOOTER */
.footer {
    background: #F9FAFB;
    color: #1D293D;
    padding: 60px 20px;
}

.footer-container {
    max-width: 1200px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
}

/* Títulos */
.footer h3,
.footer h4 {
    margin-bottom: 15px;
    font-weight: 700;
}

/* Columnas */
.footer-column ul {
    list-style: none;
    padding: 0;
}

.footer-column ul li {
    margin-bottom: 8px;
}

.footer-column a {
    color: #1D293D;
    text-decoration: none;
    transition: 0.3s;
}

.footer-column a:hover {
    color: #1D293D;
}

/* Redes sociales */
.social-icons {
    display: flex;
    gap: 15px;
    margin-bottom: 10px;
}

.social-icons a {
    font-size: 24px;
    color: #1D293D;
    text-decoration: none;
    transition: transform 0.3s;
}

.social-icons a:hover {
    transform: scale(1.2);
}

/* Notas legales */
.legal-note {
    margin-top: 10px;
    font-size: 12px;
    color: #1D293D;
}

.footer-legal {
    margin-top: 20px;
    font-size: 13px;
    opacity: 0.7;
}

/* RESPONSIVE */
@media(max-width: 900px) {
    .footer-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media(max-width: 550px) {
    .footer-container {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .social-icons {
        justify-content: center;
    }
}
</style>

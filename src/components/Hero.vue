<template>
  <section id="inicio" class="hero">
    <div class="hero-content">
      
      <h1 data-aos="fade-up">
        Defendemos tu libertad. Actuamos en minutos
      </h1>

      <p class="subtext" data-aos="fade-up" data-aos-delay="150">
        Atención inmediata
      </p>

      <div class="cta-container" data-aos="zoom-in" data-aos-delay="250">
        <a href="https://wa.me/51916650268" class="cta-principal">
          <svg class="icono-ws" viewBox="0 0 32 32" fill="currentColor">
            <path
              d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.256.59 4.45 1.708 6.38L3.2 28.8l6.592-1.674A12.744 12.744 0 0 0 16 28.8c7.06 0 12.8-5.74 12.8-12.8S23.06 3.2 16.001 3.2Zm0 22.4a9.5 9.5 0 0 1-4.83-1.32l-.345-.204-3.91.993 1.04-3.79-.226-.366a9.49 9.49 0 1 1 8.27 4.687Zm5.27-7.1c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.67.15-.2.29-.77.94-.94 1.13-.17.2-.35.22-.64.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.79.37-.27.29-1.05 1.03-1.05 2.52 0 1.49 1.08 2.93 1.23 3.13.15.2 2.13 3.25 5.16 4.56.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.57-.08 1.71-.7 1.95-1.38.24-.69.24-1.28.17-1.38-.07-.1-.26-.17-.55-.32Z" />
          </svg>
          Consulta Penal Inmediata
        </a>

        <a href="#contacto" class="cta-secundario">
          ⚖️ Evaluar mi caso ahora
        </a>
      </div>

      <div class="sellos">
        <div class="sello" data-aos="fade-right" data-aos-delay="300">⚖️ Atención 24/7</div>
        <div class="sello" data-aos="fade-right" data-aos-delay="450">📁 Más de 500 casos atendidos</div>
        <div class="sello" data-aos="fade-right" data-aos-delay="600">🔒 Confidencialidad absoluta</div>
        <div class="sello" data-aos="fade-right" data-aos-delay="750">🚨 Asistencia en detenciones</div>
      </div>

      <p class="urgencia" data-aos="fade-up" data-aos-delay="850">
        En casos penales, actuar rápido puede cambiar el resultado.
      </p>

    </div>

    <div class="hero-image" data-aos="fade-left" data-aos-delay="200">
      <img :src="heroImg" alt="Abogado en despacho" />
    </div>

  </section>
</template>

<script>
import heroImg from "@/assets/heroAbog.webp";

export default {
  data() {
    return {
      heroImg,
    };
  },
};
</script>


<style scoped>
/* ===== HERO ===== */
.hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 120px;
    padding-bottom: 60px;
    width: 90%;
    margin: auto;
    gap: 40px;
}

.hero-content {
    width: 50%;
}

.hero h1 {
    font-size: 40px;
    margin: 0 0 20px;
    font-family: "Merriweather", serif;
}

.subtext {
    font-size: 18px;
    opacity: 0.8;
}

/* ===== BOTONES DEL HERO ===== */
.cta-container {
    margin-top: 25px;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

/* Botón principal */
.cta-principal {
    background: #25D366;
    padding: 12px 20px;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: 0.2s ease;
    font-size: 16px;
}

.cta-principal:hover {
    background: #1ebe5d;
}

/* Botón secundario */
.cta-secundario {
    background: transparent;
    padding: 12px 20px;
    color: #1D293D;
    border: 1px solid #1D293D;
    text-decoration: none;
    border-radius: 6px;
    transition: 0.2s ease;
    font-size: 16px;
}

.cta-secundario:hover {
    background:#E2E8F0;
}

/* Icono */
.icono-ws {
    width: 20px;
    height: 20px;
}

/* ===== RESPONSIVE ===== */

/* Pantallas menores a 768px (tablets y móviles) */
@media (max-width: 768px) {

    .cta-container {
        flex-direction: column;
        align-items: stretch;
    }

    .cta-principal,
    .cta-secundario {
        justify-content: center;
        font-size: 15px;
        padding: 14px;
    }

    .icono-ws {
        width: 18px;
        height: 18px;
    }
}

/* Móviles pequeños (menos de 480px) */
@media (max-width: 480px) {

    .cta-principal,
    .cta-secundario {
        font-size: 14px;
        padding: 12px;
    }

    .icono-ws {
        width: 16px;
        height: 16px;
    }
}

.sellos {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.sello {
    background: #fff;
    padding: 8px 14px;
    border-radius: 6px;
    font-size: 14px;
    border: 1px solid #1D293D;
}

.urgencia {
    margin-top: 25px;
    font-size: 16px;
    opacity: 0.7;
}

.hero-image {
    width: 50%;
    height: 450px;
    border-radius: 10px;
    overflow: hidden;
}


/* ===== MÓVIL: convertir en CUADRADO perfecto ===== */
@media (max-width: 764px) {
  .hero-image {
    width: 100%;
    aspect-ratio: 1 / 1; /* CUADRO PERFECTO */
  }

  .hero-image img {
    border-radius: 0; /* lo quieres cuadrado */
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

/* ===== RESPONSIVE ===== */
@media(max-width: 1024px) {
    .hero h1 { font-size: 32px; }
    .subtext { font-size: 16px; }
    .hero-image { height: 380px; }
}

@media(max-width: 764px) {
    .hero {
        flex-direction: column;
        text-align: center;
    }

    .hero-content, .hero-image {
        width: 100%;
    }

    .hero h1 { font-size: 28px; }
    .subtext { font-size: 15px; }
    .hero-image { height: 320px; }

    .cta-container { justify-content: center; }
}
</style>

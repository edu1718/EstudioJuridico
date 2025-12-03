<template>
  <section id="servicios" class="servicios-section">
    <div class="servicios-container">

      <h2 class="titulo" data-aos="fade-up">
        Áreas de Especialización en Defensa Penal
      </h2>

      <p class="subtitulo" data-aos="fade-up" data-aos-delay="100">
        Brindamos defensa legal sólida y estratégica en los tipos de casos penales más urgentes y complejos.
      </p>

      <div class="servicios-grid servicios-slider-mobile" ref="sliderServicios">
        <div class="servicio-card" v-for="(servicio, index) in servicios" :key="index" data-aos="fade-up"
          :data-aos-delay="100 + index * 50">
          <span class="icono-serv">{{ servicio.icono }}</span>
          <h3>{{ servicio.titulo }}</h3>
          <p>{{ servicio.descripcion }}</p>

          <a :href="whatsapp" class="serv-btn">
            Consultar este caso
          </a>
        </div>
      </div>

      <!-- Indicadores -->
      <div class="servicios-indicadores" v-if="isMobile">
        <span v-for="(s, index) in servicios" :key="'indicador-serv-' + index" class="indicador-serv"
          :class="{ activo: index === currentSlide }"></span>
      </div>


    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const whatsapp = "https://wa.me/51999999999";

const servicios = [
  {
    icono: "⚖️",
    titulo: "Delitos contra la vida",
    descripcion: "Defensa en casos de homicidio, tentativa, feminicidio y lesiones graves."
  },
  {
    icono: "🛑",
    titulo: "Delitos contra el patrimonio",
    descripcion: "Robos, hurtos, estafas, apropiación ilícita y fraude informático."
  },
  {
    icono: "👊",
    titulo: "Delitos de agresiones",
    descripcion: "Lesiones leves, riñas, daños físicos y acusaciones de violencia."
  },
  {
    icono: "🔒",
    titulo: "Delitos sexuales",
    descripcion: "Defensa en denuncias de tocamientos, violación, actos libidinosos y más."
  },
  {
    icono: "🏠",
    titulo: "Violencia familiar",
    descripcion: "Atención a denuncias, medidas de protección y acusaciones injustas."
  },
  {
    icono: "🚨",
    titulo: "Detenciones y flagrancia",
    descripcion: "Intervención inmediata ante arrestos o situaciones de flagrancia."
  },
  {
    icono: "📑",
    titulo: "Apelaciones y recursos",
    descripcion: "Impugnación de sentencias, revisiones, nulidades y quejas."
  },
  {
    icono: "🗂️",
    titulo: "Antecedentes y expedientes",
    descripcion: "Gestión de certificados, eliminación de antecedentes y trámites penales."
  }
];

const sliderServicios = ref(null);
const currentSlide = ref(0);
const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth <= 700;

  if (isMobile.value) {
    initServicioSlider();
  }
});

function initServicioSlider() {
  const slider = sliderServicios.value;
  if (!slider) return;

  slider.addEventListener("scroll", () => {
    const card = slider.firstElementChild;
    if (!card) return;

    const cardWidth = card.offsetWidth + 25;
    const index = Math.round(slider.scrollLeft / cardWidth);
    currentSlide.value = index;
  });
}
</script>
<style scoped>
/* ===== SERVICIOS ===== */

.servicios-section {
  padding: 90px 0;
  background: #F9FAFB;
  color: #1D293D;
}

.servicios-container {
  width: 85%;
  margin: auto;
  text-align: center;
}

.servicios-section .titulo {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 10px;
}

.servicios-section .subtitulo {
  font-size: 18px;
  opacity: 0.7;
  margin-bottom: 50px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.servicios-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

/* ----- Tarjetas ----- */
.servicio-card {
  background: #fff;
  padding: 26px;
  border-radius: 14px;
  text-align: left;
  position: relative;
  overflow: hidden;
  transition: 0.35s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  /* Sombra inicial */
}

/* ✨ Hover elegante */
.servicio-card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 10px 26px rgba(0, 0, 0, 0.15),
    /* sombra profunda */
    0 0 12px rgba(255, 255, 255, 0.25);
  /* brillo sutil */
  background: #f9fbff;
  /* blanco con un tono premium */
}



/* ⭐ Brillo suave diagonal */
.servicio-card::after {
  content: "";
  position: absolute;
  top: -100%;
  left: -100%;
  width: 80%;
  height: 230%;
  background: linear-gradient(120deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0) 100%);
  transform: rotate(10deg);
  transition: 0.5s ease;
  opacity: 0;
}

/* Cuando pasas el mouse, el brillo cruza la tarjeta */
.servicio-card:hover::after {
  top: -20%;
  left: 120%;
  opacity: 1;
}


.icono-serv {
  font-size: 34px;
  margin-bottom: 14px;
  display: inline-block;
}

.servicio-card h3 {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 600;
}

.servicio-card p {
  font-size: 15px;
  opacity: 0.85;
  margin-bottom: 14px;
  line-height: 1.45;
}

/* ----- Botón ----- */
.serv-btn {
  display: inline-block;
  background: #3B82F6;
  padding: 10px 18px;
  border-radius: 6px;
  font-size: 15px;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  transition: 0.25s;
}

.serv-btn:hover {
  background: #60A5FA;
  transform: translateY(-3px);
}

/* ----- RESPONSIVE ----- */
@media (max-width: 1024px) {
  .servicios-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 700px) {
  .servicios-grid {
    grid-template-columns: 1fr;
  }
}
/* ===== CARRUSEL EN MOVILES (Servicios) ===== */
@media (max-width: 700px) {
  .servicios-slider-mobile {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 20px;
    padding-bottom: 10px;

    -ms-overflow-style: none; 
    scrollbar-width: none;
  }

  .servicios-slider-mobile::-webkit-scrollbar {
    display: none;
  }

  .servicio-card {
    flex: 0 0 85%;
    scroll-snap-align: center;
  }
  .servicios-indicadores{
    display: flex;
  }
}

/* ===== Indicadores ===== */
.servicios-indicadores {
  display: none;
  margin-top: 18px;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.indicador-serv {
  width: 8px;
  height: 8px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  transition: 0.25s;
}

.indicador-serv.activo {
  background: #1D293D;
  transform: scale(1.3);
}

</style>

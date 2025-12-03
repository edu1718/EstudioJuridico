<template>
  <section id="beneficios" class="beneficios-section">
    <div class="beneficios-container">

      <h2 class="titulo" data-aos="fade-up">
        ¿Por qué elegir nuestra defensa penal?
      </h2>

      <p class="subtitulo" data-aos="fade-up" data-aos-delay="100">
        Beneficios reales que marcan la diferencia cuando está en juego tu libertad.
      </p>

      <div class="beneficios-grid beneficios-slider-mobile" ref="slider">
        <div v-for="(beneficio, index) in beneficios" :key="index" class="beneficio-card" data-aos="fade-up"
          :data-aos-delay="100 * (index + 1)">
          <div class="icono">{{ beneficio.icono }}</div>
          <h3>{{ beneficio.titulo }}</h3>
          <p>{{ beneficio.texto }}</p>
        </div>
      </div>

      <!-- Indicadores -->
      <div class="beneficios-indicadores" v-if="isMobile">
        <span v-for="(beneficio, index) in beneficios" :key="'indicador-' + index" class="indicador"
          :class="{ activo: index === currentSlide }"></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BeneficiosSection",

  data() {
    return {
      beneficios: [
        {
          icono: "⚖️",
          titulo: "Estrategias diseñadas para proteger tu libertad",
          texto:
            "Amplia experiencia en delitos graves, procesos complejos y situaciones de alta presión jurídica.",
        },
        {
          icono: "⏱️",
          titulo: "Respondemos en minutos, incluso de madrugada",
          texto:
            "Respuesta inmediata ante detenciones, intervenciones policiales o emergencias legales.",
        },
        {
          icono: "🔒",
          titulo: "Tu caso queda protegido por secreto profesional",
          texto:
            "Toda tu información será tratada con absoluta reserva y protección.",
        },
        {
          icono: "🎯",
          titulo: "Estrategias Personalizadas",
          texto:
            "Cada caso es único. Diseñamos una defensa ajustada a tu situación real.",
        },
        {
          icono: "🤝",
          titulo: "No estarás solo: te guiamos paso a paso",
          texto:
            "Te guiamos en todo el proceso: denuncias, audiencias, medidas y juicio oral.",
        },
        {
          icono: "📁",
          titulo: "Experiencia Comprobada",
          texto:
            "Más de 500 casos atendidos con resultados favorables en procesos penales complejos.",
        },
      ],

      currentSlide: 0,   // slide activo
      isMobile: false,   // detectar modo móvil
    };
  },

  mounted() {
    // Detecta dispositivos móviles
    this.isMobile = window.innerWidth <= 600;

    // Si es móvil, activa el observador del carrusel
    if (this.isMobile) {
      this.initSliderWatcher();
    }
  },

  methods: {
    initSliderWatcher() {
      const slider = this.$refs.slider;

      if (!slider) return;

      slider.addEventListener("scroll", () => {
        const firstCard = slider.firstElementChild;
        if (!firstCard) return;

        // Tamaño de cada tarjeta (ancho + espacio entre tarjetas)
        const cardWidth = firstCard.offsetWidth + 16;

        // Calcula el índice según el desplazamiento
        const index = Math.round(slider.scrollLeft / cardWidth);

        this.currentSlide = index;
      });
    },
  },
};
</script>


<style scoped>
/* ===== BENEFICIOS SECTION ===== */

.beneficios-section {
  padding: 80px 0;
  background: #45556C;
  color: #fff;
}

.beneficios-container {
  width: 85%;
  margin: auto;
  text-align: center;
}
/* ===== Indicadores del carrusel ===== */
.beneficios-indicadores {
  display: none;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.indicador {
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  transition: 0.3s;
}

.indicador.activo {
  background: #fff;
  transform: scale(1.3);
}
.beneficios-section .titulo {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 10px;
}

.beneficios-section .subtitulo {
  font-size: 18px;
  opacity: 0.7;
  margin-bottom: 50px;
}

/* GRID */
.beneficios-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

/* CARD */
.beneficio-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 25px;
  border-radius: 14px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: 0.25s;
}

.beneficio-card:hover {
  transform: translateY(-6px);
  background: rgba(255, 255, 255, 0.10);
  border-color: rgba(255, 255, 255, 0.2);
}

.icono {
  font-size: 40px;
  margin-bottom: 10px;
}

.beneficio-card h3 {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 600;
}

.beneficio-card p {
  font-size: 15px;
  opacity: 0.85;
  line-height: 1.5;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .beneficios-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .beneficios-grid {
    grid-template-columns: 1fr;
  }

  .beneficio-card {
    padding: 20px;
  }
}

/* ===== CARRUSEL EN MÓVILES ===== */
@media (max-width: 600px) {
  .beneficios-indicadores{
    display: flex;
  }
  .beneficios-slider-mobile {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 16px;
    padding-bottom: 10px;

    /* Oculta scroll feo en móviles */
    -ms-overflow-style: none;
    /* IE/Edge */
    scrollbar-width: none;
    /* Firefox */
  }

  .beneficios-slider-mobile::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari */
  }

  .beneficio-card {
    width: 100%;
    box-sizing: border-box;
    flex: 0 0 auto;
    scroll-snap-align: center;
  }
}
</style>

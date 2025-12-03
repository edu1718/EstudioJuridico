<template>
  <section class="confianza">
    <div class="confianza-container">

      <!-- Frase poderosa -->
      <h2 class="confianza-title" data-aos="fade-up">
        Cada caso es único. Nuestra misión es proteger tu libertad con estrategia y experiencia.
      </h2>

      <!-- Abogado principal -->
      <div class="abogado" data-aos="fade-up" data-aos-delay="150">
        <img :src="abogadoImg" alt="Abogado Principal" class="abogado-img" />

        <div class="abogado-info">
          <h3>Dr. Juan Pérez — Abogado Penalista Certificado</h3>

          <p>
            Con más de <strong>12 años de experiencia real</strong> en litigación penal,
            he defendido a personas en situaciones críticas: detenciones, flagrancia,
            acusaciones graves y procesos que requieren intervención inmediata.
            Mi compromiso es brindarte una defensa técnica, estratégica y
            totalmente confidencial.
          </p>

          <p class="badge-cert">
            ⚖️ Especialista en derecho penal | Registro verificado
          </p>
        </div>
      </div>

      <!-- MÉTRICAS -->
      <div class="metricas">
        <div class="card-metrica" data-aos="zoom-in" data-aos-delay="100">
          <h4 class="count" data-target="600" data-suffix="+">0+</h4>
          <p>Casos atendidos</p>
        </div>

        <div class="card-metrica" data-aos="zoom-in" data-aos-delay="200">
          <h4 class="count" data-target="12" data-suffix="+">0+</h4>
          <p>Años de experiencia</p>
        </div>

        <div class="card-metrica" data-aos="zoom-in" data-aos-delay="300">
          <h4 class="count" data-target="95" data-suffix="%">0%</h4>
          <p>Clientes satisfechos</p>
        </div>

        <div class="card-metrica" data-aos="zoom-in" data-aos-delay="400">
          <h4 class="count" data-target="24" data-suffix="/7">0/7</h4>
          <p>Atención urgente</p>
        </div>
      </div>

      <!-- Opiniones -->
      <div class="opiniones">
        <div class="opinion-card" data-aos="fade-right" data-aos-delay="100">
          <p class="stars">★★★★★</p>
          <p>
            "Gracias a su intervención salí en libertad el mismo día.
            Claro, directo y totalmente comprometido."
          </p>
          <span>- Carlos R.</span>
        </div>

        <div class="opinion-card" data-aos="fade-up" data-aos-delay="250">
          <p class="stars">★★★★★</p>
          <p>
            "Lo contacté a las 2 AM por una detención. Respondió en minutos
            y evitó que el caso pase a mayores. Excelente profesional."
          </p>
          <span>- Andrea P.</span>
        </div>

        <div class="opinion-card" data-aos="fade-left" data-aos-delay="350">
          <p class="stars">★★★★★</p>
          <p>
            "Me defendió frente a una acusación injusta y evitó que tenga 
            antecedentes. Trabajo excepcional."
          </p>
          <span>- Luis M.</span>
        </div>
      </div>

      <!-- Logos -->
      <div class="logos" data-aos="fade-up" data-aos-delay="200">
        <div class="logo-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Poder_Judicial_del_Peru.png" alt="Poder Judicial" />
          <small>Poder Judicial del Perú</small>
        </div>

        <div class="logo-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RZxwricx_uJARTvSyICEx7dz7ACOMZeePQ&s" alt="MP" />
          <small>Ministerio Público</small>
        </div>

        <div class="logo-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnC66Afh5-qw-aj8R89VBJyswsZOshOK6p5g&s" alt="IC" />
          <small>Colegio de Abogados</small>
        </div>
      </div>

    </div>
  </section>
</template>


<script>
import abogadoImg from '@/assets/avatar.jpg'  // ← IMPORTACIÓN CORRECTA

export default {
  name: "ConfianzaSection",

  data() {
    return {
      abogadoImg, // ← SE USA EN EL <img>
      animado: false,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.animarNumeros);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.animarNumeros);
  },

  methods: {
    animarNumeros() {
      if (this.animado) return;

      const section = this.$el.querySelector(".metricas");
      const posicion = section.getBoundingClientRect().top;

      if (posicion < window.innerHeight - 100) {
        this.animado = true;

        this.$el.querySelectorAll(".count").forEach((num) => {
          let target = parseInt(num.dataset.target);
          let suffix = num.dataset.suffix || "";
          let count = 0;
          let speed = target / 80;

          let interval = setInterval(() => {
            count += speed;
            if (count >= target) {
              count = target;
              clearInterval(interval);
            }
            num.innerText = Math.floor(count) + suffix;
          }, 20);
        });
      }
    },
  },
};
</script>

<style>
.confianza {
    background: #45556C;
    padding: 80px 20px;
    color: #fff;
}

.confianza-container {
    max-width: 1100px;
    margin: auto;
    text-align: center;
}

/* Frase principal */
.confianza-title {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 40px;
    color: #e8e8e8;
}

/* Abogado info */
.abogado {
    display: flex;
    align-items: center;
    gap: 30px;
    background: rgba(255, 255, 255, 0.05);
    padding: 25px;
    border-radius: 12px;
    margin-bottom: 50px;
}

.abogado-img {
    width: 150px;
    height: 150px;
    border-radius: 100%;
    object-fit: cover;
}

.abogado-info h3 {
    font-size: 22px;
    margin-bottom: 10px;
}

/* Métricas */
.metricas {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 25px;
    margin-bottom: 60px;
}

.card-metrica {
    background: rgba(255, 255, 255, 0.08);
    padding: 30px 20px;
    border-radius: 12px;
    transition: 0.3s;
}

.card-metrica:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.12);
}

.card-metrica h4 {
    font-size: 32px;
    margin-bottom: 8px;
    color: #ffd34e;
}

/* Opiniones */
.opiniones {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin-bottom: 50px;
}

.opinion-card {
    background: rgba(255, 255, 255, 0.08);
    padding: 25px 20px;
    border-radius: 12px;
    text-align: left;
    position: relative;
}

.opinion-card .stars {
    color: #ffd34e;
    font-size: 20px;
    margin-bottom: 10px;
}

.opinion-card span {
    font-size: 14px;
    opacity: 0.7;
    margin-top: 10px;
    display: block;
}

/* Logos */
.logos {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 20px; /* Espacio entre los ítems */  
    gap: 40px;
    margin-top: 40px;
    opacity: 0.8;
}

.logos img {
    width: 120px;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: 0.3s;
}

.logos img:hover {
    filter: grayscale(0%);
    opacity: 1;
}

/* Responsive */
@media (max-width: 768px) {
    .abogado {
        flex-direction: column;
        text-align: center;
    }
}

.badge-cert {
  margin-top: 10px;
  padding: 6px 14px;
  display: inline-block;
  background: rgba(255, 211, 78, 0.15);
  color: #ffd34e;
  border-radius: 8px;
  font-size: 14px;
}

.logo-item {
  text-align: center;
}

.logo-item small {
  display: block;
  margin-top: 5px;
  opacity: 0.6;
  font-size: 13px;
}

</style>
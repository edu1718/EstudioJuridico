<template>
  <section class="defensa" id="defensa-inmediata">
    <div class="defensa-container">

      <h2 class="defensa-title" data-aos="fade-up">
        Actuar rápido puede ser la diferencia entre ser libre o investigado
      </h2>

      <p class="defensa-sub" data-aos="fade-up" data-aos-delay="150">
        En derecho penal cada minuto cuenta. No se trata solo de responder: 
        se trata de evitar errores que pueden arruinar todo tu proceso. 
        Con una defensa inmediata, protegemos tus derechos desde el primer contacto.
      </p>

      <div class="defensa-cards">

        <!-- CARD 1 -->
        <div class="defensa-card" data-aos="fade-right">
          <div class="icon-box">
            <i class="bi bi-stopwatch-fill"></i>
          </div>
          <h3>El tiempo es decisivo</h3>
          <p>
            Las primeras horas marcan el rumbo del caso. Una intervención inmediata 
            puede evitar detenciones prolongadas o medidas innecesarias.
          </p>
        </div>

        <!-- CARD 2 -->
        <div class="defensa-card" data-aos="fade-right" data-aos-delay="150">
          <div class="icon-box">
            <i class="bi bi-exclamation-triangle-fill"></i>
          </div>
          <h3>Evita errores irreversibles</h3>
          <p>
            Una declaración mal asesorada puede usarse en tu contra. 
            Te guiamos desde el primer minuto para no cometer errores procesales.
          </p>
        </div>

        <!-- CARD 3 -->
        <div class="defensa-card" data-aos="fade-right" data-aos-delay="300">
          <div class="icon-box">
            <i class="bi bi-telephone-fill"></i>
          </div>
          <h3>Asistencia inmediata 24/7</h3>
          <p>
            Atendemos tu caso al instante. No enfrentes a Policía o Fiscalía sin 
            respaldo legal especializado.
          </p>
        </div>

        <!-- CARD 4 -->
        <div class="defensa-card" data-aos="fade-right" data-aos-delay="450">
          <div class="icon-box">
            <i class="bi bi-shield-lock-fill"></i>
          </div>
          <h3>Protegemos tus derechos</h3>
          <p>
            Cada paso cuenta. Nuestra prioridad es evitar que tomes decisiones 
            que después no puedan ser corregidas.
          </p>
        </div>
      </div>

      <!-- CTA -->
      <div class="defensa-cta" data-aos="fade-up" data-aos-delay="600">
        <a 
          href="https://wa.me/51916650268?text=Hola,%20necesito%20defensa%20penal%20urgente." 
          class="btn-defensa"
        >
          Solicitar Defensa Inmediata
        </a>
        <p class="microcopy">Atención inmediata · Total confidencialidad</p>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "DefensaInmediata",
};
</script>
<style>
.defensa {
  background: #F9FAFB;
  color: #1D293D;
  padding: 90px 20px;
}

.defensa-container {
  max-width: 1100px;
  margin: auto;
  text-align: center;
}

.defensa-title {
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #1D293D;
}

.defensa-sub {
  font-size: 1.2rem;
  max-width: 820px;
  margin: auto;
  opacity: 0.9;
  line-height: 1.6;
}

.defensa-cards {
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.defensa-card {
  background: #F9FAFB;
  padding: 30px;
  border-radius: 12px;

  /* Rojo suave y elegante */
  border-top: 4px solid #3B82F6;

  /* Sombra inicial suave */
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.10);

  transition: 
    transform .3s ease,
    border-color .3s ease,
    background .3s ease,
    box-shadow .3s ease;
}

/* ✨ Hover elegante coherente con la sombra */
.defensa-card:hover {
  transform: translateY(-6px);
  /* efecto sutil de limpieza */
  background: #FFFFFF;
  /* sombra un poco más amplia, no agresiva */
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.15);
}


.icon-box {
  margin-bottom: 15px;
}

.icon-box i {
  font-size: 2.3rem;
  color: #ff4444;
}

.defensa-card h3 {
  font-size: 1.25rem;
  margin-bottom: 12px;
  color: #1D293D;
}

.defensa-card p {
  opacity: 0.85;
  line-height: 1.5;
}

.defensa-cta {
  margin-top: 70px;
}

.btn-defensa {
  display: inline-block;
  background: #3B82F6;
  text-decoration: none;
  padding: 16px 35px;
  color: #fff;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.15rem;
  transition: background 0.3s ease;
}

.btn-defensa:hover {
  background: #60A5FA;
}

.microcopy {
  margin-top: 10px;
  font-size: 0.9rem;
  opacity: 0.7;
}


</style>
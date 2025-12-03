<template>
  <section class="planes" id="planes">
    <h2 data-aos="fade-up">Planes y Servicios</h2>

    <p class="planes-sub" data-aos="fade-up" data-aos-delay="100">
      Soluciones legales claras, directas y adaptadas a la urgencia de tu caso.
    </p>

    <div class="planes-container">

      <!-- PLAN 1 -->
      <div class="plan-card" data-aos="fade-up" data-aos-delay="0">
        <div class="icon-box">
          <i class="bi bi-chat-dots-fill"></i>
        </div>
        <h3>Consulta Inicial Penal</h3>
        <p>
          Revisamos tu caso, analizamos documentos y te explicamos la mejor estrategia legal.
        </p>
        <ul>
          <li><i class="bi bi-check-lg"></i> Análisis de situación</li>
          <li><i class="bi bi-check-lg"></i> Evaluación de riesgos</li>
          <li><i class="bi bi-check-lg"></i> Recomendación inmediata</li>
        </ul>
        <a
          href="https://wa.me/51916650268?text=Hola,%20deseo%20una%20*Consulta%20Inicial%20Penal*.%20Necesito%20evaluar%20mi%20caso."
          class="btn-plan"
        >
          Solicitar Consulta
        </a>
      </div>

      <!-- PLAN 2 -->
      <div class="plan-card" data-aos="fade-up" data-aos-delay="150">
        <div class="icon-box">
          <i class="bi bi-shield-check"></i>
        </div>
        <h3>Defensa Penal Completa</h3>
        <p>
          Acompañamiento integral en toda etapa del proceso penal, desde denuncias hasta juicios.
        </p>
        <ul>
          <li><i class="bi bi-check-lg"></i> Defensa estratégica</li>
          <li><i class="bi bi-check-lg"></i> Presencia en audiencias</li>
          <li><i class="bi bi-check-lg"></i> Gestión legal completa</li>
        </ul>
        <a
          href="https://wa.me/51916650268?text=Hola,%20necesito%20*Defensa%20Penal%20Completa*.%20Mi%20caso%20requiere%20acompañamiento%20total."
          class="btn-plan"
        >
          Solicitar Defensa
        </a>
      </div>

      <!-- PLAN DESTACADO / URGENTE -->
      <div class="plan-card featured" data-aos="fade-up" data-aos-delay="300">
        <div class="tag-urgente">⚠ Atención Inmediata</div>

        <div class="icon-box">
          <i class="bi bi-lightning-fill"></i>
        </div>

        <h3>Atención Penal Urgente 24/7</h3>
        <p>
          Respuesta inmediata ante detenciones, flagrancia, intervención policial o urgencias reales.
        </p>

        <ul>
          <li><i class="bi bi-check-lg"></i> Respuesta en minutos</li>
          <li><i class="bi bi-check-lg"></i> Guía ante la policía</li>
          <li><i class="bi bi-check-lg"></i> Defensa express</li>
        </ul>

        <a
          href="https://wa.me/51916650268?text=%C2%A1Urgente!%20Necesito%20*Atenci%C3%B3n%20Penal%2024/7*.%20Hay%20una%20intervenci%C3%B3n%20o%20detenci%C3%B3n."
          class="btn-plan urgente"
        >
          Solicitar Ayuda Ahora
        </a>
      </div>

      <!-- PLAN 4 -->
      <div class="plan-card" data-aos="fade-up" data-aos-delay="450">
        <div class="icon-box">
          <i class="bi bi-eye-fill"></i>
        </div>
        <h3>Asesoría Preventiva</h3>
        <p>
          Te ayudamos a evitar denuncias y riesgos legales con orientación profesional anticipada.
        </p>
        <ul>
          <li><i class="bi bi-check-lg"></i> Detección de riesgos</li>
          <li><i class="bi bi-check-lg"></i> Medidas preventivas</li>
          <li><i class="bi bi-check-lg"></i> Criterio jurídico</li>
        </ul>
        <a
          href="https://wa.me/51916650268?text=Hola,%20deseo%20una%20*Asesor%C3%ADa%20Preventiva*.%20Quiero%20evitar%20problemas%20legales."
          class="btn-plan"
        >
          Solicitar Asesoría
        </a>
      </div>

    </div>
  </section>
</template>


<script>
export default {
  name: "Planes",
};
</script>
<style>
.planes {
  padding: 90px 20px;
  background: #45556C;
  color: #fff;
  text-align: center;
}

.planes h2 {
  font-size: 2.4rem;
  margin-bottom: 10px;
  color: #fff;
}

.planes-sub {
  font-size: 1.1rem;
  opacity: 0.85;
  margin-bottom: 50px;
}

.planes-container {
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 30px;
}

.plan-card { 
  background: #2A3748; /* color que combina con #45556C */
  padding: 28px;
  border-radius: 14px;
  transition: .3s ease;
  text-align: left;

  /* sombra suave profesional */
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
}

.plan-card:hover {
  transform: translateY(-6px);
  background: #324158;   /* un tono más claro del principal para el hover */
}


.featured {
  border: 1px solid #3B82F6 !important;
  background: #101B2C;
  position: relative;
}
.featured:hover {
  transform: translateY(-6px);
  border-color: #60A5FA; /* azul más luminoso */
  background: #0D1624; /* un toque más oscuro y suave */
}

.tag-urgente {
  position: absolute;
  top: -12px;
  left: 15px;
  background: #3B82F6; /* azul del esquema */
  color: #fff;
  padding: 4px 12px;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: .5px;
  box-shadow: 0 2px 6px rgba(59, 130, 246, 0.4); /* glow suave */
}


.plan-card h3 {
  font-size: 1.3rem;
  margin: 15px 0;
  color: #fff;
}

.plan-card p {
  font-size: 0.95rem;
  opacity: .85;
  margin-bottom: 15px;
  line-height: 1.5;
}

.icon-box i {
  font-size: 2.3rem;
  color: #fff; /* verde */
  transition: .3s ease;
}

.featured .icon-box i {
  color: #3B82F6;
}

.plan-card ul {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.plan-card ul li {
  margin-bottom: 8px;
  font-size: 0.95rem;
  opacity: .9;
}

.plan-card ul li i {
  color: #fff;
  margin-right: 6px;
}

.btn-plan {
  display: inline-block;
  width: 90%;
  text-align: center;
  background: #25d366;
  color: #000;
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  transition: .3s;
  font-size: 1rem;
}

.btn-plan:hover {
  background: #1ebe5a;
}

.btn-plan.urgente {
  background: #3B82F6;
  color: #fff;
  border: none;
}

.btn-plan.urgente:hover {
  background: #60A5FA;
}
</style>
<template>
  <section class="cta-final">
    <div class="cta-final-container">

      <h2 data-aos="fade-up">
        No esperes a que el caso avance. Contacta ahora y recibe defensa penal experta.
      </h2>

      <div class="cta-final-botones" data-aos="zoom-in" data-aos-delay="150">
        <a
          href="https://wa.me/51916650268?text=Hola,%20necesito%20defensa%20penal%20inmediata."
          class="cta-ws"
        >
          <i class="bi bi-whatsapp"></i>
          WhatsApp
        </a>

        <a href="#contacto" class="cta-form">
          <i class="bi bi-send"></i>
          Formulario
        </a>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "CTAFinal",
};
</script>
<style>
.cta-final {
  padding: 80px 0;
  background: #1D293D;
  color: #fff;
  text-align: center;
}

.cta-final-container h2 {
  width: 90%;
  max-width: 800px;
  margin: auto;
  margin-bottom: 30px;
  font-size: 30px;
  line-height: 1.3;
}

.cta-final-botones {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.cta-ws, .cta-form {
  padding: 14px 25px;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  font-size: 16px;
  transition: 0.3s;
}

.cta-ws {
  background: #25d366;
  color: #fff;
}
.cta-form {
  background: #007bff;
  color: #fff;
}

.cta-ws:hover, .cta-form:hover {
  opacity: 0.9;
}
</style>

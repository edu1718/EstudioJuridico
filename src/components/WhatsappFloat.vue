<template>
  <a
    :href="whatsappLink"
    target="_blank"
    class="whatsapp-float"
    aria-label="Contactar por WhatsApp"
  >
    <i class="bi bi-whatsapp"></i>
  </a>
</template>

<script>
export default {
  name: "WhatsappFloat",

  props: {
    telefono: {
      type: String,
      required: true
    },
    mensaje: {
      type: String,
      default: "Hola, necesito asesoría legal urgente."
    }
  },

  computed: {
    whatsappLink() {
      const texto = encodeURIComponent(this.mensaje);
      return `https://wa.me/${this.telefono}?text=${texto}`;
    }
  }
};
</script>

<style scoped>
.whatsapp-float {
  position: fixed;
  bottom: 22px;
  right: 22px;
  width: 64px;
  height: 64px;
  background-color: #25d366;
  color: white;
  font-size: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);

  z-index: 9999;
  transition: transform 0.25s ease, box-shadow 0.25s;
  cursor: pointer;

  /* Efecto de pulso */
  animation: pulso 2s infinite ease-in-out;
}

.whatsapp-float:hover {
  transform: scale(1.12);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
}

@keyframes pulso {
  0% {
    transform: scale(1);
  }
  70% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
}

/* Ajuste para pantallas pequeñas */
@media (max-width: 600px) {
  .whatsapp-float {
    width: 56px;
    height: 56px;
    font-size: 28px;
    bottom: 18px;
    right: 18px;
  }
}
</style>

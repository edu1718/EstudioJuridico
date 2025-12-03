<template>
  <Navbar />
  <Hero />
  <Beneficios />
  <Servicios/>
  <Confianza/>
  <DefensaInmediata/>
  <Planes/>
  <Contacto/>
  <CTAFinal/>
  <FooterComponent/>
  <WhatsappFloat telefono="51916650268" mensaje="Hola, necesito asesoría penal." />
  <!-- el resto de secciones -->
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Beneficios from "./components/Beneficios.vue";
import Servicios from "./components/Servicios.vue";
import Confianza from "./components/Confianza.vue";
import DefensaInmediata from "./components/DefensaInmediata.vue";
import Planes from "./components/Planes.vue";
import Contacto from "./components/Contacto.vue";
import CTAFinal from "./components/CTAFinal.vue";
import FooterComponent from "./components/FooterComponent.vue";
import WhatsappFloat from "./components/WhatsappFloat.vue";
export default {
  components: {
    Navbar,
    Hero,
    Beneficios,
    Servicios,
    Confianza,
    DefensaInmediata,
    Planes,
    Contacto,
    CTAFinal,
    FooterComponent,
    WhatsappFloat
  },
};
</script>
<style>
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #F9FAFB;
    color: #1D293D;
}
</style>
<template>
  <section id="contacto" class="contacto">
    <div class="contacto-container">

      <h2 data-aos="fade-up">Solicita Atención Penal Inmediata</h2>
      <p class="contacto-sub" data-aos="fade-up" data-aos-delay="150">
        Respuesta en minutos. Atención 24/7.
      </p>

      <form class="formulario" ref="formRef" action="https://formsubmit.co/moisesedwarsantonomunoz@gmail.com"
        method="POST" target="hiddenIframe" data-aos="fade-up" data-aos-delay="300">

        <!-- Hidden config -->
        <input type="hidden" name="_subject" value="Nuevo caso penal desde tu página web">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_iframe" value="1">
        <input type="hidden" name="_mode" value="no-cors">
        <!-- NOMBRE -->
        <div class="input-group">
          <label><i class="bi bi-person-fill"></i> Nombre completo</label>
          <input v-model="nombre" @blur="validarNombre" @focus="tocoNombre = true" type="text"
            placeholder="Ej: Juan Pérez" name="Nombre" :class="{ 'input-error': errorNombre }" />
          <p v-if="errorNombre" class="error-msg">{{ errorNombre }}</p>
        </div>

        <!-- WHATSAPP -->
        <div class="input-group">
          <label><i class="bi bi-telephone-fill"></i> Número de WhatsApp</label>
          <input v-model="whatsapp" @blur="validarWhatsapp" @focus="tocoWhatsapp = true" type="tel"
            placeholder="9XXXXXXXX" name="Whatsapp" :class="{ 'input-error': errorWhatsapp }" />
          <p v-if="errorWhatsapp" class="error-msg">{{ errorWhatsapp }}</p>
        </div>

        <!-- TIPO DE CASO -->
        <div class="input-group">
          <label><i class="bi bi-folder-fill"></i> Tipo de caso</label>
          <select v-model="tipoCaso" @blur="validarCaso" @focus="tocoCaso = true" name="Tipo de caso"
            :class="{ 'input-error': errorCaso }">
            <option value="">Selecciona una opción</option>
            <option>Detención / Flagrancia</option>
            <option>Violencia familiar</option>
            <option>Robo / Hurto / Estafa</option>
            <option>Delitos sexuales</option>
            <option>Agresiones</option>
            <option>Investigación preliminar</option>
            <option>Asesoría preventiva</option>
          </select>
          <p v-if="errorCaso" class="error-msg">{{ errorCaso }}</p>
        </div>

        <!-- MENSAJE -->
        <div class="input-group">
          <label><i class="bi bi-chat-left-text-fill"></i> Describe tu situación</label>
          <textarea v-model="mensaje" @blur="validarMensaje" @focus="tocoMensaje = true" name="Mensaje"
            placeholder="Cuéntanos brevemente lo sucedido..." :class="{ 'input-error': errorMensaje }"></textarea>
          <p v-if="errorMensaje" class="error-msg">{{ errorMensaje }}</p>
        </div>
        <button type="button" class="btn-form" ref="btnRef" @click="enviarFormulario" :disabled="!formularioValido">
          <i class="bi bi-send-fill"></i>
          <span>Enviar mi caso</span>
        </button>

        <p class="confidencial">
          <i class="bi bi-shield-lock-fill"></i>
          Tu información es confidencial.
        </p>
      </form>

      <iframe name="hiddenIframe" style="display:none"></iframe>

      <p class="o-tambien">— o también —</p>

      <a :href="waLink" class="btn-ws">
        <i class="bi bi-whatsapp"></i> Atención Urgente por WhatsApp
      </a>

    </div>
  </section>
</template>

<script setup>
import Swal from "sweetalert2";
import { ref, computed } from "vue";

const formularioValido = computed(() => {
  return (
    nombre.value.trim().length >= 3 &&
    /^\d{9}$/.test(whatsapp.value) &&
    tipoCaso.value !== "" &&
    mensaje.value.trim().length >= 10 &&
    !errorNombre.value &&
    !errorWhatsapp.value &&
    !errorCaso.value &&
    !errorMensaje.value
  );
});

/* ===== CAMPOS ===== */
const nombre = ref("");
const whatsapp = ref("");
const tipoCaso = ref("");
const mensaje = ref("");

/* ===== FLAGS DE FOCUS (para mostrar error solo si tocó el input) ===== */
const tocoNombre = ref(false);
const tocoWhatsapp = ref(false);
const tocoCaso = ref(false);
const tocoMensaje = ref(false);

/* ===== ERRORES ===== */
const errorNombre = ref("");
const errorWhatsapp = ref("");
const errorCaso = ref("");
const errorMensaje = ref("");

/* ===== VALIDACIONES ===== */
const validarNombre = () => {
  if (!tocoNombre.value) return;
  if (nombre.value.trim().length < 3)
    errorNombre.value = "Ingresa tu nombre completo.";
  else errorNombre.value = "";
};

const validarWhatsapp = () => {
  if (!tocoWhatsapp.value) return;
  if (!/^\d{9}$/.test(whatsapp.value))
    errorWhatsapp.value = "Debe tener 9 dígitos.";
  else errorWhatsapp.value = "";
};

const validarCaso = () => {
  if (!tocoCaso.value) return;
  if (tipoCaso.value === "")
    errorCaso.value = "Selecciona el tipo de caso.";
  else errorCaso.value = "";
};

const validarMensaje = () => {
  if (!tocoMensaje.value) return;
  if (mensaje.value.trim().length < 10)
    errorMensaje.value = "Describe brevemente lo sucedido.";
  else errorMensaje.value = "";
};

/* ===== REFERENCIAS ===== */
const formRef = ref(null);
const btnRef = ref(null);

/* ===== LINK WHATSAPP ===== */
const waLink =
  "https://wa.me/51916650268?text=Hola,%20necesito%20asesoría%20penal.%20Este%20es%20mi%20caso:";

/* ===== ENVÍO FINAL ===== */
const enviarFormulario = () => {
  validarNombre();
  validarWhatsapp();
  validarCaso();
  validarMensaje();

  if (errorNombre.value || errorWhatsapp.value || errorCaso.value || errorMensaje.value) {
    return; // No envía
  }

  const originalText = btnRef.value.innerHTML;
  btnRef.value.innerHTML = `<span class="loader"></span> Enviando...`;
  btnRef.value.disabled = true;

  formRef.value.submit();

  setTimeout(() => {
    Swal.fire({
      icon: "success",
      title: "¡Caso enviado!",
      text: "Me comunicaré contigo en breve.",
      confirmButtonColor: "#007bff"
    });

    btnRef.value.innerHTML = originalText;
    btnRef.value.disabled = false;
    formRef.value.reset();
  }, 900);
};
</script>

<style>
/* ESTILOS BASE IGUALES A LOS QUE YA TIENES */
.error-msg {
  color: #ff4d4d;
  font-size: 13px;
  margin-top: 4px;
  padding-left: 2px;
  text-align: left;
}
</style>


<style>
.contacto {
  padding: 90px 0;
  background: #F9FAFB;
  text-align: center;
}

.contacto-container {
  width: 90%;
  margin: auto;
  max-width: 650px;
}

.contacto h2 {
  font-size: 34px;
  font-weight: bold;
}

.contacto-sub {
  opacity: .8;
  margin-bottom: 40px;
}

/* FORMULARIO */
.formulario {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: rgba(255, 255, 255, 0.06);
  padding: 35px;
  border-radius: 14px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
}

.input-group {
  display: flex;
  flex-direction: column;
}

.input-group label {
  margin-bottom: 6px;
  font-size: 14px;
  opacity: .85;
  display: flex;
  gap: 6px;
  align-items: center;
}

.input-group input,
.input-group select,
.input-group textarea {
  background: #F9FAFB;
  border: 1px solid #A1A1A1;
  padding: 13px;
  border-radius: 10px;
  color: #555;
  transition: .2s;
}

.input-group input:focus,
.input-group select:focus,
.input-group textarea:focus {
  outline: none;
  border: 1px solid #404040;
}
.input-error {
  border: 2px solid #ff4d4d !important;
}

textarea {
  height: 130px;
  resize: none;
}

/* BOTÓN PRINCIPAL */
.btn-form {
  background: #007bff;
  padding: 15px;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: .3s;
  display: flex;
  justify-content: center;
  gap: 5px;
  font-size: 16px;
}

.btn-form:hover {
  background: #0d6efd;
}

.btn-form:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.loader {
  width: 16px;
  height: 16px;
  border: 3px solid #fff;
  border-radius: 50%;
  border-top-color: transparent;
  display: inline-block;
  animation: girar .7s linear infinite;
  margin-right: 6px;
}

@keyframes girar {
  to {
    transform: rotate(360deg);
  }
}

/* WhatsApp */
.o-tambien {
  margin: 25px 0 15px;
  opacity: .7;
}

.btn-ws {
  background: #25d366;
  padding: 15px;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  display: block;
  text-decoration: none;
  transition: .3s;
}

.btn-ws:hover {
  background: #1ebe5a;
}

.confidencial {
  font-size: 13px;
  opacity: .7;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  gap: 6px;
}
@media (max-width: 480px) {
  .formulario{
    padding: 20px;
  }
}
</style>

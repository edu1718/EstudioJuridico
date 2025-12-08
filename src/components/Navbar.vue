<template>
  <header class="navbar" :class="{ scrolled: isScrolled }" id="navbar">
    <div class="nav-container">
      <div class="logo">
        Sánchez & Asociados<br>
        <span>Defensa Penal</span>
      </div>

      <!-- Botón Hamburguesa -->
      <div class="hamburger" :class="{ open: menuOpen }" @click="toggleMenu" ref="hamburguesaRef">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav class="nav-links" :class="{ open: menuOpen }">
        <a href="#inicio" class="nav-link">Inicio</a>
        <a href="#beneficios" class="nav-link">Beneficios</a>
        <a href="#problemas" class="nav-link">Problemas</a>
        <a href="#servicios" class="nav-link">Servicios</a>
        <a href="#defensa-inmediata" class="nav-link">Defensa Inmediata</a>
        <a href="#planes" class="nav-link">Planes</a>

        <a href="https://wa.me/51916650268" class="whatsapp-btn">
          <i class="bi bi-whatsapp"></i> Consulta Inmediata
        </a>
      </nav>
      <div class="fondoOscuro" :class="{ activo: menuOpen }" @click="menuOpen = false"></div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, watch } from "vue";

export default {
  name: "Navbar",

  setup() {
    const menuOpen = ref(false);
    const isScrolled = ref(false);
    const hamburguesaRef = ref(null); // ← referencia al div

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    // 🔒 Bloquear scroll
    watch(menuOpen, (isOpen) => {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    });

    onMounted(() => {
      window.addEventListener("scroll", () => {
        const scrolled = window.scrollY > 50;
        isScrolled.value = scrolled;

        if (hamburguesaRef.value) {
          if (scrolled) {
            hamburguesaRef.value.classList.add("scrolled-ham");
          } else {
            hamburguesaRef.value.classList.remove("scrolled-ham");
          }
        }
      });
    });

    return {
      menuOpen,
      isScrolled,
      hamburguesaRef,
      toggleMenu
    };
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px 0;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition: background 0.35s ease, backdrop-filter 0.35s ease, border 0.35s ease;
  z-index: 1000;
}

.navbar.navbar.scrolled .hamburger span {
  background: #fff;
}

/* NAVBAR CON EFECTO GLASS AL HACER SCROLL */
.navbar.scrolled {
  background: rgba(0, 0, 0, 0.25);
  /* tono oscuro con transparencia */
  backdrop-filter: blur(12px);
  /* efecto vidrio */
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.navbar.scrolled .nav-link {
  color: #fff;
  font-weight: 600;
}

.navbar.scrolled .logo {
  color: #fff;
}

/* === NAV CONTAINER === */
.nav-container {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* === LOGO === */
.logo {
  font-size: 20px;
  font-weight: bold;
  line-height: 1.2;
  font-family: "Merriweather", serif;
}

.logo span {
  font-size: 14px;
  opacity: 0.7;
}

/* === LINKS DESKTOP === */
.nav-links {
  display: flex;
  gap: 25px;
  align-items: center;
}

/* Efecto moderno */
.nav-link {
  position: relative;
  color: #1D293D;
  text-decoration: none;
  font-size: 15px;
  opacity: .85;
  transition: .3s ease;
}

.nav-link:hover {
  opacity: 1;
  transform: translateY(-2px);
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0%;
  height: 2px;
  background: #3B82F6;
  transition: width .3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Botón WhatsApp */
.whatsapp-btn {
  background: #25d366;
  padding: 10px 16px;
  border-radius: 6px;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  gap: 5px;
  opacity: 1 !important;
  color: #fff;
  transition: .3s;
}

.whatsapp-btn:hover {
  filter: brightness(1.15);
  transform: translateY(-2px);
}

/* HAMBURGER */
.hamburger {
  width: 28px;
  height: 22px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 3001;
  /* MUY POR ENCIMA */
}

.hamburger span {
  width: 100%;
  height: 3px;
  border-radius: 5px;
  transition: .4s ease;
  background: #1D293D;
}

.hamburger.scrolled-ham span {
  background-color: #fff;
}

.hamburger.open span {
  background-color: #fff;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

.fondoOscuro {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(3px);

  display: none;
  opacity: 0;
  transition: opacity .35s ease;

  z-index: 2000;
  /* debajo del menú (3000) pero sobre todo lo demás */
}

.fondoOscuro.activo {
  display: block;
  opacity: 1;
}

/* ====== MENÚ MÓVIL DESDE LA DERECHA ====== */
@media (max-width: 900px) {

  .hamburger {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 270px;
    background: #1D293D;
    backdrop-filter: blur(6px);

    flex-direction: column;
    align-items: flex-start;
    padding: 100px 25px;
    gap: 22px;

    transform: translateX(100%);
    transition: transform .45s ease;
    /* SE IMPONE SOBRE TODO */
    z-index: 3000;
  }

  .nav-links.open .nav-link,
  .nav-links.open .whatsapp-btn {
    color: #fff;
    font-size: 20px;
    /* O el color que desees para el texto del menú móvil */
  }

  .nav-links.open {
    transform: translateX(0);
  }
}
</style>

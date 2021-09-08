<template>
  <b-navbar
    toggleable="md"
    type="dark"
    class="
      navbar navbar-expand-sm
      fixed-top
      navbar-light
      container
      nav-top nav-bg
    "
    :class="{ 'navbar--hidden': !showNavbar }"
  >
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#"
      ><img class="nav-logo-size" src="../assets/logoTM2.png" alt=""
    /></b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <router-link id="nav-home" class="nav-font" to="/">Home</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link id="nav-gallery" class="nav-font" to="/list/all"
            >Gallery</router-link
          >
        </b-nav-item>
        <b-nav-item href="#">
          <router-link id="nav-market" class="nav-font" to="/marketplace"
            >Marketplace</router-link
          ></b-nav-item
        >
        <b-nav-item href="#">
          <router-link id="nav-mymint" class="nav-font" to="/mymint"
            >MyMint</router-link
          >
        </b-nav-item>
        <b-nav-item @click.native="getCurrentUrl"
          ><router-link id="nav-profile" class="nav-font" to="/profile"
            >Profile</router-link
          ></b-nav-item
        >
        <b-nav-form>
          <button
            size="sm"
            class="btn btn-primary my-2 my-sm-0 nav-button"
            type="submit"
          >
            <b>Contract</b>
          </button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    getCurrentUrl() {
      // console.log("window.location.href");
    },
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return;
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
});
</script>
<style >
body {
  background: #eef1f4 !important;
  font-family: "Lato", sans-serif !important;
}

.nav-background {
  background: #353535;
}
.nav-font {
  font-size: 14px !important;
  color: black;
  font-weight: 550;
  padding-right: 10px;
}
.nav-button {
  font-size: 14px !important;
  border-radius: 5px;
  width: 100px;
  padding: 4px !important;
  margin-left: 10px;
  background-color: #8364e2 !important;
  border-radius: 0.4rem !important;
}
.nav-logo-size {
  width: 85px;
  height: 75px;
}
.nav-top {
  margin-top: -5px;
}
@media (max-width: 576px) {
  .nav-bg {
    background-color: rgba(0, 0, 0, 0.2);
    height: 100px;
  }
}
.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
</style>

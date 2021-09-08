<template>
  <div id="app" class="home-background">
    <NavBar />
    <router-view />
    <ScrollTopArrow></ScrollTopArrow>
    <Footer />
  </div>
</template>

<script>
import { NavBar, Footer, ScrollTopArrow } from "./components";

export default {
  name: "app",
  components: {
    NavBar,
    Footer,
    ScrollTopArrow,
  },
  data() {
    return {};
  },
};
</script>

<style>
.app-background {
  background-color: white;
}
@media screen and (min-width: 1400px) {
  .container {
    max-width: 1320px !important;
  }
}
</style>

<template>
  <div class="fluid-container" id="marketplace">
    <div class="row">
      <div class="col-md-12">
        <img src="../assets/market-place.jpg" class="image-background" alt="" />
        <div class="image-centered">Market Place Will be live in</div>
      </div>
    </div>
    <div class="row mt-5 mb-5">
      <div class="col-md-12 mt-5 mb-5">
        <!-- <button class="btn btn-primary button-centered mt-5 mb-5"> -->
        <div class="market-time">
          <strong>This is the contract time interval</strong>
        </div>
        <!-- </button> -->
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  // mounted() {
  //   console.log(window.location.href);
  // },
});
</script>
<style scoped>
#marketplace .image-background {
  width: 100%;
  height: 26vw;
}
@media screen and (max-width: 600px) {
  #marketplace .image-background {
    width: 100%;
    height: 156px;
  }
}
#marketplace .image-centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: 900;
  font-size: 3rem;
}
/* #marketplace .button-centered {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
} */
.market-time {
  background-color: #8d4a4a;
  color: white;
  text-align: center;
  font-size: 30px;
  padding: 10px;
}
</style>
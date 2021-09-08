<template>
  <div class="fluid-container" id="mymint">
    <div class="row">
      <div class="col-md-12">
        <img src="../assets/nft-group.jpg" class="image-background" alt="" />
      </div>
    </div>
    <div class="row mt-5 mb-5">
      <div class="col-md-12">
        <h2 style="text-align: center"><strong>Your Wallet</strong></h2>
        <button class="btn btn-success button-centered mt-3">connect</button>
      </div>
    </div>
    <br /><br /><br />
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
#mymint .image-background {
  width: 100%;
  height: 26vw;
}
#mymint .button-centered {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media screen and (max-width: 600px) {
  #mymint .image-background {
    width: 100%;
    height: 156px;
  }
}
</style>

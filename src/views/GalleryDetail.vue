<template>
  <div class="container pt-5 mb-5" id="gallerydetail">
    <div class="row">
      <div class="col-md-6 text-center tempdetail">
        <img
          src="../assets/tempdetail.jpg"
          class="img-fluid img-rounded mb-sm-30 tempdetailImage mt-5"
          alt=""
        />
      </div>
      <div class="col-md-6 tempdetail">
        <div class="item_info tempdetail mt-5 detail-font-opacity">
          Owner: <strong>Need Connect To Wallet</strong>
          <h2><strong>Human</strong></h2>
          <div class="container info_detail">
            <div class="row row_detail_info">
              <strong class="col-md-5">hair</strong>
              <div class="col-md-3 tempdetail">Bald</div>
            </div>
            <div class="row row_detail_info">
              <strong class="col-md-5">hat</strong>
              <div class="col-md-3 tempdetail">Backwards Cap</div>
              <div class="col-md-3 tempdetail">Backwards Gray</div>
            </div>
            <div class="row row_detail_info">
              <strong class="col-md-5">overshirt</strong>
              <div class="col-md-3 tempdetail">Athletic Jacket</div>
              <div class="col-md-3 tempdetail">Red</div>
            </div>
            <div class="row row_detail_info">
              <strong class="col-md-5">pants</strong>
              <div class="col-md-3 tempdetail">Cargo Pants</div>
              <div class="col-md-3 tempdetail">Camo</div>
            </div>
            <div class="row row_detail_info">
              <strong class="col-md-5">shirt</strong>
              <div class="col-md-3 tempdetail">Skull Tee</div>
            </div>
            <div class="row row_detail_info">
              <strong class="col-md-5">shoes</strong>
              <div class="col-md-3 tempdetail">Workboots</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  //   mounted() {
  //     console.log(window.location.href);
  //   },
  data() {
    return {
      //   detail_info:{
      //       hair: 'Bald',
      //       hat: 'Backwards Cap'
      //   }
    };
  },
});
</script>
<style>
#gallerydetail .tempdetail {
  background-size: cover;
}
#gallerydetail .tempdetailImage {
  height: 75vh;
  border-radius: 4px;
}
#gallerydetail .item_info {
  padding-left: 10px;
}
#gallerydetail .info_detail {
  border: 4px dashed rgb(170, 170, 170);
  border-radius: 5px;
  background-size: cover;
}
#gallerydetail .row_detail_info {
  margin: 5vh auto;
  border-bottom: 1px dashed rgb(204, 204, 204);
  padding-bottom: 10px;
  background-size: cover;
}
.detail-font-opacity {
  opacity: 0.7;
}
</style>

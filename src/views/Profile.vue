<template>
  <div class="fluid-container" id="profile">
    <div class="row">
      <div class="col-md-12">
        <img src="../assets/nft-group.jpg" class="image-background" alt="" />
        <div class="image-centered">Profile</div>
      </div>
    </div>
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-lg-6 offset-lg-1">
          <div class="form-group">
            <label for="wallet"><strong>Your Wallet:</strong></label>
            <input type="text" class="form-control" id="wallet" />
          </div>
          <div class="form-group">
            <label for="balance"><strong>Your Balance:</strong></label>
            <input type="text" class="form-control" id="balance" />
          </div>
          <div class="form-group">
            <label for="mint"><strong>Total Mint:</strong></label>
            <input type="text" class="form-control" id="total_mint" />
          </div>
          <div class="form-group">
            <label for="level"><strong>Your Level:</strong></label>
            <input type="text" class="form-control" id="level" />
          </div>
          <div class="form-group">
            <label for="trxpool"
              ><strong>Balance Total Trx in Pool:</strong></label
            >
            <input type="text" class="form-control" id="trxpool" />
          </div>
          <button class="btn btn-danger mb-2">
            <strong style="color: white">Your Balance is not enough</strong>
          </button>
        </div>
        <div class="col-lg-4 col-sm-6 col-xs-12">
          <div class="nft_item profile-zoom">
            <div
              class="nft_item_wrap"
              style="background-size: cover; height: 374px"
            >
              <img src="../assets/nft1.png" alt="" class="profile-image" />
            </div>
            <div style="background-size: cover; justify-content: center">
              <img src="../assets/7.jpg" alt="" class="profile-image-2" />
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
  // mounted() {
  //   console.log(window.location.href);
  // },
});
</script>
<style scoped>
#profile .image-background {
  width: 100%;
  height: 26vw;
}
#profile .image-centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: 900;
  font-size: 3rem;
}
@media screen and (max-width: 600px) {
  #profile .image-background {
    width: 100%;
    height: 156px;
  }
}
#profile .nft_item {
  position: relative;
  padding: 20px;
  border: solid 1px #ddd;
  border-radius: 15px;
  -moz-border-radius: 15px;
  -webkit-border-radius: 15px;
  margin-bottom: 25px;
  background: #ffffff;
}
#profile .nft_item_wrap {
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
}
.profile-zoom img {
  transition: transform 1s ease;
}
.profile-zoom:hover .profile-image {
  transform: scale(1.1);
}
.profile-image {
  width: 100%;
}
.profile-image-2 {
  width: 100%;
}
</style>

<template>
  <div class="fluid-container" id="gallery">
    <div class="row">
      <div class="col-md-12">
        <img src="../assets/nft-group.jpg" class="image-background" alt="" />
        <div class="image-centered">Gallery</div>
      </div>
    </div>
    <div class="container mt-5 mb-5">
      <div class="row p-0">
        <div class="col-lg-12">
          <div>
            <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
              <b-dropdown-item
                v-for="nft_image in nft_image_list"
                :key="nft_image.index"
                >{{ nft_image.category }}</b-dropdown-item
              >
            </b-dropdown>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(item, index) in nft_filtered_image"
          :key="index"
          class="col-lg-3 col-md-6 col-sm-6 mt-3 col-xs-12"
        >
          <div class="nft_item">
            <div class="nft__item_wrap gallery-zoom" style="height: 264px">
              <router-link :to="'/details/' + index" v-bind:index="index">
                <img
                  :src="getImgUrl(item.src)"
                  height="300px"
                  :alt="item.src"
                />
              </router-link>
            </div>
            <div class="nft__item_info"></div>
          </div>
        </div>
      </div>
      <div class="load_button">
        <button
          @click="loadMore"
          class="btn btn-primary"
          :disabled="currentImage === getTotalNum()"
        >
          Load more
        </button>
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
  methods: {
    getTotalNum() {
      if (this.nft_filtered_image.length % 4 == 0) {
        return Math.floor(this.nft_filtered_image.length / 4);
      } else if (this.nft_filtered_image.length % 4 != 0) {
        return Math.floor(this.nft_filtered_image.length / 4 + 1);
      }
    },
    getImgUrl(src) {
      var images = require.context("../assets/", false, /\.png$/);
      return images("./" + src + ".png");
    },
    loadMore: function () {
      if (
        this.currentImage !== Math.floor(this.nft_filtered_image.length / 4) &&
        this.nft_filtered_image.length % 4 == 0
      ) {
        this.currentImage++;
      } else if (
        this.currentImage !==
          Math.floor(this.nft_filtered_image.length / 4 + 1) &&
        this.nft_filtered_image.length % 4 != 0
      ) {
        this.currentImage++;
      }
    },
  },
  data() {
    return {
      nft_image_list: [
        { category: "All Categories" },
        { category: "Justin Sun" },
        { category: "Elephant" },
        { category: "Human" },
        { category: "Dissected" },
        { category: "Pig" },
        { category: "Robot" },
        { category: "Skeleton" },
        { category: "Visitor" },
      ],
      nft_filtered_image: [
        {
          src: "1",
        },
        {
          src: "2",
        },
        {
          src: "3",
        },
        {
          src: "4",
        },
        {
          src: "5",
        },
        {
          src: "6",
        },
        {
          src: "7",
        },
        {
          src: "8",
        },
        {
          src: "9",
        },
        {
          src: "10",
        },
      ],
      currentImage: 1,
    };
  },
});
</script>
<style>
#gallery .load_button {
  text-align: center;
}
#gallery .image-background {
  width: 100%;
  height: 26vw;
}
@media screen and (max-width: 600px) {
  #gallery .image-background {
    width: 100%;
    height: 156px;
  }
}
#gallery .image-centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: 900;
  font-size: 3rem;
}
#gallery .nft_item {
  position: relative;
  padding: 20px;
  border: solid 1px #ddd;
  border-radius: 15px;
  -moz-border-radius: 15px;
  -webkit-border-radius: 15px;
  margin-bottom: 25px;
  background: #ffffff;
}
#gallery .nft__item_wrap {
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
}
/* [2] Transition property for smooth transformation of images */
.gallery-zoom img {
  transition: transform 1s ease;
}

/* [3] Finally, transforming the image when container gets hovered */
.gallery-zoom:hover img {
  transform: scale(1.1);
}
</style>

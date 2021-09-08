<template>
  <div id="main" class="container home-background">
    <div class="home-background home-top-space"></div>
    <div class="row" style="height: 600px">
      <div class="col-xl-6" id="mainjustifycenter">
        <p class="home-font-m, home-font-weight-l">
          <span class="home-font-color">GET YOUR TRON MEEBITS NOW</span>
        </p>
        <h1 class="home-font-weight-l">First 3-D NFT on Tron Blockchain</h1>
        <p class="home-font-l home-font-opacity">
          20,000 distincitive Three-D Avatar with 8 Attributes
        </p>
        <router-link class="btn btn-primary explore-button" to="/list/all"
          ><b>Explore</b></router-link
        >
      </div>
      <div class="col-xl-6">
        <div id="mainnftpng" class="mt-5 mb-5"></div>
      </div>
    </div>
    <div class="row home-nft-img">
      <div
        v-for="(item, index) in card_items"
        :key="index"
        class="col-lg-4 col-md-6 mb-sm-30 mt-3 card-background"
      >
        <div class="main-card p-3">
          <img src="../assets/logo.png" style="width: 50px; height: 50px" />
          <h5 class="font-weight-l">{{ item.header }}</h5>
          <p class="home-font-opacity home-font-weight-m">
            {{ item.sentence }}
          </p>
          <img src="../assets/card_image2.png" class="home-card-image" />
        </div>
      </div>
    </div>
    <div class="row">
      <div
        v-for="(item, index) in template_items"
        :key="index"
        class="col-lg-6 col-md-6 mb-sm-30 mt-3 card-background"
      >
        <div class="main-card p-3">
          <img src="../assets/logo.png" style="width: 50px; height: 50px" />
          <h5>
            <strong>{{ item.header }}</strong>
          </h5>
          <p class="home-font-opacity home-font-weight-m">
            {{ item.sentence }}
          </p>
          <img src="../assets/card_image2.png" class="home-card-image" />
        </div>
      </div>
    </div>
    <div class="mt-5">
      <h2 class="text-center font-weight-l"><strong>Types of Art</strong></h2>
      <div class="row">
        <div class="col-sm-5"></div>
        <div class="col-sm-2">
          <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4"><p class="home-underline"></p></div>
            <div class="col-sm-4"></div>
          </div>
        </div>
        <div class="col-sm-5"></div>
      </div>

      <carousel :responsive="responsive">
        <div v-for="(item, index) in robot_images" :key="index" class="p-2">
          <div class="card img-hover-zoom">
            <div class="card-body">
              <img :src="getImgUrl(item.src)" :alt="item.src" />
            </div>
            <div class="card-footer">{{ item.src }}</div>
          </div>
        </div>
      </carousel>
    </div>
    <div class="row mt-5 mb-5">
      <div class="col-lg-4 col-md-4 col-sm-4">
        <img src="../assets/1.png" class="gallery-tron-img" />
      </div>
      <div class="col-md-8 col-sm-8 col-lg-8 meebit-explanation">
        <div class="meebit-explanation-content">
          <strong
            ><span class="home-font-opacity">Do you know Tron Meebits?</span
            >😀</strong
          >
        </div>
        <div class="meebit-explanation-content">
          <div class="meebit-explanation-content">
            <strong><span class="home-font-opacity">Strong</span></strong>
          </div>
          <div class="meebit-explanation-content">
            <span class="home-font-opacity"
              >Tron Meebits are 20,000 unique 3D Avatar with 8 different
              attributes, created by a custom generative algorithm and
              registered on the Tron blockchain.</span
            >
            😍
          </div>
          <div class="meebit-explanation-content">
            <strong
              ><span class="home-font-opacity">Tron Blockchain</span></strong
            >
          </div>
          <div class="meebit-explanation-content">
            <span class="home-font-opacity"
              >The NFT contract the governs ownership is a standard TRC-721 that
              works with any compatible service or exchange.</span
            >
          </div>
          <div class="meebit-explanation-content">
            <strong><span class="home-font-opacity">MarketPlace</span></strong>
          </div>
          <div class="meebit-explanation-content">
            <span class="home-font-opacity"
              >Market will be launched once 5000 Tron Meebits minted.</span
            >
          </div>
          <div class="meebit-explanation-content">
            <strong><span class="home-font-opacity">Incentives</span></strong>
          </div>
          <div class="meebit-explanation-content">
            <strong
              >👑
              <span class="home-font-opacity"
                >10% of each Tron Meebits minted are divided in 2 pool 3% and 7%
                and will be shared among the below holders</span
              ></strong
            >
            <div class="meebit-explanation-content">
              <strong
                >💗
                <span class="home-font-opacity"
                  >● Mint 30 Tron Meebits, get 3% share from the 3% pool</span
                ></strong
              >
            </div>
            <div>
              <strong
                >💗
                <span class="home-font-opacity"
                  >● Mint 30 Tron Meebits, get 3% share from the 3% pool</span
                ></strong
              >
            </div>
          </div>
          <div class="meebit-explanation-content">
            <strong
              ><span class="home-font-opacity">Note for Visitors</span></strong
            >
          </div>
          <div>
            🏹
            <span class="home-font-opacity"
              >• Do not miss the chance to own the First 3-D ART on Tron
              Blockchain 20000 Tron Meebits. ( 5 Dissected, 10 JUSTIN SUN, 18
              Visitor, 57 Skeleton ,72 Robot, 256 Elephant, 711 Pigs AND 18871
              Human).</span
            >
          </div>
          <div>
            <span class="home-font-opacity"
              >• Tron Meebits are not associated with Larva Labs. We would like
              to thanks them for our inspiration. • </span
            >🔥<span class="home-font-opacity"
              >We will be listed in external market place</span
            >
          </div>
          <div>
            <strong>
              <span class="home-font-opacity"
                >• 10% of revenue will be shared among the holder as a bonus for
                investor who mint 3% for 30 NFT and 7% for 150 NFT</span
              >
            </strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import carousel from "vue-owl-carousel";

export default defineComponent({
  setup() {},
  components: {
    carousel,
  },
  // mounted() {
  //   console.log(window.location.href);
  // },
  methods: {
    getImgUrl(src) {
      var images = require.context("../assets/", false, /\.png$/);
      return images("./" + src + ".png");
    },
  },
  data() {
    return {
      responsive: { 0: { items: 1, nav: false }, 600: { items: 4, nav: true } },
      card_items: [
        {
          header: "TRC-721",
          sentence:
            "The NFT contract the governs ownership is a standard TRC-721 that works with any compatible service or exchange.",
        },
        {
          header: "Avatar",
          sentence:
            "Tron Meebits are 20,000 unique 3D Avatar with 8 differentattributes, created by a custom generative algorithm and registered on the Tron blockchain.",
        },
        {
          header: "Market Place Launch Soon",
          sentence: "Market Place Launch after 5000 TronMeebits are mints.",
        },
      ],
      template_items: [
        {
          header: "TronMeebits 30 Pool",
          sentence: "Mint 30 Tron Meebits, get 3% share from the 3% pool",
        },
        {
          header: "TronMeebits 150 Pool",
          sentence: "Mint 150 Tron Meebits, get 7% share from the 7% pool",
        },
      ],
      robot_images: [
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
    };
  },
});
</script>

<style>
#mainnftpng {
  background-image: url("../assets/nft.png");
  background-position: center;
  background-size: cover;
  width: 98%;
  height: 100%;

  /* Preserve aspet ratio */
  min-width: 98%;
  min-height: 100%;
}
#mainjustifycenter {
  margin: auto;
  vertical-align: center;
}
@media screen and (max-width: 1200px) {
  #mainnftpng {
    display: none;
  }
}
#main .main-card {
  margin: auto;
  background-color: rgba(187, 182, 220, 0.4);
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  border-radius: 5px;
}
#main .card-background :hover {
  background-color: rgb(5, 37, 97);
  color: white;
  opacity: 0.8;
  transition: background-color 1s ease-in-out;
}
.owl-dots {
  display: none;
}
/* .owl-next {
  float: right;
}
.owl-prev {
  float: left;
} */
.meebit-explanation {
  line-height: 2.5;
  background-color: rgba(238, 238, 238, 0.07);
  padding: 19px 37px;
  border-radius: 15px;
  box-shadow: rgb(136, 136, 136) 0px 0px 57px;
  background-size: cover;
}
.meebit-explanation-content {
  background-size: cover;
}
.explore-button {
  background-color: #8364e2 !important;
  width: 130px;
  font-size: 14px;
  border-radius: 0.4rem;
}
.home-font-m {
  font-size: 14px;
}
.home-font-l {
  font-size: 18px;
  line-height: 2em;
  font-weight: 700;
}
.home-font-opacity {
  opacity: 0.7;
}
.home-font-color {
  color: #8364e2;
}
.home-font-weight-l {
  font-weight: 700;
}
.home-font-weight-m {
  font-weight: 540;
}
.home-background {
  background-color: white;
}
.home-top-space {
  height: 150px;
}
.home-card-image {
  transition: transform 3s ease;
  position: absolute;
  right: 20px;
  bottom: 20px;
  opacity: 0.2;
  width: 200px !important;
  height: 200px !important;
}
/* .card-background img:hover {
  transform: rotate(-30deg);
} */

/* [2] Transition property for smooth transformation of images */
.img-hover-zoom img {
  transition: transform 1s ease;
}

/* [3] Finally, transforming the image when container gets hovered */
.img-hover-zoom:hover img {
  transform: scale(1.1);
}
.home-underline {
  width: 100%;
  margin: 20px 0px;
  border-top: 2px solid #8364e2;
}
.home-nft-img {
  margin-top: 170px;
}
.gallery-tron-img {
  width: 100%;
  height: 540px;
}
</style>
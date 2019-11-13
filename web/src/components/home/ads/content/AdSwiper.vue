<template>
  <div class="ad-swiper-container px-8">
    <!-- swiper 外圍容器 -->
    <swiper class="ad-swiper-content" :options="swiperOption">
      <!-- swiper slide 容器 -->
      <swiper-slide
        class="ad-swiper-item d-flex mx-2 py-8"
        v-for="(item, index) in adSwiper"
        :key="index"
      >
        <!-- ad img -->
        <home-ad-img :imgContent="item"></home-ad-img>
        <!-- ad intro -->
        <home-ad-intro :introContent="item"></home-ad-intro>
      </swiper-slide>
      <!-- 底部三個按鈕 -->
      <div class="swiper-pagination pagination-ad" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// components
import homeAdImg from "./content/AdImg";
import homeAdIntro from "./content/AdIntro";

export default {
  props: ["adSwiper"],
  data() {
    return {
      swiperOption: {
        spaceBetween: 0,
        pagination: {
          el: ".pagination-ad",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  components: {
    "home-ad-img": homeAdImg,
    "home-ad-intro": homeAdIntro
  }
};
</script>

<style lang="scss">
@import "../../../../assets//scss/_variable";
.ad-swiper-container {
  display: none;
  .ad-swiper-content {
    // 底部三個點點 容器
    .pagination-ad {
      bottom: 10px;
      // 底部點點(要更改這個就不能設style scoped)
      .swiper-pagination-bullet {
        width: 0.6rem;
        height: 0.6rem;
        margin: 0 0.625rem !important;
        background: map-get($colors, "primary") !important;
        opacity: 1;
        transform: translate(0px, 0px) scale(1);
        transition: all 0.3s;
        &:hover {
          background: map-get($colors, "black-4") !important;
        }
      }
      // 底部點點被按下後
      .swiper-pagination-bullet-active {
        transform: translate(0px, 0px) scale(1.3);
        background: map-get($colors, "black-4") !important;
        transition: all 0.3s;
      }
    }
  }
}
@media all and (max-width: 1025px) {
  // 這時候要更換
  .ad-swiper-container {
    display: block;
  }
}
@media all and (max-width: 590px) {
  .ad-swiper-container {
    .ad-swiper-content {
      // 變成垂直
      .ad-swiper-item {
        flex-direction: column;
        align-items: center;
        margin: 0 0;
      }
    }
  }
}
@media all and (max-width: 390px) {
  // 將padding 縮小
  .ad-swiper-container {
    padding: 0 1rem !important;
  }
}
</style>
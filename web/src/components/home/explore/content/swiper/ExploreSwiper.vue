<template>
  <div class="explore-swiper">
    <!-- swiper 外圍容器 -->
    <swiper ref="list" class="explore-swiper-content" :options="swiperOption">
      <!-- swiper slide 容器 -->
      <swiper-slide
        class="explore-swiper-item d-flex pt-3"
        v-for="(item, index) in exploreSwiper"
        :key="index"
      >
        <!-- slide 內容 -->
        <explore-intro-item :introContent="item"></explore-intro-item>
      </swiper-slide>
      <!-- 底部三個按鈕 -->
      <div class="swiper-pagination pagination-explore" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// component
import exploreIntroItem from "../intro/content/IntroContent";

export default {
  props: ["exploreSwiper"],
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 20,
        pagination: {
          el: ".pagination-explore",
          clickable: true
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true
      }
    };
  },
  // 一開始要判斷他是一個還是兩個 然後監聽網頁放大縮小
  mounted() {
    this.changeSlidesPerView();
    window.addEventListener("resize", this.changeSlidesPerView);
  },
  methods: {
    // 更改slide 顯示一個還是兩個
    changeSlidesPerView() {
      let swiper = this.$refs.list.swiper;
      if (window.innerWidth < 590) {
        swiper.params.slidesPerView = 1;
      } else {
        swiper.params.slidesPerView = 2;
      }
    }
  },
  components: {
    "explore-intro-item": exploreIntroItem
  }
};
</script>

<style lang="scss">
@import "../../../../../assets/scss/_variable";
// swiper 容器 設置大小並先消失
.explore-swiper {
  display: none;
  width: 40rem;
  // 設置高度讓點點可以離 文字內容遠一點
  .explore-swiper-content {
    // width: 100%;
    height: 24rem;
    .pagination-explore {
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
// swiper 出現
@media all and (max-width: 1025px) {
  .explore-swiper {
    display: block;
  }
}
// 讓寬度100% 並設置padding
@media all and (max-width: 760px) {
  .explore-swiper {
    width: 100%;
    padding: 2rem 4rem;
  }
}
// 讓間距都小一點
@media all and (max-width: 590px) {
  .explore-swiper {
    padding: 0rem 2rem;
    .explore-swiper-content {
      height: 21rem;
    }
  }
}
</style>
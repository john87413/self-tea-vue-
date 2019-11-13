<template>
  <div class="feature-swiper">
    <swiper ref="list" class="feature-swiper-content" :options="swiperOption">
      <swiper-slide
        class="feature-swiper-item d-flex flex-column"
        v-for="(item, index) in featureSwiperContent.featureList"
        :key="index"
      >
        <feature-img :imgLink="item.img"></feature-img>
        <feature-intro :introContent="item.intro"></feature-intro>
      </swiper-slide>

      <div class="swiper-pagination pagination-feature" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// components
import FeatureImg from "../../content/FeatureImg/FeatureImg";
import FeatureIntro from "../../content/FeatureIntro/FeatureIntro";

export default {
  props: ["featureSwiperContent"],
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 0,
        loop : true,
        pagination: {
          el: ".pagination-feature",
          clickable: true
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true
      }
    };
  },
  // 一開始判斷slide 要為一個還是兩個 並監聽resize
  mounted() {
    this.changeSlidesPerView();
    window.addEventListener("resize", this.changeSlidesPerView);
  },
  methods: {
    // 判斷slide 要一個還是兩個
    changeSlidesPerView() {
      let swiper = this.$refs.list.swiper;
      if (window.innerWidth < 700) {
        swiper.params.slidesPerView = 1;
      } else if (window.innerWidth == 700) {
        swiper.params.slidesPerView = 1;
      } else {
        swiper.params.slidesPerView = 2;
      }
    }
  },
  components: {
    "feature-img": FeatureImg,
    "feature-intro": FeatureIntro
  }
};
</script>

<style lang="scss">
@import "../../../../../assets/scss/_variable";
.feature-swiper {
  display: none;
  width: 100%;
  .feature-swiper-content {
    width: 100%;
    // 點點離內容遠一點
    .pagination-feature {
      bottom: 2rem;
      // 底部點點(要更改這個就不能設style scoped)
      .swiper-pagination-bullet {
        width: 0.6rem;
        height: 0.6rem;
        margin: 0 0.625rem !important;
        background: map-get($colors, "white") !important;
        opacity: .5;
        transform: translate(0px, 0px) scale(1);
        transition: all 0.3s;
        &:hover {
          opacity: 1;
        }
      }
      // 底部點點被按下後
      .swiper-pagination-bullet-active {
        transform: translate(0px, 0px) scale(1.3);
        opacity: 1;
        transition: all 0.3s;
      }
    }
  }
}
// 這時候要出現
@media all and (max-width: 1180px) {
  .feature-swiper {
    display: block;
  }
}
</style>
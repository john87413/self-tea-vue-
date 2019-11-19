<template>
  <div class="feature-swiper">
    <!-- 滑塊 -->
    <swiper ref="list" class="feature-swiper-content" :options="swiperOption">
      <!-- 子滑塊 -->
      <swiper-slide
        class="feature-swiper-item d-flex flex-column"
        v-for="(item, index) in featureSwiperContent.featureList"
        :key="index"
      >
        <!-- 圖片區 -->
        <feature-img :imgLink="item.img"></feature-img>
        <!-- 介紹區 -->
        <feature-intro :introContent="item.intro"></feature-intro>
      </swiper-slide>

      <!-- 點點 -->
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
        slidesPerView: 2, // 控制一次顯示幾個
        spaceBetween: 0, 
        loop: true, // 控制無限循環
        pagination: {
          el: ".pagination-feature",
          clickable: true
        },
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
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
    // 判斷slide 要顯示一個還是兩個
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
// 外圍容器要設置大小 swiper 才不會變超大(因為外面有d-flex)
.feature-swiper {
  display: none;
  width: 100%;
  .feature-swiper-content {
    width: 100%; // 應該不用 因為swiper 本身會 100%
    .pagination-feature {
      bottom: 2rem; // 點點離內容遠一點
      // 底部點點(要更改這個就不能設style scoped)
      .swiper-pagination-bullet {
        width: 0.6rem;
        height: 0.6rem;
        margin: 0 0.625rem ;
        background: map-get($colors, "white") ;
        opacity: 0.5;
        transform: translate(0px, 0px) scale(1);
        transition: all 0.3s;
        &:hover {
          opacity: 1;
        }
      }
      // 底部點點被按下後
      .swiper-pagination-bullet-active {
        transform: translate(0px, 0px) scale(1.3); // 點點放大
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
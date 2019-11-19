<template>
  <div class="share-swiper mt-11">
    <!-- swiper 外圍容器 -->
    <swiper ref="list" class="share-swiper-content" :options="swiperOption">
      <!-- swiper slide item 容器 -->
      <swiper-slide
        class="share-swiper-item d-flex jc-center"
        v-for="(item, index) in shareSwiper.imgList"
        :key="index"
      >
        <img :src="item.imgLink" />
      </swiper-slide>
      <!-- 底部三個按鈕 -->
      <div class="swiper-pagination pagination-share" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ["shareSwiper"],
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 20,
        pagination: {
          el: ".pagination-share",
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
      if (window.innerWidth < 590) {
        swiper.params.slidesPerView = 1;
      } else if (window.innerWidth == 590) {
        swiper.params.slidesPerView = 1;
      } else {
        swiper.params.slidesPerView = 2;
      }
    }
  },
  components: {}
};
</script>

<style lang="scss">
@import "../../../../../assets/scss/_variable";
// swiper 外容器 寬度100% 先設為消失
.share-swiper {
  display: none;
  width: 100%; // 可以不用
  // swiper 內容器
  .share-swiper-content {
    width: 90%; // 可以不用
    padding: 0 0 2rem 0;
    // swiper item 容器
    .share-swiper-item {
      img {
        width: 80%;
        height: auto;
      }
    }
    // 點點離內容遠一點
    .pagination-share {
      bottom: 0px;
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
// 這時候要出現
@media all and (max-width: 900px) {
  .share-swiper {
    display: block;
  }
}
// slide 變為只出現一個 要縮小一些東西 不然會太大
@media all and (max-width: 590px) {
  .share-swiper {
    .share-swiper-content {
      width: 100%;
      .share-swiper-item {
        padding: 0 0 2rem 0;
        img {
          width: 50%;
          height: 30%; // 手機端height: auto 失效 (不知為啥)
        }
      }
    }
  }
}
</style>
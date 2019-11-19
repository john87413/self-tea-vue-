<template>
  <div class="home-daily">
    <div class="daily-container d-flex">
      <!-- 日常介紹區 -->
      <daily-intro :dailyIntroContent="dailyContent.dailyIntro"></daily-intro>
      <!-- 日常手機圖片區 -->
      <daily-img :dailyImgContent="dailyContent.dailyImg"></daily-img>
    </div>
  </div>
</template>

<script>
// components
import dailyIntro from "./content/intro/DailyIntro";
import dailyImg from "./content/img/DailyImg";

export default {
  props: ["dailyContent"],
  data() {
    return {};
  },
  components: {
    "daily-intro": dailyIntro,
    "daily-img": dailyImg
  }
};
</script>

<style lang="scss" scoped>
.home-daily {
  padding-bottom: 6rem;
  background: url("../../../assets/images/share_bg.jpg");
  // 日常 容器
  .daily-container {
    position: relative;
    width: 77.3333rem;
    margin: 0 auto;
    // 日常 top 小樹枝
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 6rem;
      width: 12rem;
      height: 7.6667rem;
      background: url("../../../assets/images/daily_tree.jpg") no-repeat left
        top;
    }
  }
}

@media all and (max-width: 1180px) {
  .home-daily {
    // 變成垂直排列 、 如果裡面物件要隨寬度大小變換 外容器就要設%數
    .daily-container {
      width: 100%;
      padding: 0 3.3333rem;
      flex-direction: column;
    }
  }
}
@media all and (max-width: 700px) {
  .home-daily {
    .daily-container {
      padding: 0 1rem;
    }
  }
}
</style>
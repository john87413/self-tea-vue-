<template>
  <div class="home-daily">
    <div class="daily-container">
        <daily-intro :dailyIntroContent="dailyContent.dailyIntro"></daily-intro>
        <daily-img :dailyImgContent="dailyContent.dailyImg"></daily-img>
    </div>
  </div>
</template>

<script>
// components
import dailyIntro from './content/intro/DailyIntro'
import dailyImg from './content/img/DailyImg'

export default {
  props: ["dailyContent"],
  data() {
    return {};
  },
  components: {
      "daily-intro": dailyIntro,
      "daily-img":dailyImg,
  }
};
</script>

<style lang="scss" scoped>
.home-daily{
    padding-bottom: 6.5rem;
    background: url("../../../assets/images/share_bg.jpg");
    .daily-container{
        position: relative;
        width: 1160px;
        margin: 0 auto;
        &::before{
            content: "";
            position: absolute;
            top: 0;
            left: 6rem;
            width: 12rem;
            height: 7.6667rem;
            background: url("../../../assets/images/daily_tree.jpg")no-repeat left top
        }
    }
}
</style>
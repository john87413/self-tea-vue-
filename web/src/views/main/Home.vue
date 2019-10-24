<template>
  <div class="home">
    <home-welcome :welcomeContent="welcomeContent"></home-welcome>
    <home-ads :adContent="adContent"></home-ads>
  </div>
</template>

<script>
// components
import homeWelcome from "../../components/home/welcome/Welcome";
import homeAds from "../../components/home/ads/Ad";

// images
import ad_01 from '../../assets/images/home_ad_01.jpg';
import ad_02 from '../../assets/images/home_ad_02.jpg';

export default {
  name: "home",
  data() {
    return {
      welcomeContent: {},
      adContent: [
        {
          imgLink: ad_01,
          title: "茶湯會新增「TP餅」販售店家！",
          text:
            "最受歡迎的珍奶料理－TP餅，五種鹹甜口味老少咸宜，將在更多店家與您相見～"
        },
        {
          imgLink:  ad_02,
          title: "茶湯會│Uber 特別合作",
          text: "2019/10/14-11/10期間雙重奏帶您搭Uber享優惠～"
        }
      ]
    };
  },
  components: {
    "home-welcome": homeWelcome,
    "home-ads": homeAds,
  }
};
</script>

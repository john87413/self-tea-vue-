<template>
  <div class="main">
    <main-header :menuContent="menuContent"></main-header>
    <router-view class="main-view"></router-view>
    <main-footer></main-footer>
  </div>
</template>

<script>
// components
import mainHeader from "../components/header/main/MainHeader";
import mainFooter from "../components/footer/main/MainFooter";

export default {
  data() {
    return {
      // header 的資料
      menuContent: {
        tool: {
          contact: [
            { icon: "line" },
            { icon: "ios-morse-facebook" },
            { icon: "IG" }
          ],
          language: [
            { name: "繁體版", space: "&emsp;/&emsp;" },
            { name: "簡體版", space: "&emsp;/&emsp;" },
            { name: "English", space: "&emsp;/&emsp;" }
          ]
        },
        largeMenu: [
          { title: "最新消息", link: "/main/news" },
          { title: "瞭解茶湯", link: "/main/about" },
          { title: "茶湯點單", link: "/main/menu" },
          { title: "嚴選食材", link: "/main/strict" },
          { title: "門市專區", link: "/main/store" },
          { title: "加盟專區", link: "/main/join" },
          { title: "菁英招募", link: "/main/careers" }
        ]
      }
    };
  },
  components: {
    "main-header": mainHeader,
    "main-footer": mainFooter
  }
};
</script>

<style lang="scss" scoped>
// 用來隱藏DailyImg.vue的陰影
.main{
  overflow-x: hidden;
}
</style>
<template>
  <div class="main">
    <main-header :menuContent="menuContent"></main-header>
    <router-view class="main-view"></router-view>
    <main-footer :footerContent="footerContent"></main-footer>
  </div>
</template>

<script>
// components
import mainHeader from "../components/header/main/MainHeader";
import mainFooter from "../components/footer/main/MainFooter";

// images
import logo from "../assets/images/menu_logo.png";

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
      },
      // footer 的資料
      footerContent: {
        logoImgContent: {
          imgLink: logo
        },
        contactInfoContent: {
          contactList: [
            { title: "電話", info: "886-4-2389-6909" },
            { title: "傳真", info: "886-4-23894277" },
            { title: "加盟專線", info: "0800-800533" },
            { title: "地址", info: "台中市南屯區龍富路三段565號2樓之1" },
            { title: "聯絡我們", info: "" }
          ]
        },
        contactButtonContent: {
          contactList: [
            { icon: "line" },
            { icon: "ios-morse-facebook" },
            { icon: "IG" }
          ]
        },
        copyRightContent: {
          content: "TP TEA 2017 © Copyright All Rights Reserved. 網頁設計‧iBest"
        }
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
.main {
  overflow-x: hidden;
}
</style>
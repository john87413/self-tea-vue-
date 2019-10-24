<template>
  <div class="welcome-intro d-flex jc-center">
    <!-- 右上角裝飾 -->
    <intro-decorate id="decorate"></intro-decorate>
    <!-- 介紹區塊 -->
    <intro-content id="content" :introContent="introContent"></intro-content>
  </div>
</template>

<script>
// components
import introDecorate from "./content/topDecorate/TopDecorate";
import introContent from "./content/introContent/IntroContent";

export default {
  data() {
    return {
      introContent: {
        introTitle: { titleTime: "創立於乙酉年" },
        introText: {
          text:
            "三十年茶湯硬底子，品選茶葉真功夫。<br />堅持以茶會友的初衷，為您真心做到最好。<br />提供最用心的幸福好茶，感受每一杯的人情滋味。"
        },
        introLanguage: {
          languageTitle: "LANGUAGE",
          languages: ["繁體版", "簡體版", "English"],
          space: "&emsp;/&emsp;"
        }
      }
    };
  },
  mounted() {
    // window.addEventListener("resize", this.moveDiv("decorate", "content"));
  },
  methods: {
    // moveDiv(id_1, id_2) {
    //   if (window.innerWidth < 980) {
    //     var insert = function(nodeInsert, nodeTo) {
    //       if (nodeInsert.insertAdjacentElement) {
    //         nodeTo.insertAdjacentElement("beforeBegin", nodeInsert);
    //       } else {
    //         nodeTo.parentNode.insertBefore(nodeInsert, nodeTo);
    //       }
    //     };
    //     var obj = document.createElement("a");
    //     var t1 = document.getElementById(id_1);
    //     var t2 = document.getElementById(id_2);
    //     insert(obj, t2);
    //     insert(t2, t1);
    //     insert(t1, obj);
    //     document.body.removeChild(obj);
    //   }
    // }
  },
  components: {
    "intro-decorate": introDecorate,
    "intro-content": introContent
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../../assets/scss/_variable.scss";
// intro容器 (設置 % 才可以變小)
.welcome-intro {
  position: relative;
  overflow: hidden;
  width: 55%;
}
@media all and (max-width: 980px) {
  .welcome-intro {
    width: 100%;
    position: relative;
  }
}
@media all and (max-width: 480px) {
  .welcome-intro {
    width: 100%;
    position: relative;
  }
}
</style>
<template>
  <div class="main-foot-contact-info">
    <div class="contact-info-container d-flex fl-wrap jc-center fs-xs">
      <div
        class="info-content d-flex mb-4 jc-center ai-end"
        v-for="(item, index) in contactInfoContent.contactList"
        :key="index"
      >
        <p class="info-title text-grey-4 mr-3 pr-1 d-flex fl-nowrap">{{item.title}}</p>
        <p class="info-context text-white">{{item.info}}</p>
        <i
          class="icon-email iconfont icon-mailenvelopeletteremailnewsletter text-white"
          v-if="index === 4"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["contactInfoContent"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/scss/_variable";
.main-foot-contact-info {
  .contact-info-container {
    font-family: Helvetica, Arial, sans-serif, "微軟正黑體", Heiti TC,
      "メイリオ";
    .info-content {
      &::after {
        content: "/";
        padding: 0 10px;
        color: #888;
      }
      &:nth-child(3) {
        &::after {
          display: none;
        }
      }
      &:nth-child(5) {
        .info-title {
          color: map-get($colors, "white");
        }
        &::after {
          display: none;
        }
      }
    }
  }
}
@media all and (max-width: 620px) {
  .main-foot-contact-info {
    .contact-info-container {
      flex-direction: column;
      .info-content {
        .info-title {
          font-size: 0.9rem;
          white-space: nowrap;
        }
        .info-context {
          font-size: 0.9rem;
        }
        &::after {
          display: none;
        }
        &:nth-child(4) {
          align-items: flex-start;
        }
      }
    }
  }
}
</style>
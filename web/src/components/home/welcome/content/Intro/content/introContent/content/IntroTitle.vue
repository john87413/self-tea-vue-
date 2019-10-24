<template>
  <!-- title 容器 -->
  <div class="intro-content-title ml-8 d-flex flex-column ai-center">
    <!-- title LOGO -->
    <h1 class="title-logo d-flex ml-4">
      <a class="logo-link"></a>
    </h1>
    <!-- title time -->
    <div class="title-time fs-xxl my-6 mr-5">{{introTitle.titleTime}}</div>
  </div>
</template>

<script>
export default {
  props: ["introTitle"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.intro-content-title {
  .title-logo {
    width: 15rem;
    .logo-link {
      background: url("../../../../../../../../assets/images/welcome_logo.png")
        no-repeat;
      width: 100%;
      height: 24rem;
    }
  }
  .title-time {
    font-weight: normal;
    letter-spacing: 0.2rem;
  }
}
@media all and (max-width: 980px) {
  .intro-content-title {
    margin: 0;
    .title-logo {
      margin: 0;
      .logo-link {
        background: url("../../../../../../../../assets/images/welcome_logo_vertical.png")
          no-repeat;
      }
    }
    .title-time {
      margin: 1.5rem 0;
      font-size: 30px;
    }
  }
}
@media all and (max-width: 480px) {
  .intro-content-title {
    .title-logo {
      width: 10rem;
      .logo-link {
        height: 18rem;
        background-size: contain;
      }
    }
    .title-time {
      margin: 1rem 0;
    }
  }
}
</style>
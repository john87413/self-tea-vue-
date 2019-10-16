<template>
  <div class="main">
    <main-header></main-header>
    <router-view class="main-view"></router-view>
    <main-footer></main-footer>
  </div>
</template>

<script>
// components
import mainHeader from '../components/header/main/MainHeader'
import mainFooter from '../components/footer/main/MainFooter'

export default {
  data() {
    return {};
  },
  components: {
    "main-header": mainHeader,
    "main-footer": mainFooter,
  }
};
</script>

<style lang="scss" scoped>
</style>
<template>
  <div class="head-tool w-100">
    <!-- w-100 才可以對齊右邊 -->
    <div class="menu-tool d-flex jc-end w-100">
      <!-- 聯絡工具區 -->
      <tool-contact :contactContent="toolContent.contact"></tool-contact>
      <!-- 語言工具區 -->
      <tool-language :languageContent="toolContent.language"></tool-language>
    </div>
  </div>
</template>

<script>
// component
import toolLanguage from "./content/Language";
import toolContact from "./content/Contact";

export default {
  props: ["toolContent"],
  data() {
    return {};
  },
  components: {
    "tool-language": toolLanguage,
    "tool-contact": toolContact
  }
};
</script>

<style lang="scss" scoped>
</style>
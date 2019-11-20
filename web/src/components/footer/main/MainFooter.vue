<template>
  <div class="main-footer">
    <div class="footer-container py-10 d-flex jc-center">
      <div class="footer-content d-flex flex-column ai-center">
        <logo-img :logoImgContent="footerContent.logoImgContent"></logo-img>
        <contact-info :contactInfoContent="footerContent.contactInfoContent"></contact-info>
        <contact-button :contactButtonContent="footerContent.contactButtonContent"></contact-button>
        <copy-right :copyRightContent="footerContent.copyRightContent"></copy-right>
      </div>
    </div>
  </div>
</template>

<script>
// components
import logoImg from "./content/LogoImg";
import contactInfo from "./content/ContactInfo";
import contactbutton from "./content/ContactButton";
import copyRight from "./content/CopyRight";

export default {
  props: ["footerContent"],
  data() {
    return {};
  },
  components: {
    "logo-img": logoImg,
    "contact-info": contactInfo,
    "contact-button": contactbutton,
    "copy-right": copyRight
  }
};
</script>

<style lang="scss" scoped>
.main-footer {
  .footer-container {
    background: url("../../../assets/images/foot-bg.jpg") repeat;
    .footer-content {
      width: 37.3333rem;
    }
  }
}
@media all and (max-width: 620px) {
  .main-footer {
    .footer-container {
        padding: 3rem 0;
      .footer-content {
          padding: 0 1.5rem;
          width: 100%;
      }
    }
  }
}
</style>
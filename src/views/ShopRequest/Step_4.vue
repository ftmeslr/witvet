<template>
  <div class="container" style="margin-top: 46px">
    <div class="navbar__logo">
      <img src="@/assets/images/WitVet.svg" alt="" />
    </div>
    {{ form }}
    <div class="error_404-img">
      <img src="@/assets/images/request.svg" />
      <p class="request__subtitle">
        Your Item has been submited and will Be published soon.
      </p>
      <router-link to="/" class="btn__gradient">Back to home</router-link>
    </div>
  </div>
</template>

<style scoped>
.error_404-img {
  margin-top: 146px;
}
.btn__gradient {
  width: 296px;
  padding: 18px 99px;
  margin: auto !important;
  margin-top: 20px !important;
}
@media screen and (max-width: 360px) {
  .btn__gradient {
    width: 260px;
    padding: 19px 84px;
  }
}
</style>
<script>
import { onMounted } from "@vue/runtime-core";

export default {
  setup() {
    onMounted(() => {
      document.querySelector(".witvet-wrapper").classList.remove("isLoading");
    });
  },
};
</script>

<template>
  <WvNavbar />
  <div class="patterns">
    <img class="pattern_1" src="@/assets/images/pattern.svg" alt="" />
    <img class="foot_print" src="@/assets/images/dog_foot.svg" alt="" />
    <img class="foot_print-2" src="@/assets/images/dog_foot.svg" alt="" />
    <img class="foot_print-3" src="@/assets/images/dog_foot.svg" alt="" />
    <img class="foot_print-4" src="@/assets/images/dog_foot.svg" alt="" />
  </div>
  <div class="page-wrapper">
    <div class="thumbnail">
      <img src="@/assets/images/Error404.svg" />
    </div>
    <p class="title">Page Not Found</p>
    <p class="description">Please try again</p>
  </div>

  <WvFooter />
</template>

<script>
import { onMounted } from "@vue/runtime-core";

export default {
  name: "NotFound",
  setup() {
    onMounted(() => {
      setTimeout(() => {
        document.querySelector(".witvet-wrapper").classList.remove("isLoading");
      }, 200);
    });
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>

<template>
  <WvNavbar />

  <div class="page-wrapper">
    <div class="page-title">
      <span class="title-underline">
        <img src="@/assets/images/about_underline.svg" />
      </span>
      <p class="text">About Us</p>
    </div>
    <div class="page-description" v-html="description"></div>
  </div>

  <WvFooter />
</template>

<script>
import { getAboutUs } from "@/api/landing/landing.api";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "Contact",
  setup() {
    const description = ref("");

    const showAboutUs = () => {
      getAboutUs().then((data) => {
        description.value = data.page.description;

        setTimeout(() => {
          document
            .querySelector(".witvet-wrapper")
            .classList.remove("isLoading");
        }, 200);
      });
    };

    onMounted(() => {
      showAboutUs();
    });

    return {
      description,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>

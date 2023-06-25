<template>
  <WvNavbar />
  <div class="patterns">
    <img class="pattern_1" src="@/assets/images/pattern.svg" alt="" />
    <img class="foot_print" src="@/assets/images/dog_foot.svg" alt="" />
    <img class="foot_print-2" src="@/assets/images/dog_foot.svg" alt="" />
    <img class="foot_print-5" src="@/assets/images/dog_foot.svg" alt="" />
    <img class="foot_print-3" src="@/assets/images/dog_foot.svg" alt="" />
    <img class="foot_print-4" src="@/assets/images/dog_foot.svg" alt="" />

  </div>
  <div class="page-wrapper app-page">
    <div class="primary-part">
      <div class="page-title">
        <span class="title-underline">
          <img
            src="@/assets/images/download_underline.svg"
            alt="underline arc"
          />
        </span>
        <p class="text">{{title}}</p>
      </div>
      <div class="page-description" v-html="description"></div>
      <div class="download-list">
        <div class="item" v-if="ios_app">
          <span class="icon">
            <img src="@/assets/images/app-page-apple-icon.svg" alt="iOS icon" />
          </span>
          <p class="description">Download For IOS</p>
          <a :href="ios_app" class="download">
            <span class="text"> Download </span>
            <span class="icon">
              <img
                src="@/assets/images/download-icon.svg"
                alt="Download icon"
              />
            </span>
          </a>
        </div>
        <div class="item" v-if="android_app">
          <span class="icon">
            <img
              src="@/assets/images/app-page-android-icon.svg"
              alt="iOS icon"
            />
          </span>
          <p class="description">Download For Android</p>
          <a :href="android_app" class="download">
            <span class="text"> Download </span>
            <span class="icon">
              <img
                src="@/assets/images/download-icon.svg"
                alt="Download icon"
              />
            </span>
          </a>
        </div>
      </div>
    </div>
    <div class="secondary-part">
      <img src="@/assets/images/app-page-art.png" alt="Application Art" />
    </div>
  </div>

  <WvFooter />
</template>

<script>
import { getApp, appUrls } from "@/api/landing/landing.api";
import { ref } from "@vue/reactivity";
import { computed, onMounted, watch } from "@vue/runtime-core";

export default {
  setup() {
    const title = ref("");
    const description = ref("");
    const android_app = ref("");
    const ios_app = ref("");
    const showAppLoaded = ref(false);
    const getAppUrlsLoaded = ref(false);

    const loaded = computed(() => {
      return getAppUrlsLoaded.value && showAppLoaded.value;
    });

    const showApp = () => {
      getApp().then((data) => {
        title.value = data.page.title;
        description.value = data.page.description;
        showAppLoaded.value = true;
      });
    };

    const getAppUrls = () => {
      appUrls().then((data) => {
        console.log(data)
        android_app.value = data.link_app_android;
        ios_app.value = data.link_app_ios;
        getAppUrlsLoaded.value = true;
      });
    };

    watch(loaded, (value) => {
      if (value) {
        document.querySelector(".witvet-wrapper").classList.remove("isLoading");
      }
    });

    onMounted(() => {
      showApp();
      getAppUrls();
    });

    return {
      title,
      description,
      android_app,
      ios_app,
      showAppLoaded,
      getAppUrlsLoaded,
      loaded,
      showApp,
      getAppUrls,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
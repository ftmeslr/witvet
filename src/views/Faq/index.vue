<template>
  <WvNavbar />
  <div class="patterns">
    <img class="pattern_1" src="@/assets/images/pattern.svg" alt="" />
    <img class="foot_print" src="@/assets/images/dog_foot.svg" alt="" />
    <img class="foot_print-2" src="@/assets/images/dog_foot.svg" alt="" />
    <img class="foot_print-3" src="@/assets/images/dog_foot.svg" alt="" />
    <img class="foot_print-4" src="@/assets/images/dog_foot.svg" alt="" />
  </div>
  <div class="rad pa"></div>
  <div class="page-wrapper faqs-page">
    <div class="primary-part">
      <div class="page-title">
        <span class="title-underline">
          <img src="@/assets/images/faq_underline.svg" alt="underline arc" />
        </span>
        <p class="text">{{ title }}</p>
      </div>
      <div class="page-description" v-html="description"></div>
    </div>
    <div class="secondary-part">
      <img src="@/assets/images/faq-page-art.png" alt="Faq Art" />
    </div>
    <div class="faqs-list">
      <div
        :class="['faq-item', item.isActive ? 'active' : '']"
        v-for="(item, index) in data_faq"
        :key="index"
        @click="handleActiveItem(index)"
      >
        <span class="number">{{ index + 1 }}</span>

        <span class="flex-responsive">
          <div class="content">
            <p class="question">
              {{ item.question }}
            </p>
            <p class="answer">
              <br />
              {{ item.answer }}
            </p>
          </div>
          <span class="arrow-button">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6667 13.3335L16 18.6668L21.3334 13.3335"
                stroke="#C4B6BE"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </span>
      </div>
    </div>
  </div>

  <WvFooter />
</template>

<script>
import { getFaq, getFaqQAndA } from "@/api/landing/landing.api";
import { ref } from "@vue/reactivity";
import { computed, onMounted, watch } from "@vue/runtime-core";

export default {
  setup() {
    const title = ref("");
    const description = ref("");
    const data_faq = ref([]);
    const item = ref("");
    const showFaqLoaded = ref(false);
    const showFaqQAndALoaded = ref(false);

    const loaded = computed(() => {
      return showFaqQAndALoaded.value && showFaqLoaded.value;
    });

    const getFaqsContent = () => {
      getFaq().then((data) => {
        title.value = data.page.title;
        description.value = data.page.description;
        showFaqLoaded.value = true;
      });
    };

    const getFaqsList = () => {
      getFaqQAndA().then((data) => {
        data_faq.value = data.map((i) => {
          return {
            ...i,
            isActive: false,
          };
        });
        showFaqQAndALoaded.value = true;
      });
    };

    const handleActiveItem = (index) => {
      data_faq.value[index].isActive = !data_faq.value[index].isActive;
    };

    watch(loaded, (value) => {
      if (value) {
        document.querySelector(".witvet-wrapper").classList.remove("isLoading");
      }
    });

    onMounted(() => {
      getFaqsList();
      getFaqsContent();
    });

    return {
      title,
      description,
      data_faq,
      item,
      showFaqLoaded,
      showFaqQAndALoaded,
      loaded,
      handleActiveItem,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>

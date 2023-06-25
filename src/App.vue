<template>
  <notifications position="bottom left" />
  <div class="witvet-wrapper isLoading">
    <div class="lottie-wrapper">
      <div class="lottie">
        <Vue3Lottie :animationData="taskamLottie" :height="200" :width="200" />
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
//lottie
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import taskam from "@/assets/lotties/witvet.json";
import { ref } from "@vue/reactivity";

export default {
  components: {
    Vue3Lottie,
  },
  setup() {
    //lottie
    let taskamLottie = ref(taskam);

    return {
      taskamLottie,
    };
  },
};
</script>

<style NavbarComponentyle lang="scss">
@import "./assets/scss/main.scss";
</style>

<template>
  <div class="item">
    <span class="title">{{ title }}</span>
    <div class="input-box">
      <span class="icon">
        <img :src="require('@/assets/' + icon)" alt="user icon" />
      </span>
      {{ value }}
      <input
        :type="typeMode"
        :placeholder="placeholder"
        class="input"
        :value="defaultValue"
        @input="$emit('updateValue', $event.target.value)"
      />
      <span class="icon passIcon" @click="showPass">
        <img
          v-if="typeMode == 'password'"
          src="@/assets/images/icons/eye_off.svg"
          alt="user icon"
        />
        <img
          v-if="typeMode == 'text'"
          src="@/assets/images/icons/eye_on.svg"
          alt="user icon"
        />
      </span>
    </div>
    <span class="error">
      {{ data.errors[0] }}
    </span>
  </div>
</template>
<script>
import { computed, ref } from "vue";
export default {
  name: "WvPassword",
  props: {
    title: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    data: {
      type: Object,
      default: () => {
        return { value: "", errors: [] };
      },
      validator: (value) => {
        return (
          "value" in value && "errors" in value && Array.isArray(value.errors)
        );
      },
    },
    defaultValue: {
      type: String,
      default: "",
    },
  },

  emits: ["updateValue"],
  setup(props, { slots }) {
    const typeMode = ref("password");

    const hasSlot = computed(() => {
      return (slot) => (slots[slot] ? true : false);
    });

    function showPass() {
      if (typeMode.value == "password") {
        typeMode.value = "text";
      } else typeMode.value = "password";
    }
    return {
      hasSlot,
      showPass,
      typeMode,
    };
  },
};
</script>
<style lang="scss">
@import "./style.scss";
.passIcon {
  cursor: pointer !important;
}
</style>

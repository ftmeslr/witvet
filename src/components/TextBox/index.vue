<template>
  <div class="item">
    <span class="title">{{ title }}</span>
    <div class="input-box">
      <span class="icon">
        <img :src="require('@/assets/' + icon)" alt="user icon" />
      </span>
      {{ value }}
      <input
        type="text"
        :placeholder="placeholder"
        class="input"
        :value="defaultValue"
        @input="$emit('updateValue', $event.target.value)"
      />
    </div>
    <span class="error">
      {{ data.errors[0] }}
    </span>
  </div>
</template>
<script>
import { computed } from "vue";
export default {
  name: "WvTextBox",

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
    const hasSlot = computed(() => {
      return (slot) => (slots[slot] ? true : false);
    });

    return {
      hasSlot,
    };
  },
};
</script>
<style lang="scss">
@import "./style.scss";

</style>

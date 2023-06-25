<template>
  <div :class="['form-control textbox', hasBorder ? 'has-border' : '']">
    <label class="title" v-if="title">{{ title }}</label>
    <div class="input-container">
      <input
        type="text"
        class="input"
        :placeholder="placeholder"
        v-model="value"
      />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "WvTextboxSerch",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    title: {
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
    hasBorder: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      value: this.data.value,
    };
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
  watch: {
    value(newValue) {
      this.$emit("updateValue", newValue);
    },
    data: {
      handler(newValue) {
        this.value = newValue.value;
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>

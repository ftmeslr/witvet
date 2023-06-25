<template>
  <div
    :class="['form-control dropdown', isActive ? 'active' : '']"
    :ref="
      (el) => {
        mainElement = el;
      }
    "
  >
    <label class="title" v-if="title">{{ title }}</label>
    <div class="input-container">
      <span class="dropdown-button" @click="toggler(!isActive)">
        <span v-if="defaultValue">{{ defaultValue }}</span>
        <span v-else>{{buttonTitle}}</span>

        <span class="icon">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.14279 9.83381L10.5555 13.2667C10.6105 13.322 10.6787 13.3664 10.7555 13.3968C10.8323 13.4273 10.9158 13.443 11.0003 13.443C11.0848 13.443 11.1683 13.4273 11.2451 13.3968C11.3219 13.3664 11.3902 13.322 11.4452 13.2667L14.8579 9.83381C15.1835 9.50614 14.9135 9 14.413 9H7.58665C7.08614 9 6.81612 9.50614 7.14279 9.83381Z"
              fill="#C4B6BE"
            />
          </svg>
        </span>
      </span>
      <div class="dropdown-container">
        <WvTextboxSerch
          placeholder="Search item"
          :hasBorder="true"
          v-if="searchable"
          :data="keyword"
          @updateValue="(data) => (keyword.value = data)"
        />
        <div class="options" v-if="_options.length > 0">
          <div
            :class="['option', currentValue === '' ? 'active' : '']"
            @click="onUpdateValue($event, { title: 'All', value: '' })"
          >
            All
          </div>

          <div
            :class="[
              'option',
              currentValue === option.value ? 'active' : '',
              option.style ? option.style : 'text-primary',
            ]"
            v-for="(option, index) of _options"
            :key="index"
            @click="onUpdateValue($event, option)"
          >
            {{ option.title }}
          </div>
        </div>
      </div>

      <div class="validations" v-if="data.errors.length > 0">
        <span class="error">
          {{ data.errors[0] }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from "@vue/runtime-core";
import WvTextboxSerch from "@/components/TextBoxSearch";
export default {
  components: { WvTextboxSerch },
  name: "WvSelectList",
  props: {
    title: {
      type: String,
      default: "",
    },
    buttonTitle: {
      type: String,
      default: "Select an item",
    },
    options: {
      type: Array,
      default: () => {
        return [];
      },
    },
    data: {
      type: Object,
      default: () => {
      //   return {
      //     value: {
      //       title: "",
      //       value: "",
      //     },
      //     errors: [],
      //   };
      // },
      // validator: (value) => {
      //   return (
      //     "value" in value.value && "errors" in value && Array.isArray(value.errors)
      //   );
      },
    },
    searchable: {
      type: Boolean,
      default: true,
    },
    defaultValue: {
      type: String,
      default: "Select Country",
    },
  },
  emits: ["updateValue"],
  setup(props, { emit }) {
    const keyword = reactive({
      value: "",
      errors: "",
    });
    // const _options = ref([]);
    const isActive = ref(false);
    const mainElement = ref(null);
    const currentValue = ref("");
    const selectListTitle = computed(() => {
      if (props.data.value) {
        const index = props.options.findIndex(
          (o) => o.value === props.data.value
        );
        if (index > -1) {
          return props.options[index].title;
        }
      }

      return props.buttonTitle;
    });

    document.addEventListener("click", (e) => {
      if (isActive.value) {
        const isEqual = e.target === mainElement.value;

        if (isEqual) return false;

        if (e.target.parentElement) {
          let parentElement = e.target.parentElement;

          let isBreaked = false;
          while (parentElement && mainElement.value !== parentElement) {
            if (mainElement.value === parentElement) {
              isBreaked = true;
              parentElement = null;
              break;
            } else {
              parentElement = parentElement.parentElement;
            }
          }

          if (mainElement.value === parentElement) return false;

          if (!isBreaked) {
            isActive.value = false;
            return true;
          }
        }
      }
    });

    const toggler = (state) => {
      setTimeout(() => {
        isActive.value = state;
      }, 50);
    };

    const onUpdateValue = (event, option) => {
      console.debug(event);
      emit("updateValue", option);
      console.log(option.title);
      selectListTitle.value = option.title;
      isActive.value = false;
      currentValue.value = option.value;
      keyword.value = "";
    };

    const _options = computed(() => {
      if (keyword.value) {
        return props.options.filter((i) =>
          i.title.toLowerCase().includes(keyword.value)
        );
      } else if (props.options) {
        return props.options;
      } else {
        return [];
      }
    });

    return {
      isActive,
      selectListTitle,
      onUpdateValue,
      currentValue,
      mainElement,
      toggler,
      keyword,
      _options,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>

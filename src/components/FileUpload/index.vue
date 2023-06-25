<template>
  <div class="file-upload">
    <label class="title">{{ title }}</label>
    <div class="modes-container">
      <template v-for="(input, index) in inputs" :key="input">
        <input
          type="file"
          style="display: none"
          accept="image/png, image/jpeg"
          :ref="
            (el) => {
              input.input = el;
            }
          "
          @change="select(input)"
        />

        <!-- preselected mode -->
        <template v-if="getItemById(input.id).path">
          <div class="preselected-mode">
            <div class="image">
              <img :src="getItemById(input.id).url" alt="" />
            </div>

            <div class="detail-container">
              <p class="name">Item {{ index + 1 }}</p>
              <span class="remove" @click="unselect(input)">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="44" height="44" rx="12" fill="#F8EBEC" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.8622 31H26.1422C27.1892 31 28.0592 30.192 28.1372 29.147L29.0342 17L15.0002 17L15.8672 29.142C15.9422 30.189 16.8132 31 17.8622 31V31Z"
                    stroke="#FF3A44"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 21V27"
                    stroke="#FF3A44"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M30 17L14 17"
                    stroke="#FF3A44"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17 17L18.013 14.298C18.306 13.517 19.052 13 19.886 13L24.114 13C24.948 13 25.694 13.517 25.987 14.298L27 17"
                    stroke="#FF3A44"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.5702 21L19.0002 27"
                    stroke="#FF3A44"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25.4298 21L24.9998 27"
                    stroke="#FF3A44"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <!-- <div class="upload-bar">
              <div class="uploaded"></div>
            </div> -->
            </div>
          </div>
        </template>

        <template v-else>
          <!-- empty mode -->
          <div
            class="empty-mode"
            v-if="!getItemById(input.id).value"
            @click="input.input.click()"
          >
            <span class="icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.4416 12.0915C5.1896 12.5355 2.67627 15.2941 2.67627 18.6675C2.67627 22.3488 5.6616 25.3342 9.34294 25.3342H24.0096C26.9549 25.3342 29.3429 22.9462 29.3429 20.0008C29.3429 17.0555 26.9549 14.6675 24.0096 14.6675C24.0096 10.2488 20.4283 6.66748 16.0096 6.66748C12.4936 6.66748 9.51494 8.93815 8.4416 12.0915Z"
                  stroke="#C4B6BE"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.1162 16.8893L16.0055 14L18.8949 16.8893"
                  stroke="#C4B6BE"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.9995 20.6667V14"
                  stroke="#C4B6BE"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>

            <div class="title">Upload Your Photo</div>
          </div>

          <!-- before upload mode -->
          <div
            class="before-upload-mode"
            v-else-if="
              getItemById(input.id).value &&
              getItemById(input.id).progress.size.loaded === 0
            "
          >
            <div class="image">
              <img src="" alt="" />
            </div>

            <div class="detail-container">
              <p class="name">Item {{ index + 1 }}</p>
              <span class="remove" @click="unselect(input)">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="44" height="44" rx="12" fill="#F8EBEC" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.8622 31H26.1422C27.1892 31 28.0592 30.192 28.1372 29.147L29.0342 17L15.0002 17L15.8672 29.142C15.9422 30.189 16.8132 31 17.8622 31V31Z"
                    stroke="#FF3A44"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 21V27"
                    stroke="#FF3A44"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M30 17L14 17"
                    stroke="#FF3A44"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17 17L18.013 14.298C18.306 13.517 19.052 13 19.886 13L24.114 13C24.948 13 25.694 13.517 25.987 14.298L27 17"
                    stroke="#FF3A44"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.5702 21L19.0002 27"
                    stroke="#FF3A44"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25.4298 21L24.9998 27"
                    stroke="#FF3A44"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>

          <!-- during upload mode -->
          <div
            class="during-upload-mode"
            v-else-if="
              getItemById(input.id).value &&
              getItemById(input.id).progress.size.loaded > 0
            "
          >
            <div class="image">
              <img src="" alt="" />
            </div>

            <div class="detail-container">
              <p class="name">Item {{ index + 1 }}</p>
              <div class="progress-bar">
                <span class="number">
                  {{ getItemById(input.id).progress.percentage }}%
                </span>
                <div
                  class="loaded"
                  :style="{
                    width: getItemById(input.id).progress.percentage + '%',
                  }"
                ></div>
              </div>
            </div>
          </div>
        </template>

        <div class="validations" v-if="data.errors.length > 0">
          <span class="error"  :key="error">
            {{ data.errors[0] }}
          </span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "WvFileUpload",
  props: {
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
    title: {
      type: String,
      default: "Photos",
    },
  },
  emits: ["selected", "unselected", "newItem"],
  setup(props, { emit }) {
    const inputs = ref([]);
    for (const item of props.data.value) {
      inputs.value.push({
        id: item.id,
        input: null,
        progress: item.progress,
      });
    }

    const getItemById = (id) => {
      const index = props.data.value.findIndex((i) => i.id === id);
      if (index < 0) return false;

      return props.data.value[index];
    };

    const select = (input) => {
      emit("selected", input.id, input.input.files[0], props.data);
      if (props.data.multiple) {
        newItem();
      }

      setTimeout(() => {
        readSrcFromFile(
          input.input.files[0],
          input.input.nextElementSibling.children[0].children[0]
        );
      }, 100);
    };

    const unselect = (input) => {
      const index = inputs.value.findIndex((i) => i.id === input.id);
      if (index < 0) return false;

      inputs.value.splice(index, 1);
      emit("unselected", input.id, props.data);
      if (!props.data.multiple) {
        newItem();
      }
    };

    const newItem = () => {
      const obj = {
        id: uuidv4(),
        input: null,
        progress: {
          size: {
            total: 0,
            loaded: 0,
          },
          percentage: 0,
        },
        path: "",
        url: "",
      };
      inputs.value.push(obj);
      emit(
        "newItem",
        {
          id: obj.id,
          value: null,
          progress: {
            size: {
              total: 0,
              loaded: 0,
            },
            percentage: 0,
          },
          path: "",
          url: "",
        },
        props.data
      );
    };

    const readSrcFromFile = (file, imgElement) => {
      if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
          imgElement.src = e.target.result;
        };

        reader.readAsDataURL(file);
      }
    };

    watch(props.data.value, (items) => {
      for (const item of items) {
        const index = inputs.value.findIndex((i) => i.id === item.id);
        if (index < 0) {
          inputs.value.unshift({
            id: item.id,
            input: null,
            progress: item.progress,
            path: item.path,
            url: item.url,
          });
        }
      }
    });

    return {
      getItemById,
      select,
      unselect,
      inputs,
    };
  },
};
</script>

<style lang="scss" scoped >
@import "./style.scss";
</style>
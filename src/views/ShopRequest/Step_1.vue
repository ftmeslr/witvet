<template>
  <div class="footprints_main">
    <div class="footprint footprint--1">
      <img src="@/assets/images/footprint.svg" />
    </div>
    <div class="footprint footprint--2">
      <img src="@/assets/images/footprint.svg" />
    </div>
    <div class="footprint footprint--3">
      <img src="@/assets/images/footprint.svg" />
    </div>
  </div>
  <div class="auth-wrapper">
    <div class="skin">
      <img src="@/assets/images/skin.svg" alt="" />
    </div>
    <div class="container">
      <router-link :to="{ name: 'home' }" class="logo">
        <img src="@/assets/images/WitVet.svg" alt="witvet's logo" />
      </router-link>
      <h1 class="title">Shop Request</h1>
      <p class="sub_title">Detail</p>

      <div class="form">
        <WvSelectList
          title="Country"
          buttonTitle="Select a country"
          :options="countries"
          :data="form.country_id"
          :defaultValue="country_title"
          @updateValue="(data) => (form.country_id.value = data)"
        ></WvSelectList>
        <WvSelectList
          title="City"
          buttonTitle="Select a city"
          :options="cities"
          :data="form.city_id"
          :defaultValue="city_title"
          @updateValue="(data) => (form.city_id.value = data)"
        />
        <WvTextBox
          title="Shop Name"
          icon="images/shop.svg"
          placeholder="Shop Name"
          :data="form.shop_name"
          :defaultValue="shop_name"
          @updateValue="(data) => (shop_name = data)"
        ></WvTextBox>
        <div class="item textarea">
          <span class="title">Your message</span>
          <div class="input-box">
            <span class="icon">
              <img src="@/assets/images/pen-icon.svg" alt="pen icon" />
            </span>
            <textarea
              rows="5"
              type="text"
              placeholder="Your message"
              class="input"
              v-model="description"
            ></textarea>
          </div>
          <span class="error">
            {{ form.description.errors[0] }}
          </span>
        </div>

        <WvFileUpload
          :data="form.images"
          :defaultItem="images"
          @selected="selected"
          @unselected="unselected"
          @newItem="newItem"
          title="photos"
        ></WvFileUpload>
      </div>
      <a class="btn btn__submit" @click.prevent="submit()">
        Next
        <svg
          width="17"
          height="12"
          viewBox="0 0 17 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5001 5.99994H1.50012"
            stroke="#563746"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.5001 11L15.5001 6"
            stroke="#563746"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.5001 0.999939L15.5001 5.99994"
            stroke="#563746"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.req__left-underline {
  position: absolute;
  top: 49px;
  width: 260px;
}
.login {
  margin-top: -30px;
}
</style>

<script>
import { onMounted } from "@vue/runtime-core";
import WvFileUpload from "@/components/FileUpload";
import WvSelectList from "@/components/SelectList";
import { reactive, ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import WvTextBox from "@/components/TextBox";
import router from "../../router";
import { AddImage, shopValidation } from "@/api/landing/landing.api";
import { notify } from "@kyvg/vue3-notification";
import { computed } from "vue";
import { useStore } from "vuex";
import { GetCounteries, GetCitiesOfCountry } from "@/api/countries.api";

export default {
  components: {
    WvFileUpload,
    WvTextBox,
    WvSelectList,
  },

  mounted() {
    document.querySelector(".witvet-wrapper").classList.remove("isLoading");
  },

  setup() {
    const countries = ref([]);
    const cities = ref([]);
    const store = useStore();
    const form = reactive({
      country: {
        value: "",
        errors: [],
      },
      city: {
        value: "",
        errors: [],
      },
      shop_name: {
        value: "",
        errors: [],
      },
      description: {
        value: "",
        errors: [],
      },
      country_id: {
        value: "",
        errors: [],
      },
      city_id: {
        value: "",
        errors: [],
      },

      images: {
        value: [
          {
            id: +Date.now(),
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
        ],
        errors: [],
      },
    });

    let country_id = computed({
      get() {
        return store.state.user.country_id;
      },
      set(value) {
        store.commit("updateCountry", value);
      },
    });
    let city_id = computed({
      get() {
        return store.state.user.city_id;
      },
      set(value) {
        store.commit("updateCity", value);
      },
    });
    let shop_name = computed({
      get() {
        return store.state.user.shop_name;
      },
      set(value) {
        store.commit("updateName", value);
      },
    });
    let description = computed({
      get() {
        return store.state.user.description;
      },
      set(value) {
        store.commit("updateDescription", value);
      },
    });
    let images = computed({
      get() {
        return store.state.user.cover;
      },
      set(value) {
        store.commit("updateImg", value);
      },
    });
    let country_title = computed({
      get() {
        return store.state.user.country_title;
      },
      set(value) {
        store.commit("updateCountry_title", value);
      },
    });
    let city_title = computed({
      get() {
        return store.state.user.city_title;
      },
      set(value) {
        store.commit("updateCity_title", value);
      },
    });
    const selected = (id, file) => {
      const index = form.images.value.findIndex((i) => i.id === id);
      if (index < 0) return false;

      form.images.value[index].value = file;
    };
    const unselected = (id) => {
      const index = form.images.value.findIndex((i) => i.id === id);
      if (index < 0) return false;

      form.images.value.splice(index, 1);

      store.commit("updateImg", "");
    };
    const newItem = (item) => {
      form.images.value.push(item);
    };
    onMounted(() => {
      document.querySelector(".witvet-wrapper").classList.remove("isLoading");
    });

    const uploadImages = async () => {
      const promises = [];

      for (const item of form.images.value.filter((i) => i.value)) {
        const promise = AddImage(
          {
            image: item.value,
          },
          item.progress
        );

        promise.then((value) => {
          if (value.data.success && value.data.data.url) {
            item.url = value.data.data.url;
            item.path = value.data.data.path;
            store.commit("updateImg", item.url);
          } else {
            notify({
              type: "error",
              text: "Can't set image URL.",
            });
          }
        });

        promises.push(promise);
      }

      const results = await Promise.all(promises);
      if (results.filter((i) => !i.data.success).length > 0) {
        notify({
          type: "error",
          text: "Can't upload image.",
        });
      } else {
        notify({
          type: "success",
          text: "Image successfully uploaded.",
        });
      }
    };
    const submit = async () => {
      if (!validate()) return false;
      uploadImages();
      nextStep();
    };
    const getCitiesOfCountry = async (id) => {
      form.disabled = true;

      const response = await GetCitiesOfCountry(id);
      if (response.data.success) {
        form.disabled = false;
        return response.data.data.map((i) => {
          return { title: i.name, value: i.id };
        });
      } else if (response.data.message) {
        notify({
          type: "error",
          text: "Can't fetch cities!",
        });
      }
      form.disabled = false;
    };
    const getCountries = async () => {
      form.disabled = true;

      const response = await GetCounteries();
      if (response.data.success) {
        countries.value = response.data.data.map((i) => {
          return { title: i.name, value: i.id };
        });
      } else if (response.data.message) {
        notify({
          type: "error",
          text: "Can't fetch countries!",
        });
      }
      form.disabled = false;
    };
    watch(form.country_id, async (val) => {
      if (val.value) {
        store.commit("updateCountry", val.value.value);
        store.commit("updateCountry_title", val.value.title);
        store.commit("updateCity", "");
        store.commit("updateCity_title", "");
        const _cities = await getCitiesOfCountry(val.value.value);
        if (_cities && _cities.length > 0) {
          cities.value = _cities;

          return true;
        }
        cities.value = [];
      }

      cities.value = [];
    });
    watch(form.city_id, async (val) => {
      if (val.value) {
        store.commit("updateCity", val.value.value);
        store.commit("updateCity_title", val.value.title);
        console.log("sd");
        console.log(val.value.value);
      }
    });
    const validate = () => {
      let isValid = true;
      if (!country_id.value) {
        isValid = false;
        form.country_id.errors.push("The country can't be empty");
      } else {
        form.country_id.errors = [];
      }
      if (!city_id.value) {
        isValid = false;
        form.city_id.errors.push("The city can't be empty");
      } else {
        form.city_id.errors = [];
      }
      if (shop_name.value.length < 6) {
        isValid = false;
        form.shop_name.errors.push(
          "The shop name must be more than 6 characters."
        );
      } else {
        form.shop_name.errors = [];
      }

      if (description.value.length < 6) {
        isValid = false;
        form.description.errors.push(
          "The description must be more than 6 characters."
        );
      } else {
        form.description.errors = [];
      }
      if (form.images.value.filter((i) => i.value).length < 1) {
        isValid = false;
        form.images.errors.push("Please select at image.");
      } else {
        form.images.errors = [];
      }

      return isValid;
    };

    const nextStep = async () => {
      console.log(shop_name.value);
      const response = await shopValidation(
        shop_name.value,
        country_id.value,
        city_id.value,
        description.value
      );

      if (response.data.success) {
        router.push("/shop-request/2");
      } else {
        notify({
          type: "error",
          text: response.data.message,
        });
      }
    };

    getCountries();

    return {
      countries,
      cities,
      selected,
      unselected,
      newItem,
      form,
      uploadImages,
      submit,
      country_id,
      shop_name,
      city_id,
      description,
      images,
      country_title,
      city_title,
      nextStep,
    };
  },
};
</script>
<style lang="scss">
@import "./style.scss";
</style>

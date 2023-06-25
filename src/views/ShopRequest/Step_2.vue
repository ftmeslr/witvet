<template>
  <div class="footprints_main">
    <div class="footprint footprint--1">
      <img src="@/assets/images/footprint.svg" />
    </div>
    <div class="footprint footprint_main--1">
      <img src="@/assets/images/footprint.svg" />
    </div>
    <div class="footprint footprint_main--2">
      <img src="@/assets/images/footprint.svg" />
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
        <p class="sub_title">Owner Information</p>
        <div class="form" autocomplete="off">
          <WvTextBox
            title="Owner Name"
            icon="images/profile.svg"
            placeholder="Owner name"
            :data="form.name_owner"
            :defaultValue="name_owner"
            @updateValue="(data) => (name_owner = data)"
          ></WvTextBox>
          <WvTextBox
            title="Phone Number"
            icon="images/mobile.svg"
            placeholder="Phone number"
            :data="form.phone_owner"
            :defaultValue="phone_owner"
            @updateValue="(data) => (phone_owner = data)"
          ></WvTextBox>
          <WvTextBox
            title="Email"
            icon="images/email_icon.svg"
            placeholder="Email"
            :data="form.email_owner"
            :defaultValue="email_owner"
            @updateValue="(data) => (email_owner = data)"
          ></WvTextBox>
          <WvPassword
            title="password"
            icon="images/pass.svg"
            placeholder="password"
            :data="form.password"
            :defaultValue="password"
            @updateValue="(data) => (password = data)"
          ></WvPassword>
          <WvPassword
            title="Repeat Password"
            icon="images/pass.svg"
            placeholder="password"
            :data="form.re_password"
            :defaultValue="form.re_password.value"
            @updateValue="(data) => (form.re_password.value = data)"
          ></WvPassword>
          <h3 class="login__title--subtitle no-margin">Add Id Card</h3>
          <WvFileUpload
            :data="form.images"
            @selected="selected"
            @unselected="unselected"
            @newItem="newItem"
            :defaultItem="idCardImg"
          ></WvFileUpload>
        </div>

        <a class="btn btn__submit" @click.prevent="submit">
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
  </div>
</template>
<style>
.req__left-underline {
  position: absolute;
  top: 49px;
  width: 260px;
}
</style>
<script>
import { onMounted } from "@vue/runtime-core";
import WvFileUpload from "@/components/FileUpload";
import WvTextBox from "@/components/TextBox";
import WvPassword from "@/components/Password";
import { reactive } from "@vue/reactivity";
import { useStore } from "vuex";
import { computed } from "vue";
import router from "../../router";
import { notify } from "@kyvg/vue3-notification";
import { AddImage, shopValidationStep2 } from "@/api/landing/landing.api";

export default {
  components: {
    WvFileUpload,
    WvTextBox,
    WvPassword,
  },

  setup() {
    const store = useStore();
    const form = reactive({
      name_owner: {
        value: "",
        errors: [],
      },

      phone_owner: {
        value: "",
        errors: [],
      },
      email_owner: {
        value: "",
        errors: [],
      },
      password: {
        value: "",
        errors: [],
      },
      re_password: { value: "", errors: [] },

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
    let name_owner = computed({
      get() {
        return store.state.user.name_owner;
      },
      set(value) {
        store.commit("updateOwnerName", value);
      },
    });
    let phone_owner = computed({
      get() {
        return store.state.user.phone_owner;
      },
      set(value) {
        store.commit("updatePhone", value);
      },
    });
    let email_owner = computed({
      get() {
        return store.state.user.email_owner;
      },
      set(value) {
        store.commit("updateEmail", value);
      },
    });
    let password = computed({
      get() {
        return store.state.user.password;
      },
      set(value) {
        store.commit("updatePassword", value);
      },
    });
    let idCardImg = computed({
      get() {
        return store.state.user.auth_image;
      },
      set(value) {
        store.commit("updateAuth_image", value);
      },
    });
    const submit = async () => {
      if (!validate()) return false;
      uploadImages();
      nextStep();
    };
    const selected = (id, file) => {
      const index = form.images.value.findIndex((i) => i.id === id);
      if (index < 0) return false;

      form.images.value[index].value = file;
    };
    const unselected = (id) => {
      const index = form.images.value.findIndex((i) => i.id === id);
      if (index < 0) return false;

      form.images.value.splice(index, 1);
      store.commit("updateAuth_image", "");
    };
    const newItem = (item) => {
      form.images.value.push(item);
    };
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
            store.commit("updateAuth_image", item.url);
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
    onMounted(() => {
      document.querySelector(".witvet-wrapper").classList.remove("isLoading");
    });

    const validate = () => {
      let isValid = true;
      if (!name_owner.value) {
        isValid = false;
        form.name_owner.errors.push("The owner name can't be empty");
      } else {
        form.name_owner.errors = [];
      }
      if (!phone_owner.value) {
        isValid = false;
        form.phone_owner.errors.push("The phone number can't be empty");
      } else {
        form.phone_owner.errors = [];
      }
      if (!email_owner.value) {
        isValid = false;
        form.email_owner.errors.push("The email can't be empty");
      } else {
        form.email_owner.errors = [];
      }
      if (password.value.length < 8) {
        isValid = false;
        form.password.errors.push("password must be more than 8 characters");
      } else {
        form.password.errors = [];
      }
      if (form.re_password.value != password.value) {
        isValid = false;
        console.log(form.re_password.value);
        console.log(password.value);
        form.re_password.errors.push(
          "Password and Repeat password are not the same"
        );
      } else {
        form.re_password.errors = [];
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
      const response = await shopValidationStep2(
        name_owner.value,
        phone_owner.value,
        email_owner.value,
        password.value
      );

      if (response.data.success) {
        router.push("/shop-request/3");
      } else {
        notify({
          type: "error",
          text: response.data.message,
        });
      }
    };
    return {
      form,
      name_owner,
      phone_owner,
      email_owner,
      password,
      submit,
      newItem,
      unselected,
      selected,
      idCardImg,
      nextStep,
    };
  },
};
</script>

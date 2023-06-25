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
      <p class="sub_title">Payment Information</p>
      <div class="form">
        <WvTextBox
          title="Bank Card"
          icon="images/bank-card.svg"
          placeholder="bank Card"
          :data="form.idCard"
          :defaultValue="card"
          @updateValue="(data) => (card = data)"
        ></WvTextBox>
        <a class="btn btn__submit" @click.prevent="submit">
          Send Request

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

<style scoped>
.btn__submit {
  width: 175px;
  margin-top: 26px;
}
</style>

<script>
import { onMounted } from "@vue/runtime-core";
import WvTextBox from "@/components/TextBox";
import { reactive } from "@vue/reactivity";
import { useStore } from "vuex";
import { computed } from "vue";
import router from "../../router";
import { notify } from "@kyvg/vue3-notification";
import { createShopReq } from "@/api/landing/landing.api";

export default {
  components: {
    WvTextBox,
  },

  setup() {
    const store = useStore();
    const form = reactive({
      idCard: {
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
        multiple: true,
        errors: [],
      },
    });
    const request = reactive({
      shop: {
        value: store.state.user,
      },
    });
    let card = computed({
      get() {
        return store.state.user.card;
      },
      set(value) {
        store.commit("updateBankCard", value);
      },
    });

    const submit = async () => {
      if (!validate()) return false;
      const response = await createShopReq(request.shop.value);

      if (response.data.success) {
        notify({
          type: "success",
          text: "shop successfully created.",
        });
        router.push("/shop-request/4");
      } else {
        notify({
          type: "error",
          text: response.data.message,
        });
      }
    };

    onMounted(() => {
      document.querySelector(".witvet-wrapper").classList.remove("isLoading");
    });

    const validate = () => {
      let isValid = true;
      if (!card.value) {
        isValid = false;
        form.idCard.errors.push("The id card can't be empty");
      } else {
        form.idCard.errors = [];
      }
      return isValid;
    };

    return { form, card, submit, request };
  },
};
</script>

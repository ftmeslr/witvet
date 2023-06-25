<template>
  <div class="blur_back" v-if="active"></div>
  <header class="navbar">
    <div class="navbar__inner">
      <router-link :to="{ name: 'home' }" class="logo">
        <img src="@/assets/images/WitVet.svg" alt="witvet's logo" />
      </router-link>
      <a
        class="navbar__but"
        href="#"
        @click.prevent="navbar__open()"
        v-if="!active"
      >
        <img src="@/assets/images/navbar.svg" alt="" />
      </a>
      <div class="primary-menu">
        <router-link :to="{ name: 'home' }" class="item"> Home </router-link>
        <router-link :to="{ name: 'app' }" class="item"> App </router-link>
        <router-link :to="{ name: 'faq' }" class="item"> Faq </router-link>
      </div>
      <div class="secondary-menu">
        <router-link :to="{ name: 'step_1' }" class="add-shop-button">
          <span class="icon">
            <img src="@/assets/images/add-shop.svg" alt="" />
          </span>
          <span class="text"> Add Shop </span>
        </router-link>
        <a href="https://my.witvet.pet/" class="account-button">
          <span class="text">
            <template v-if="!loggedIn">Login</template>
            <template v-else>Account</template>
          </span>
        </a>
      </div>
      <div v-if="active" class="navbar__responsive">
        <a
          class="navbar__but--close"
          href="#"
          @click.prevent="navbar__close()"
          v-if="active"
        >
          <img src="@/assets/images/close.svg" alt="" />
        </a>
        <div class="menu">
          <div class="primary-menu--responsive">
            <router-link :to="{ name: 'home' }" class="item">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.8367 8.8012L13.8367 4.1342C12.7537 3.2912 11.2367 3.2912 10.1527 4.1342L4.15269 8.8012C3.42169 9.3692 2.99469 10.2432 2.99469 11.1692V18.5022C2.99469 20.1592 4.33769 21.5022 5.99469 21.5022H17.9947C19.6517 21.5022 20.9947 20.1592 20.9947 18.5022V11.1692C20.9947 10.2432 20.5677 9.3692 19.8367 8.8012Z"
                  stroke="#4AAAC5"
                  stroke-width="2"
                />
                <path
                  d="M15.9884 14.7383C13.7784 16.9483 10.1964 16.9483 7.9884 14.7383"
                  stroke="#4AAAC5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Home
            </router-link>
            <router-link :to="{ name: 'app' }" class="item"
              ><svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 10.5L12 13.5L9 10.5"
                  stroke="#563746"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 3.5V13.5"
                  stroke="#563746"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 16.5H16"
                  stroke="#563746"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.0711 5.42864C18.6806 5.03811 18.0474 5.03811 17.6569 5.42864C17.2664 5.81916 17.2664 6.45232 17.6569 6.84285L19.0711 5.42864ZM6.34311 6.84285C6.73364 6.45232 6.73364 5.81916 6.34311 5.42864C5.95259 5.03811 5.31942 5.03811 4.9289 5.42864L6.34311 6.84285ZM17.6569 6.84285C20.7814 9.96732 20.7814 15.0322 17.6569 18.1566L19.0711 19.5708C22.9766 15.6653 22.9766 9.33416 19.0711 5.42864L17.6569 6.84285ZM17.6569 18.1566C14.5324 21.2811 9.46759 21.2811 6.34311 18.1566L4.9289 19.5708C8.83442 23.4764 15.1656 23.4764 19.0711 19.5708L17.6569 18.1566ZM6.34311 18.1566C3.21864 15.0322 3.21864 9.96732 6.34311 6.84285L4.9289 5.42864C1.02337 9.33416 1.02337 15.6653 4.9289 19.5708L6.34311 18.1566Z"
                  fill="#563746"
                />
              </svg>
              App
            </router-link>
            <router-link :to="{ name: 'about' }" class="item"
              ><svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 21.5V21.5C7.029 21.5 3 17.471 3 12.5V12.5C3 7.529 7.029 3.5 12 3.5V3.5C16.971 3.5 21 7.529 21 12.5V12.5C21 17.471 16.971 21.5 12 21.5Z"
                  stroke="#563746"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.999 8.5C11.861 8.5 11.749 8.612 11.75 8.75C11.75 8.888 11.862 9 12 9C12.138 9 12.25 8.888 12.25 8.75C12.25 8.612 12.138 8.5 11.999 8.5"
                  stroke="#563746"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 12.5V17.5"
                  stroke="#563746"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              About us
            </router-link>
            <router-link :to="{ name: 'faq' }" class="item"
              ><svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0054 21.4416C12.6735 21.4827 12.3394 21.5036 12.005 21.5036C7.03234 21.5036 3.00122 17.4725 3.00122 12.4998C3.00122 7.52721 7.03234 3.49609 12.005 3.49609C16.9776 3.49609 21.0087 7.52721 21.0087 12.4998C21.0087 12.8343 20.9878 13.1684 20.9467 13.5003"
                  stroke="#563746"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.0083 17.502L17.5073 20.003L16.0067 18.5024"
                  stroke="#563746"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.005 13.2117L13.3326 12.4742C13.9951 12.1062 14.406 11.4079 14.406 10.65C14.3275 9.38966 13.2467 8.42889 11.9858 8.49869C10.8593 8.45192 9.85885 9.21348 9.604 10.3119"
                  stroke="#563746"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.1052 16.4017C12.1051 16.4569 12.0603 16.5016 12.0051 16.5016C11.9499 16.5016 11.9051 16.4568 11.9051 16.4016C11.9051 16.3464 11.9498 16.3016 12.005 16.3015C12.0316 16.3015 12.0571 16.312 12.0759 16.3308C12.0947 16.3496 12.1052 16.3751 12.1052 16.4017"
                  stroke="#563746"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Faq
            </router-link>
            <router-link :to="{ name: 'contact' }" class="item">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.50223 12.7506C5.51274 11.3719 6.6371 10.2616 8.01588 10.2686C9.39467 10.2756 10.5077 11.3971 10.5043 12.7759C10.5008 14.1547 9.38211 15.2707 8.00331 15.2707C7.33718 15.2691 6.69907 15.0025 6.22983 14.5297C5.76059 14.0569 5.49881 13.4167 5.50223 12.7506V12.7506Z"
                  stroke="#563746"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.0064 10.2491C13.9051 10.2486 13.8135 10.3092 13.7744 10.4026C13.7352 10.496 13.7563 10.6038 13.8277 10.6756C13.8991 10.7474 14.0068 10.7691 14.1004 10.7304C14.1941 10.6918 14.2551 10.6005 14.2551 10.4992C14.2556 10.433 14.2296 10.3693 14.1829 10.3223C14.1362 10.2753 14.0726 10.249 14.0064 10.2491"
                  stroke="#563746"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.1188 10.2491C17.0175 10.2486 16.9259 10.3092 16.8868 10.4026C16.8476 10.496 16.8687 10.6038 16.9401 10.6756C17.0116 10.7474 17.1192 10.7691 17.2129 10.7304C17.3065 10.6918 17.3676 10.6005 17.3676 10.4992C17.3681 10.433 17.3421 10.3693 17.2953 10.3223C17.2486 10.2753 17.1851 10.249 17.1188 10.2491"
                  stroke="#563746"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.00122 20.8783V20.253C3.00526 18.8734 4.12265 17.756 5.50226 17.752H10.5043C11.884 17.756 13.0013 18.8734 13.0054 20.253V20.8783C13.0044 21.2232 12.725 21.5025 12.3801 21.5035H3.62648C3.28158 21.5025 3.00223 21.2232 3.00122 20.8783V20.8783Z"
                  stroke="#563746"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.28021 6.498C10.0373 3.98305 13.2281 2.90662 16.1496 3.84326C19.071 4.7799 21.0411 7.51097 21.0083 10.5787C20.9755 13.6465 18.9475 16.3348 16.0066 17.2088"
                  stroke="#563746"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              Contact Us
            </router-link>
          </div>
          <div class="secondary-menu secondary-menu--responsive">
            <router-link :to="{ name: 'step_1' }" class="add-shop-button">
              <span class="icon">
                <img src="@/assets/images/icons/add_shop_2.svg" alt="" />
              </span>
              <span class="text"> Add Shop </span>
            </router-link>
            <a href="https://my.witvet.pet/" class="account-button">
              <span class="text">
                <template v-if="!loggedIn">Login</template>
                <template v-else>Account</template>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from "@vue/reactivity";
import { inject, onMounted } from "@vue/runtime-core";
export default {
  name: "WvNavbar",
  setup() {
    const active = ref(false);
    const loggedIn = ref(false);
    const navbar__close = () => {
      active.value = !active.value;
    };
    const navbar__open = () => {
      active.value = true;
      console.log(active);
    };

    onMounted(() => {
      const cookies = inject("$cookies");

      if (cookies.get("wv.access_token")) {
        loggedIn.value = true;
      } else {
        loggedIn.value = false;
      }
    });

    return {
      active,
      loggedIn,
      navbar__close,
      navbar__open,
    };
  },
};
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>

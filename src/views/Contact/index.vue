<template>
  <WvNavbar />
  <div class="patterns">
    <img class="pattern_1" src="@/assets/images/pattern.svg" alt="" />
    <img class="foot_print" src="@/assets/images/dog_foot.svg" alt="" />
    <img class="foot_print-2" src="@/assets/images/dog_foot.svg" alt="" />
    <img class="foot_print-3" src="@/assets/images/dog_foot.svg" alt="" />
    <img class="foot_print-4" src="@/assets/images/dog_foot.svg" alt="" />
    <img class="foot_print-5" src="@/assets/images/dog_foot.svg" alt="" />
  </div>
  <div class="page-wrapper contact-page">
    <div class="primary-part">
      <div class="page-title">
        <span class="title-underline">
          <img
            src="@/assets/images/contact_underline.svg"
            alt="underline arc"
          />
        </span>
        <p class="text">{{ title }}</p>
      </div>
      <div class="page-description" v-html="description"></div>

      <div class="contact-form">
        <div class="item">
          <span class="title">Name</span>
          <div class="input-box">
            <span class="icon">
              <img src="@/assets/images/user-icon.svg" alt="user icon" />
            </span>
            <input
              type="text"
              placeholder="Your name"
              class="input"
              v-model="username"
            />
          </div>
        </div>
        <div class="item">
          <span class="title">Email</span>
          <div class="input-box">
            <span class="icon">
              <img src="@/assets/images/email-icon.svg" alt="email icon" />
            </span>
            <input
              type="text"
              placeholder="Your email"
              class="input"
              v-model="email"
            />
          </div>
        </div>
        <div class="item">
          <span class="title">Phone number</span>
          <div class="input-box">
            <span class="icon">
              <img src="@/assets/images/mobile-icon.svg" alt="mobile icon" />
            </span>
            <input
              type="text"
              placeholder="Your phone number"
              class="input"
              v-model="phone"
            />
          </div>
        </div>
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
              v-model="message"
            ></textarea>
          </div>
        </div>
        <div class="item">
          <button type="submit" class="send-button" @click="sendContact()">
            <span class="text">Send</span>
            <span class="icon">
              <img src="@/assets/images/send-icon.svg" alt="send icon" />
            </span>
          </button>
        </div>
      </div>
    </div>
    <div class="secondary-part">
      <img src="@/assets/images/contact.png" alt="Contact Us Art" />
    </div>
  </div>

  <WvFooter />
</template>

<script>
import { getContactUs, contactUs } from "@/api/landing/landing.api";
import { notify } from "@kyvg/vue3-notification";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

export default {
  setup() {
    const title = ref("");
    const description = ref("");
    const username = ref("");
    const email = ref("");
    const phone = ref("");
    const message = ref("");

    const showConatctUs = () => {
      getContactUs().then((data) => {
        title.value = data.page.title;
        description.value = data.page.description;
        document.querySelector(".witvet-wrapper").classList.remove("isLoading");
      });
    };

    const sendContact = async () => {
      const response = await contactUs(
        username.value,
        email.value,
        phone.value,
        message.value
      );
      if (response.data.success) {
        notify({
          type: "success",
          text: "Your message successfully sent.",
        });

        username.value = "";
        email.value = "";
        phone.value = "";
        message.value = "";
      } else if (response.data.message) {
        notify({
          type: "error",
          text: response.data.message,
        });
      } else {
        notify({
          type: "error",
          text: "We have some problems!",
        });
      }
    };

    onMounted(() => {
      showConatctUs();
    });

    return {
      title,
      description,
      username,
      email,
      phone,
      message,
      sendContact,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>

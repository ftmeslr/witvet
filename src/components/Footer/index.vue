<template>
  <div class="footer container">
    <div class="footer__line"></div>
    <div class="footer__items">
      <div class="footer__item-one">
        <p class="footer__title">WitVet Application</p>
        <p class="footer__sub-title">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to
        </p>
      </div>
      <div class="footer__item-two">
        <p class="footer__title">App</p>
        <a :href="ios" class="footer__subtitle-box">
          <div class="footer__icon">
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.09316 1.15702C7.69741 -0.504224 10.4984 0.194142 11.135 2.41408L13.0446 9.07389C13.6812 11.2938 11.6759 13.3704 9.43509 12.8117L2.71269 11.1356C0.471883 10.5769 -0.323817 7.80199 1.28043 6.14075L6.09316 1.15702Z"
                fill="#ADA9A0"
              />
            </svg>
          </div>
          <div class="footer__title-hover"></div>

          <p class="footer__subtitle">Ios</p>
        </a>
        <a :href="android" class="footer__subtitle-box">
          <div class="footer__icon">
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.09316 1.15702C7.69741 -0.504224 10.4984 0.194142 11.135 2.41408L13.0446 9.07389C13.6812 11.2938 11.6759 13.3704 9.43509 12.8117L2.71269 11.1356C0.471883 10.5769 -0.323817 7.80199 1.28043 6.14075L6.09316 1.15702Z"
                fill="#ADA9A0"
              />
            </svg>
          </div>
          <div class="footer__title-hover"></div>
          <p class="footer__subtitle">Android</p>
        </a>
      </div>
      <div class="footer__item-three">
        <p class="footer__title">Company</p>

        <router-link to="about" class="footer__subtitle-box">
          <div class="footer__icon">
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.09316 1.15702C7.69741 -0.504224 10.4984 0.194142 11.135 2.41408L13.0446 9.07389C13.6812 11.2938 11.6759 13.3704 9.43509 12.8117L2.71269 11.1356C0.471883 10.5769 -0.323817 7.80199 1.28043 6.14075L6.09316 1.15702Z"
                fill="#ADA9A0"
              />
            </svg>
          </div>
          <div class="footer__title-hover"></div>
          <p class="footer__subtitle">About Us</p>
        </router-link>
        <router-link to="contact" class="footer__subtitle-box">
          <div class="footer__icon">
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.09316 1.15702C7.69741 -0.504224 10.4984 0.194142 11.135 2.41408L13.0446 9.07389C13.6812 11.2938 11.6759 13.3704 9.43509 12.8117L2.71269 11.1356C0.471883 10.5769 -0.323817 7.80199 1.28043 6.14075L6.09316 1.15702Z"
                fill="#ADA9A0"
              />
            </svg>
          </div>
          <div class="footer__title-hover"></div>
          <p class="footer__subtitle">Contact Us</p>
        </router-link>
        <router-link to="/faq" class="footer__subtitle-box">
          <div class="footer__icon">
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.09316 1.15702C7.69741 -0.504224 10.4984 0.194142 11.135 2.41408L13.0446 9.07389C13.6812 11.2938 11.6759 13.3704 9.43509 12.8117L2.71269 11.1356C0.471883 10.5769 -0.323817 7.80199 1.28043 6.14075L6.09316 1.15702Z"
                fill="#ADA9A0"
              />
            </svg>
          </div>
          <div class="footer__title-hover"></div>
          <p class="footer__subtitle">FAQ</p>
        </router-link>
        <router-link to="/app" class="footer__subtitle-box">
          <div class="footer__icon">
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.09316 1.15702C7.69741 -0.504224 10.4984 0.194142 11.135 2.41408L13.0446 9.07389C13.6812 11.2938 11.6759 13.3704 9.43509 12.8117L2.71269 11.1356C0.471883 10.5769 -0.323817 7.80199 1.28043 6.14075L6.09316 1.15702Z"
                fill="#ADA9A0"
              />
            </svg>
          </div>
          <div class="footer__title-hover"></div>
          <p class="footer__subtitle">Apps</p>
        </router-link>
      </div>
      <div class="footer__item-four">
        <div class="footprint footprint--8">
          <img src="@/assets/images/footprint.svg" />
        </div>
        <div class="footprint footprint--7">
          <img src="@/assets/images/footprint.svg" />
        </div>
        <router-link :to="{ name: 'app' }" class="get-app-button">
          <span class="icon">
            <img src="@/assets/images/download-icon-1.svg" alt="" />
          </span>
          <span class="text">Get WitVet</span>
        </router-link>
        <div class="social">
          <a :href="twitter" class="social__item">
            <img src="@/assets/images/twitter.svg" />
          </a>
          <a :href="facebook" class="social__item">
            <img src="@/assets/images/facebook.svg" />
          </a>
          <a :href="instagram" class="social__item">
            <img src="@/assets/images/instagram.svg" />
          </a>
        </div>
      </div>
    </div>
    <div class="footprint footprint--5">
      <img src="@/assets/images/footprint.svg" />
    </div>
  </div>
</template>

<script>
import { socialLink, appUrls } from "@/api/landing/landing.api";

export default {
  name: "WvFooter",
  data() {
    return {
      twitter: "",
      instagram: "",
      facebook: "",
      ios: "",
      android: "",
    };
  },
  methods: {
    getSocialLink() {
      socialLink().then((data) => {
        this.twitter = data.twitter;
        this.instagram = data.instagram;
        this.facebook = data.facebook;
      });
      appUrls().then((data) => {
        this.ios = data.link_app_ios;
        this.android = data.link_app_android;
      });
    },
  },

  created() {
    this.getSocialLink();
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>

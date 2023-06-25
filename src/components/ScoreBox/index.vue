<template>
  <div class="score">
    <div class="score__images">
      <img :src="img" />
    </div>
    <div class="score__detils">
      <div class="stars">
        <div class="star__imagess">
          <img class="star__images" src="@/assets/images/star-transparent.svg" />
        </div>
        <div class="star__imagess">
          <img class="star__images" src="@/assets/images/star-transparent.svg" />
        </div>
        <div class="star__imagess">
          <img class="star__images" src="@/assets/images/star-transparent.svg" />
        </div>
        <div class="star__imagess">
          <img class="star__images" src="@/assets/images/star-transparent.svg" />
        </div>
        <div class="star__imagess">
          <img class="star__images" src="@/assets/images/star-transparent.svg" />
        </div>
      </div>
      <div class="stars stars_color" :style="{ width: rate * 7 + '%' }">
        <div class="star__imagess">
          <img class="star__images" src="@/assets/images/star.svg" />
        </div>
        <div class="star__imagess">
          <img class="star__images" src="@/assets/images/star.svg" />
        </div>
        <div class="star__imagess">
          <img class="star__images" src="@/assets/images/star.svg" />
        </div>
        <div class="star__imagess">
          <img class="star__images" src="@/assets/images/star.svg" />
        </div>
        <div class="star__imagess">
          <img class="star__images" src="@/assets/images/star.svg" />
        </div>
      </div>
      <p class="score__detils-name">{{ title }}</p>

      <div class="score__detils-details">
        <div class="score__detils-detail">
          <div class="star__imagess">
            <img
              class="score__detils-detail-img"
              src="@/assets/images/location.svg"
            />
          </div>
          <p>2.4 <span>km</span></p>
        </div>
        <div class="score__detils-detail">
          <div class="star__imagess">
            <img
              class="score__detils-detail-img"
              src="@/assets/images/clock.svg"
            />
          </div>
          <p>16 <span>min</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: "../assets/images/score_user.svg",
    },
    title: {
      type: String,
      default: "Dr.Silvana",
    },
    rate: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>

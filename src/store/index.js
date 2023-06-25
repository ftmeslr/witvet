import { createStore } from "vuex";

const getDefaultUser = () => {
  return {
    country_id: "",
    city_id: "",
    shop_name: "",
    description: "",
    cover: "",
    name_owner: "",
    phone_owner: "",
    password: "",
    email_owner: "",
    auth_image: "",
    card: "",
    country_title:"",
    city_title:""
  };
};

export default createStore({
  strict: process.env.NODE_ENV !== "production",
  state: {
    user: getDefaultUser(),
  },
  mutations: {
    resetUserState(state) {
      Object.assign(state.user, getDefaultUser());
    },
    updateCountry(state, payload) {
      state.user.country_id = payload;
    },
    updateCity(state, payload) {
      state.user.city_id = payload;
    },
    updateName(state, payload) {
      state.user.shop_name = payload;

    },
    updateDescription(state, payload) {
      state.user.description = payload;

    },
    updateImg(state, payload) {
      state.user.cover = payload;
    },
    updateOwnerName(state, payload) {
      state.user.name_owner = payload;
    },
    updateEmail(state, payload) {
      state.user.email_owner = payload;
    },
    updatePhone(state, payload) {
      state.user.phone_owner = payload;
    },
    updatePassword(state, payload) {
      state.user.password = payload;
    },
    updateAuth_image(state, payload) {
      state.user.auth_image = payload;
    },
    updateBankCard(state, payload) {
      state.user.card = payload;
    },
    updateCountry_title(state, payload) {
      state.user.country_title = payload;
    },
    updateCity_title(state, payload) {
      state.user.city_title = payload;
    }
  },
  actions: {
    resetUserState({ commit }) {
      commit("resetUserState");
    },
  },
  modules: {},
});

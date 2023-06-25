import { callApi } from "../httpClient";
const base_url = process.env.VUE_APP_API_BASE_URL;

import axios from "axios";

export const getSubTitle = async () => {
  const res = await callApi({
    url: "/api/landing/v1/main",
    method: "get",
  });
  return res.data.data;
};

export const appUrls = async () => {
  const res = await callApi({
    url: "/api/landing/v1/app_urls",
    method: "get",
  });
  return res.data.data;
};

export const socialLink = async () => {
  const res = await callApi({
    url: "/api/landing/v1/social",
    method: "get",
  });
  return res.data.data;
};

export const getFaq = async () => {
  const res = await callApi({
    url: "/api/landing/v1/pages/faq",
    method: "get",
  });
  return res.data.data;
};

export const getAboutUs = async () => {
  const res = await callApi({
    url: "/api/landing/v1/pages/about_us",
    method: "get",
  });
  return res.data.data;
};

export const getContactUs = async () => {
  const res = await callApi({
    url: "/api/landing/v1/pages/contact_us",
    method: "get",
  });
  return res.data.data;
};

export const contactUs = (name, email, phone, message) => {
  return callApi({
    url: "/api/landing/v1/contact_us",
    method: "post",
    data: {
      name,
      email,
      phone,
      message,
    },
  });
};

export const getApp = async () => {
  const res = await callApi({
    url: "/api/landing/v1/pages/app",
    method: "get",
  });
  return res.data.data;
};

export const getFaqQAndA = async () => {
  const res = await callApi({
    url: "/api/landing/v1/faqs",
    method: "get",
  });
  return res.data.data;
};

export const AddImage = (data, progress) => {
  const _data = new FormData();
  _data.append("image", data.image);

  return axios.post(`${base_url}/api/landing/v1/auth/image`, _data, {
    onUploadProgress: function (progressEvent) {
      progress.size.total = progressEvent.total;
      progress.size.loaded = progressEvent.loaded;
      progress.percentage = parseInt(
        Math.round((progressEvent.loaded / progressEvent.total) * 100)
      );
    },
  });
};

export const createShopReq = (data) => {
  return callApi({
    url: "/api/landing/v1/auth/shop_request",
    method: "post",
    data,
  });
};

export const shopValidation = (shop_name, country_id, city_id, description) => {
  return callApi({
    url: "/api/landing/v1/auth/shop_validation",
    method: "post",
    data: {
      shop_name,
      country_id,
      city_id,
      description,
    },
  });
};

export const shopValidationStep2 = (
  name_owner,
  phone_owner,
  email_owner,
  password
) => {
  return callApi({
    url: "/api/landing/v1/auth/shop_validation",
    method: "post",
    data: {
      name_owner,
      phone_owner,
      email_owner,
      password,
    },
  });
};

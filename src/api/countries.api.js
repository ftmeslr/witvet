import { callApi } from "./httpClient";

export const GetCounteries = async () => {
  const res = await callApi({
    url: `/api/landing/v1/auth/countries`,
    method: "get",
  });
  return res;
};

export const GetCitiesOfCountry = async (countryId) => {
  const res = await callApi({
    url: `/api/landing/v1/auth/countries/${countryId}/cities`,
    method: "get",
  });
  return res;
};

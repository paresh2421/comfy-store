import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const currencyFormat = (price) => {
  const currencyAmount = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format((price / 100).toFixed(2));

  return currencyAmount;
};

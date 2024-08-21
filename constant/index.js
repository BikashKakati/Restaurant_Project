import { getPrice } from "../src/utils";

export const sortByOptions = [
    {
      label: "Price low to high",
      value: "lowToHigh",
      method:(a, b) => getPrice(a?.idMeal) - getPrice(b?.idMeal),
    },
    {
      label: "Price high to low",
      value: "highToLow",
      method:(a, b) => getPrice(b?.idMeal) - getPrice(a?.idMeal),
    },
    {
      label: "Name A to Z",
      value: "atoz",
      method:(a, b) => a?.strMeal?.localeCompare(b?.strMeal),
    },
    {
      label: "Name Z to A",
      value: "ztoa",
      method:(a, b) => b?.strMeal?.localeCompare(a?.strMeal),
    },
  ];
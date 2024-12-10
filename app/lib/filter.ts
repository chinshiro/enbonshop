import type { Location, useLocation } from "@remix-run/react";
import type { ProductFilter } from "@shopify/hydrogen/storefront-api-types";
import { FILTER_URL_PREFIX } from "./const";

export type AppliedFilter = {
  label: string;
  filter: ProductFilter;
};

export type SortParam =
  | "price-low-high"
  | "price-high-low"
  | "best-selling"
  | "newest"
  | "featured"
  | "relevance";

export function getAppliedFilterLink(
  { filter }: AppliedFilter,
  params: URLSearchParams,
  location: Location,
) {
  let paramsClone = new URLSearchParams(params);
  for (let [k, v] of Object.entries(filter)) {
    paramsClone.delete(FILTER_URL_PREFIX + k, JSON.stringify(v));
  }
  return `${location.pathname}?${paramsClone.toString()}`;
}

export function getFilterLink(
  rawInput: string | ProductFilter,
  params: URLSearchParams,
  location: ReturnType<typeof useLocation>,
) {
  const paramsClone = new URLSearchParams(params);
  const newParams = filterInputToParams(rawInput, paramsClone);
  return `${location.pathname}?${newParams.toString()}`;
}

export function filterInputToParams(
  rawInput: string | ProductFilter,
  params: URLSearchParams,
) {
  const input =
    typeof rawInput === "string"
      ? (JSON.parse(rawInput) as ProductFilter)
      : rawInput;

  Object.entries(input).forEach(([key, value]) => {
    if (params.has(`${FILTER_URL_PREFIX}${key}`, JSON.stringify(value))) {
      return;
    }
    if (key === "price") {
      // For price, we want to overwrite
      params.set(`${FILTER_URL_PREFIX}${key}`, JSON.stringify(value));
    } else {
      params.append(`${FILTER_URL_PREFIX}${key}`, JSON.stringify(value));
    }
  });

  return params;
}

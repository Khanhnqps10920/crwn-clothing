import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  shop => shop.shopData
);

export const selectShopDataForReview = createSelector(
  [selectShopData],
  shopData => Object.keys(shopData).map(key => shopData[key])
);

export const selectCategory = categoryUrlParam =>
  createSelector([selectShopData], categories => categories[categoryUrlParam]);

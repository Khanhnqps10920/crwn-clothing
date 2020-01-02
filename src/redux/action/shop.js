import actionType from './actionType';

export const updateCollections = collectionMap => ({
  type: actionType.UPDATE_COLLECTION,
  payload: collectionMap
});

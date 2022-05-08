import * as actionTypes from "./types";

export const loadData = (data) => {
  return {
    type: actionTypes.LOAD_DATA,
    payload: data,
  };
};

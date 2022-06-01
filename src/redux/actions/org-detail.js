import {
  ORGANIZATION_DETAILS,
  ORGANIZATION_ERROR,
  ORGANIZATION_LOADING,
  RECORD_DETAILS,
  SET_QUERY_PARAMS,
} from "../../config/action-types";
import * as api from "../../config/api/index.js";

export const setParamsFromURL = (queryParams) => (dispatch) => {
  dispatch({ type: SET_QUERY_PARAMS, payload: queryParams });
  dispatch(getRecordDetailsAPI(queryParams.token, queryParams.instance));
};

export const getOrgDetailsAPI = (instanceName) => async (dispatch) => {
  try {
    dispatch({ type: ORGANIZATION_LOADING });
    const { data } = await api.getOrgDetails(instanceName);
    console.log(data);
    dispatch({ type: ORGANIZATION_DETAILS, payload: data });
  } catch (error) {
    dispatch({ type: ORGANIZATION_ERROR, error: error });
  }
};

export const getRecordDetailsAPI =
  (token, instanceName) => async (dispatch) => {
    try {
      const { data } = await api.getRecordDetails(token, instanceName);
      dispatch({ type: RECORD_DETAILS, payload: data });
    } catch (error) {
      dispatch({ type: ORGANIZATION_ERROR, error: error });
    }
  };

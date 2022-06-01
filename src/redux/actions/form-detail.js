import {
  COMPARE_ERROR,
  COMPARE_LOADING,
  CREATE_INQUIRY_DETAIL,
  CREATE_INSURER_LIST,
  CREATE_QUESTION_DETAIL,
  UPDATE_INQUIRY_QUESTION,
  UPDATE_INQUIRY_RESPONSE,
} from "../../config/action-types.js";
import * as api from "../../config/api/index.js";

export const inquiryDetailAPI = (detail) => async (dispatch) => {
  try {
    dispatch({ type: COMPARE_LOADING });
    const { data } = await api.createInquiryDetail(detail);

    console.log(data);
    dispatch({ type: CREATE_INQUIRY_DETAIL, payload: data });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: COMPARE_ERROR, error: error });
  }
};

export const insurerListAPI = (instanceName) => async (dispatch) => {
  try {
    dispatch({ type: COMPARE_LOADING });
    const { data } = await api.createInsurerList(instanceName);

    console.log(data);
    dispatch({ type: CREATE_INSURER_LIST, payload: data });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: COMPARE_ERROR, error: error });
  }
};

export const questionDetailAPI = (inData) => async (dispatch) => {
  try {
    dispatch({ type: COMPARE_LOADING });
    const { data } = await api.createQuestionDetail(inData);

    console.log(data);
    dispatch({ type: CREATE_QUESTION_DETAIL, payload: data });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: COMPARE_ERROR, error: error });
  }
};

export const updateInquiryAPI = (inData) => async (dispatch) => {
  try {
    dispatch({ type: COMPARE_LOADING });
    const { data } = await api.updateInquiry(inData);

    dispatch({ type: UPDATE_INQUIRY_RESPONSE, payload: data });
  } catch (error) {
    dispatch({ type: COMPARE_ERROR, error: error });
  }
};

export const updateInquiryQuestionAPI = (inData) => async (dispatch) => {
  try {
    dispatch({ type: COMPARE_LOADING });
    const { data } = await api.updateInquiryQuestion(inData);

    dispatch({ type: UPDATE_INQUIRY_QUESTION, payload: data });
  } catch (error) {
    dispatch({ type: COMPARE_ERROR, error: error });
  }
};

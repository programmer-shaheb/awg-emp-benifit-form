import {
  COMPARE_ERROR,
  COMPARE_LOADING,
  CREATE_INQUIRY_DETAIL,
  CREATE_INSURER_LIST,
  CREATE_QUESTION_DETAIL,
  UPDATE_INQUIRY_QUESTION,
  UPDATE_INQUIRY_RESPONSE,
} from "../../config/action-types";

const initialState = {
  error: null,
  isError: false,
  isLoading: false,
  createInquiryDetail: null,
  createInsurerList: null,
  createQuestionDetail: null,
  updateInquiry: null,
  updateInquiryQuestion: null,
};

const formDetailReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case COMPARE_ERROR:
      return {
        ...state,
        error: action.error,
        isError: true,
        isLoading: false,
      };

    case COMPARE_LOADING:
      return {
        ...state,
        error: null,
        isLoading: true,
        isError: false,
      };

    case CREATE_INQUIRY_DETAIL:
      return {
        ...state,
        createInquiryDetail: action.payload,
      };

    case CREATE_INSURER_LIST:
      return {
        ...state,
        createInsurerList: action.payload,
      };

    case CREATE_QUESTION_DETAIL:
      return {
        ...state,
        createQuestionDetail: action.payload,
      };

    case UPDATE_INQUIRY_RESPONSE:
      return {
        ...state,
        error: null,
        isError: false,
        updateInquiry: action.payload,
      };

    case UPDATE_INQUIRY_QUESTION:
      return {
        ...state,
        error: null,
        isError: false,
        updateInquiryQuestion: action.payload,
      };

    default:
      return state;
  }
};

export default formDetailReducer;

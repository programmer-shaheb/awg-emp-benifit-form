import {
  ORGANIZATION_DETAILS,
  ORGANIZATION_ERROR,
  ORGANIZATION_LOADING,
  RECORD_DETAILS,
  SET_QUERY_PARAMS,
} from "../../config/action-types";

const initialState = {
  isOrgLoading: false,
  isOrgError: false,
  orgError: null,
  orgDetails: null,
  recDetails: null,
  queryParams: null,
};

const orgReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_QUERY_PARAMS:
      return {
        ...state,
        queryParams: action.payload,
      };

    case ORGANIZATION_LOADING:
      return {
        ...state,
        isOrgLoading: true,
        isOrgError: false,
        orgError: null,
      };

    case ORGANIZATION_ERROR:
      return {
        ...state,
        isOrgLoading: false,
        isOrgError: true,
        orgError: action.error,
      };

    case ORGANIZATION_DETAILS:
      return {
        ...state,
        isOrgLoading: false,
        isOrgError: false,
        orgDetails: action.payload,
      };

    case RECORD_DETAILS:
      return {
        ...state,
        recDetails: action.payload,
      };

    default:
      return state;
  }
};

export default orgReducer;

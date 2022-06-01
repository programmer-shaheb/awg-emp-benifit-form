import { combineReducers } from "redux";

import auth from "./reducers/auth-user";
import formDetail from "./reducers/form-detail-reducer";
import orgReducer from "./reducers/org-reducer";

import steps from "./reducers/stepReducer";

const reducers = combineReducers({
  auth,
  steps,
  formDetail,
  orgReducer,
});

export default reducers;

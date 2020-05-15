import { combineReducers } from "redux";
import adminAuthReducer from "./admin/adminAuthReducer";

const rootReducer = combineReducers({
  adminAuth: adminAuthReducer,
});

export default rootReducer;

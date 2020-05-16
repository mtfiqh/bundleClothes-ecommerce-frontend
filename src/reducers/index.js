import { combineReducers } from "redux";
import adminAuthReducer from "./admin/adminAuthReducer";
import adminProductReducer from "./admin/adminProductReducer";

const rootReducer = combineReducers({
  adminAuth: adminAuthReducer,
  adminProduct: adminProductReducer,
});

export default rootReducer;

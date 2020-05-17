import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productReducer";
import adminAuthReducer from "./admin/adminAuthReducer";
import adminProductReducer from "./admin/adminProductReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  adminAuth: adminAuthReducer,
  adminProduct: adminProductReducer,
});

export default rootReducer;

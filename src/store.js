import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import {
  setAuthenticationToken,
  setAdminAuthenticationToken,
} from "./utils/authentication";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

let currentState = store.getState();

store.subscribe(() => {
  const previousState = currentState;
  currentState = store.getState();

  if (previousState.auth.token !== currentState.auth.token) {
    setAuthenticationToken(currentState.auth.token);
  }

  if (previousState.adminAuth.token !== currentState.adminAuth.token) {
    setAdminAuthenticationToken(currentState.adminAuth.token);
  }
});

export default store;

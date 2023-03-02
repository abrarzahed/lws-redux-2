import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import ThunkMiddleware from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ThunkMiddleware))
);

export default store;

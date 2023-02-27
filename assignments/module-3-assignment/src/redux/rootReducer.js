import { combineReducers } from "redux";
import productReducer from "./product/productReducer";
import routeReducer from "./route/routeReducer";

const rootReducer = combineReducers({
  route: routeReducer,
  cartAndProduct: productReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import bookReducer from "./books/bookReducer";
import filterReducer from "./filter/filterReducer";

const rootReducer = combineReducers({
  filters: filterReducer,
  books: bookReducer,
});

export default rootReducer;

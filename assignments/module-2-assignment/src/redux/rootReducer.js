import { combineReducers } from "redux";
import bookingReducer from "./booking/bookingReducer";

const rootReducer = combineReducers({
  bookings: bookingReducer,
});
export default rootReducer;

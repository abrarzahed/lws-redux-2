import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes";

const initialState = [
  {
    id: 0,
    from: "Dhaka",
    to: "Sylhet",
    date: "02/08/2023",
    guests: "2 Person",
    class: "Economy",
  },
];

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      if (state.length < 3) {
        return [...state, action.payload];
      } else {
        return state;
      }

    case DELETE_BOOKING:
      const updatedState = [...state].filter(
        (item) => item.id !== action.payload
      );
      return updatedState;

    default:
      return state;
  }
};

export default bookingReducer;

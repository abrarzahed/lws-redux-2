import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes";

const initialState = [
  {
    id: 1,
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
      if (state.length < 3 && action.payload.from !== action.payload.to) {
        return [...state, { id: state.length + 1, ...action.payload }];
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

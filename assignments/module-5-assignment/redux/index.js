const store = require("./app/store");

const { fetchVideo } = require("./video/videoSlice");

// initial state
// console.log(`Initial State: ${JSON.stringify(store.getState())}`);

// subscribe to state changes
store.subscribe(() => {
  //   console.log(store.getState());
});

// dispatch actions
store.dispatch(fetchVideo());

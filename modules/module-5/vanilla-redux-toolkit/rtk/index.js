const store = require("./app/store");

const { counterActions } = require("./features/counter/counterSlice");
const {
  dynamicCounterActions,
} = require("./features/dynamicCounter/dynamicCounterSlice");
const { fetchPosts } = require("./features/postsSlice");

// initial state
// console.log(`Initial State: ${JSON.stringify(store.getState())}`);

// subscribe to state changes
store.subscribe(() => {
  //   console.log(store.getState());
});

// dispatch actions
store.dispatch(fetchPosts());
/*
store.dispatch(counterActions.increment());

store.dispatch(counterActions.increment());

store.dispatch(counterActions.decrement());
*/
/*
store.dispatch(dynamicCounterActions.increment(10));

store.dispatch(dynamicCounterActions.increment(5));

store.dispatch(dynamicCounterActions.decrement(2));
*/

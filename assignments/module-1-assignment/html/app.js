const allMatches = document.querySelector(".all-matches");
const addMatchButton = document.querySelector(".lws-addMatch");
const resetButton = document.querySelector(".lws-reset");

// action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";
const ADD_MATCH = "addMatch";
const RESET_MATCH = "resetMatch";
const DELETE_MATCH = "deleteMatch";

// action creators
const increment = ({ id, value }) => {
  return {
    type: INCREMENT,
    payload: {
      id,
      value,
    },
  };
};
const decrement = ({ id, value }) => {
  return {
    type: DECREMENT,
    payload: {
      id,
      value,
    },
  };
};
const addMatch = () => {
  return {
    type: ADD_MATCH,
  };
};
const resetMatch = () => {
  return {
    type: RESET_MATCH,
  };
};
const deleteMatch = (id) => {
  return {
    type: DELETE_MATCH,
    payload: {
      id,
    },
  };
};

// initial state
const initialState = [
  {
    id: 1,
    total: 120,
  },
];

//  create reducer function
function scoreReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    const updatedMatches = state.map((match) => {
      if (match.id === action.payload.id) {
        return {
          id: match.id,
          total: match.total + action.payload.value,
        };
      }
      return match;
    });
    return updatedMatches;
  } else if (action.type === DECREMENT) {
    const updatedMatches = state.map((match) => {
      if (match.id === action.payload.id) {
        console.log(match.total);
        return {
          id: match.id,
          total: match.total > 0 ? match.total - action.payload.value : 0,
        };
      }
      return match;
    });
    return updatedMatches;
  } else if (action.type === ADD_MATCH) {
    return [...state, { id: state.length + 1, total: 0 }];
  } else if (action.type === RESET_MATCH) {
    const updateState = state.map((match) => ({ id: match.id, total: 0 }));
    return [...updateState];
  } else if (action.type === DELETE_MATCH) {
    const updateState = state.filter((match) => match.id !== action.payload.id);
    return [...updateState];
  } else {
    return state;
  }
}

// create store
const store = Redux.createStore(scoreReducer);

const renderUi = () => {
  const state = store.getState();

  const html = state.map((match, i) => {
    return `
      <div class="match" data-id="${i + 1}">
       <div class="wrapper">
         <button class="lws-delete">
           <img src="./image/delete.svg" alt="" />
         </button>
         <h3 class="lws-matchName">Match ${i + 1}</h3>
       </div>
       <div class="inc-dec">
         <form class="incrementForm" >
           <h4>Increment</h4>
           <input type="number" name="increment" class="lws-increment" />
         </form>
         <form class="decrementForm">
           <h4>Decrement</h4>
           <input type="number" name="decrement" class="lws-decrement" />
         </form>
       </div>
       <div class="numbers">
         <h2 class="lws-singleResult">${match.total}</h2>
       </div>
     </div>
  `;
  });
  allMatches.innerHTML = html;

  // increment score
  const incrementForm = document.querySelectorAll(".incrementForm");
  incrementForm.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const parentElement = e.target.closest(".match");
      const id = Number(parentElement.dataset.id);
      const inputValue = Number(e.target.querySelector("input").value);
      store.dispatch(increment({ id: id, value: inputValue }));
    });
  });

  // decrement score
  const decrementForm = document.querySelectorAll(".decrementForm");
  decrementForm.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const parentElement = e.target.closest(".match");
      const id = Number(parentElement.dataset.id);
      const inputValue = Number(e.target.querySelector("input").value);
      store.dispatch(decrement({ id: id, value: inputValue }));
    });
  });

  // delete match
  const deleteMatchButtons = document.querySelectorAll(".lws-delete");
  deleteMatchButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const parentElement = e.target.closest(".match");
      const id = Number(parentElement.dataset.id);
      store.dispatch(deleteMatch(id));
    });
  });
};

// update Ui initially
renderUi();

// subscribe to store
store.subscribe(renderUi);

// add new match
addMatchButton.addEventListener("click", () => {
  store.dispatch(addMatch());
});

// reset matches
resetButton.addEventListener("click", () => {
  store.dispatch(resetMatch());
});

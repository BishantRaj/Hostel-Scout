import React, { createContext, useReducer } from "react";

const INITIAL_STATE = {
  address: undefined,
};

export const FindContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return { ...state, address: action.payload };
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const FindContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <FindContext.Provider
      value={{
        address: state.address,
        dispatch,
      }}
    >
      {children}
    </FindContext.Provider>
  );
};

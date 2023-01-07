import React from "react";
import CartItem from "./CartItem";
import cartItems from "./data";
import reducer from "./reducer";


const initialState= {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0
}

const AppContext=React.createContext();

const AppProvider = ({children}) => {
  const[state, dispatch]=React.useReducer(reducer, initialState);

  function clearCart () {
    dispatch({type:"CLEAR_CART"})
  }

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }

  const increaseItem = (id) => {
    dispatch({type: "INCREASE", payload: id})
  }

  const decreaseItem = (id) => {
    dispatch({type: "DECREASE", payload: id})
  }



  return <AppContext.Provider value={{
    ...state, 
    clearCart,
    removeItem,
    increaseItem,
    decreaseItem
  }}>

    {children}
  </AppContext.Provider>
}

export {AppProvider, AppContext};


export const useGlobalContext = () => {
  return React.useContext(AppContext)
}
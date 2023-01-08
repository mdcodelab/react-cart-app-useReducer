const reducer = (state, action) => {
    if(action.type === "CLEAR_CART") {
        return {...state, cart: []}
    }
    if(action.type === "REMOVE") {
        return {...state,
            cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),}
        }
        if (action.type === 'INCREASE') {
            let tempCart = state.cart.map((item) => {
              if (item.id === action.payload) {
                return { ...item, amount: item.amount + 1 }
              }
              return item
            })
            return {...state, cart: tempCart}
          }

          if (action.type === 'DECREASE') {
            let tempCart = state.cart.map((item) => {
                if (item.id === action.payload) {
                  return { ...item, amount: item.amount - 1 }
                }
                return item
              })
              .filter((item) => item.amount !== 0)
            return {...state, cart: tempCart}
          }

          if(action.type === "CALCULATE_TOTAL") {
            let totalPay = state.cart.reduce((acc, curr) => {
                return acc+curr.price*curr.amount
            }, 0)
            return {...state, total: totalPay}
          }

          if(action.type === "TOTAL_AMOUNT") {
            let totalAmount= state.cart.reduce((acc, curr) => {
              return acc+curr.amount
          }, 0)
            return {...state, amount: totalAmount}
          }

        
        
          
        
        
    return state

}

export default reducer
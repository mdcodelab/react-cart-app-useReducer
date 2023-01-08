import React from 'react';
import {useGlobalContext} from "./context";
import CartItem from "./CartItem";


function CartContainer() {
  const{cart, total, clearCart}=useGlobalContext();

  if(cart.length === 0) {
    return <section className="cart">
        {/*cart header*/}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
    </section>
  }
  
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item, index) => {
          return <CartItem key={item.id} {...item}></CartItem>
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={clearCart}
        >
          clear cart
        </button>
      </footer>

    </section>
  );
}

export default CartContainer;


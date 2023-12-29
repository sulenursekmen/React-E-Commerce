import React from "react";
import './style.css'
const Cart = ({ cartItem, addToCart,decreaseQty }) => {
    const totalPrice=cartItem.reduce((price,item)=>price + item.qty * item.price,0)
  return (
    <>
      <section className="cart-items">
        <div className="container d_flex">
          <div className="cart-details">
            {cartItem.length === 0 ? (
              <h1 className="no-items product">No items are added in Cart</h1>
            ) : (
              cartItem.map((item, index) => {
                const productQty = item.price * item.qty;
                return (
             <>
                  <div key={index} className="cart-list product f_flex">
                 <div className="img">
                    <img src={item.cover} alt="" />
                 </div>
                 <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>{item.price}.00 *{item.qty} 
                    <span>${productQty}.00</span>
                    </h4>
                 </div>
                 <div className="cart-items-function">
                    <div className="removeCart">
                        <button className="removeCart">
                              <i class="fas fa-window-close"></i>
                        </button>
                  
                    </div>
                    <div className="cartControl d_flex">
                        <button className="incCart" onClick={()=>addToCart(item)}>
                        <i class="fas fa-plus"></i>
                        </button>

                        <button className="desCart" onClick={()=>decreaseQty(item)}>
                        <i class="fas fa-minus"></i>
                        </button>
                    </div>
                 </div>
                 <div className="cart-item-price"></div>
                  </div>
                 
             </>
                );
              })
            )}
             <div className="cart-total product">
                <h2>Cart Summary</h2>
                <div className="d_flex">
                    <h4>Total Price :</h4>
                    <h3>${totalPrice}.00</h3>
                </div>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;

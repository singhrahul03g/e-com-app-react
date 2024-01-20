import "./Cart.scss";
import { IoMdClose } from "react-icons/io";

const Cart = () => {
  
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading"> Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <IoMdClose />
            <span className="text">Close</span>
          </span>
        </div>

        <div className="empty-cart">
          <BsCartX />
          <span>No Products in the cart</span>
          <button className="return-cta">RETURN TO SHOP</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

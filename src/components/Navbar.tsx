import { useState } from "react";
import Cart from "./Cart";
import { useCatrSelector } from "../store/hooks";

function Navbar() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const cartQuantity = useCatrSelector((state) =>
    state.cart.items.reduce((value, item) => value + item.quantity, 0)
  );

  function handlerOpenCart() {
    setCartIsOpen(true);
  }

  function handlerCloseCart() {
    setCartIsOpen(false);
  }

  return (
    <>
      {cartIsOpen && <Cart onClose={handlerCloseCart} />}
      <div className="navbar">
        <button onClick={handlerOpenCart}> سبد خرید ({cartQuantity})</button>
      </div>
    </>
  );
}

export default Navbar;

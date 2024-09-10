import { type CartItem, addToCart, removeFromCart } from "../store/cart-slice";
import { useCatrSelector, useCartDispatch } from "../store/hooks";

function CartItems() {
  const cartItem = useCatrSelector((state) => state.cart.items);
  const dispatch = useCartDispatch();

  function handlerAddToCart(item: CartItem) {
    dispatch(addToCart(item));
  }

  function handlerRemoveFromCart(id: string) {
    dispatch(removeFromCart(id));
  }

  const totalPrice = cartItem.reduce(
    (value, item) => value + item.price * item.quantity,
    0
  );
  return (
    <div>
      {cartItem.length === 0 && <p>محصولی در سبد خرید وجود ندارد.</p>}
      <ul className="cart-items">
        {cartItem.map((item) => {
          return (
            <li key={item.id}>
              <div>
                <span>{item.title}</span>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => handlerRemoveFromCart(item.id)}>
                  -
                </button>
                <button>{item.quantity}</button>
                <button onClick={() => handlerAddToCart(item)}>+</button>
              </div>
            </li>
          );
        })}
      </ul>
      {cartItem.length > 0 && (
        <p className="cart-total-price">
          :مجموع <strong>{totalPrice}</strong> تومان
        </p>
      )}
    </div>
  );
}

export default CartItems;

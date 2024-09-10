import { useCartDispatch } from "../store/hooks";
import { addToCart } from "../store/cart-slice";

type ProductProps = {
  id: string;
  title: string;
  price: number;
  image: string;
};

function Product({ id, title, price, image }: ProductProps) {
  const dispatch = useCartDispatch();

  function handlerAddToCart() {
    dispatch(addToCart({ id, title, price }));
  }

  return (
    <div className="product">
      <img src={image} />
      <div>
        <h3>{title}</h3>
        <p className="product-price">{price}</p>
      </div>
      <p className="product-actions">
        <button onClick={handlerAddToCart}>افزودن به سبد خرید</button>
      </p>
    </div>
  );
}

export default Product;

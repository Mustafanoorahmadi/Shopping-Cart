import { Provider } from "react-redux";
import { store } from "./store/store";
import { productData } from "./data/items";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Product from "./components/Product";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <ProductList>
        {productData.map((item) => (
          <div key={item.id}>
            <Product {...item} />
          </div>
        ))}
      </ProductList>
    </Provider>
  );
}
export default App;

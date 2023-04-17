import { Link } from "react-router-dom";
import "./App.css";

import ProductList from "./components/ProductList";


function App() {
  


  return (
    <div> <div className="welcome">Welcome Meydit and LTV People</div>
      <div>
        <Link to="/addproduct">
          <button className="addproduct" >Add Product</button>
        </Link>
      </div>

      <ProductList ></ProductList>
    </div>
  );
}

export default App;

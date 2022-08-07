import { Home } from "./pages/Home";
import { ProductList } from "./pages/ProductList";

import "./App.css";
import { Product } from "./pages/Product";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Cart } from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  const user = true;
  return (
    <div className="App">
      {user ? (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/products" element={<ProductList />} /> */}
            <Route path="/products/:category" element={<ProductList />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Home />} />
            <Route path="/register" element={<Home />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<Login />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Header from "./pages/Header";
import ProductList from "./components/Product/ProductList";
// import ProductDetails from "./components/Product/ProductDetails";

// css
// import "./App.css";

function App() {
  return (

<Router>

  <Header />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product" element={<ProductList />} />
  </Routes>
  
</Router>
  );
}

export default App;

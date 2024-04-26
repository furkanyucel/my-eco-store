import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import ProductList from "./components/Product/ProductList";
import ProductDetails from "./components/Product/ProductDetails";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={ProductList} />
        <Route path="/products/:productId" component={ProductDetails} />
      </Switch>
    </Router>
  );
}

export default App;

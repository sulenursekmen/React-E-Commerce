
import './App.css';
import { useState } from 'react';
import Header from './components/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pages from './pages/Pages';
import Data from './components/flashDeals/Data'
import Cart from './cart/Cart';
function App() {

  const { productItems } = Data;

  const [cartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? {
              ...productExit,
              qty: productExit.qty + 1,
            }
            : item
        )
      );
    }else{
      setCartItem([...cartItem,{...product,qty:1}])
    }
  };
  const decreaseQty=(product)=>{
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit.qty===1) {
      setCartItem(cartItem.filter((item)=>item.id !== product.id))
    }else{
      setCartItem(cartItem.map((item)=>(item.id === product.id?{...productExit,qty:productExit.qty -1 }: item)))
    }
  }
  return (
    <div className="App">
      <Router>
        <Header cartItem={cartItem} />
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} />
          </Route>
          <Route path='/cart' exact>
            <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

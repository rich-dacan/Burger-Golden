import './App.css';
import 'react-toastify/dist/ReactToastify.min.css';


import { useState, useEffect } from 'react';

import Cart        from './components/Cart';
import Header      from './components/Header';
import ProductList from './components/ListProduct';
import { ToastContainer } from 'react-toastify';

function App() {

  const [products, setProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);

  const [cartTotal, setCartTotal] = useState(0);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {

    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
      .then((response) => response.json())
      .then((response) => setProducts(response))

  }, []);

  return (

    <div className="App">

      <Header filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} products={products}/>

      <main className='main__container'>
        
        <aside>
          {filteredProducts.length > 0 ?
          
            <ProductList productList={filteredProducts} currentSale={currentSale} setCurrentSale={setCurrentSale} />
          : 
        
            <ProductList productList={products} currentSale={currentSale} setCurrentSale={setCurrentSale} />        
          }
        </aside>
        <aside>
          <Cart 
          currentSale={currentSale} 
          setCurrentSale={setCurrentSale} 
          cartTotal={cartTotal} 
          setCartTotal={setCartTotal} 
          />
        </aside>
        
      </main>   
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;



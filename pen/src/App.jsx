import './styles.css'; // Import your CSS entry file
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Homepage';
import Productpage from './pages/productpage';
import Productbuy from './components/productbuy';
import Plusminus from './components/plusminbutton';
import Test from './pages/test';
import Checkout from './pages/Checkoutpage';
function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Home />} />
          <Route path="product" element={<Productpage />} />
          <Route path="product/:id" element={<Productbuy />} />
          <Route path="test" element={<Test/>} />
          <Route path="checkout" element={<Checkout/>} />

        
        
      
    </Routes>
  </BrowserRouter> 
  );
}

export default App

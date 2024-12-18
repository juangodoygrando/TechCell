import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarApp from "./components/NavBarApp";
import ItemListConteiner from "./components/ItemListConteiner";
import ItemDetailConteiner from "./components/ItemDetailContainer";
import Footer from "./components/Footer"
import Error from "./components/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import VendeTuTech from "./components/VendeTuTech";
import CartView from "./components/CartView";
import Checkout from "./components/Checkout";


function App() {
  return (
    <CartProvider>
    <div className="app">
    <BrowserRouter>
      <NavBarApp />
      <div className="content">
      <Routes>
        <Route path='/' element={<ItemListConteiner
        greeting="Sácale partido a la tecnología con nosotros"
        titleTwo="Tu nuevo movil esta mas cerca!"
      />}/>
      <Route path="/item/:id" element={<ItemDetailConteiner />}/>
      <Route path="/product/:category" element={<ItemListConteiner
        greeting="Estos son nuestros moviles" />}/>
      <Route path="/vende-tu-tech" element={<VendeTuTech/>} />
      <Route path="/cart" element={<CartView/>} />
      <Route path="/checkout" element={<Checkout/>} />

      <Route path="*" element={<Error />}/>
      
      </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
    </div>
    </CartProvider>
  );
}

export default App;

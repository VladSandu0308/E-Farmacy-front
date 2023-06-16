import './App.css';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Account from './components/Account';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import Product from './components/Product';
import AddAllergy from './components/AddAllergy';
import EditProduct from './components/EditProduct';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/> 
        <Route path="/register" element={<Register />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/account" element={<Account />}/>
        <Route path="/add/allergy" element={<AddAllergy />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/add/product" element={<AddProduct />}/>
        <Route path="/edit/product" element={<EditProduct />}/>
        <Route path="/product" element={<Product />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

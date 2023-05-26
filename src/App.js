import './App.css';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Account from './components/Account';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/> 
        <Route path="/register" element={<Register />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/account" element={<Account />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

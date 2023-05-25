import './App.css';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Login from './components.js/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

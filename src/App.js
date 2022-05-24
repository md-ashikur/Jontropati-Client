
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Portfolio from './Component/Portfolio/Portfolio';

function App() {
  return (
    <div className="">
<Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

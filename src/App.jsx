import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home';
import Login from './pages/Login'
import Checkout from './pages/Checkout'
import Category from './pages/Category'
import Logout from './pages/Logout'
import Footer from './components/Footer';
import BottomFooter from './components/bottom-footer';



function App() {
  return (
    <BrowserRouter>
        <div className='app'>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/login' element={<Login />} />
            <Route path='/category' element={<Category />} />
            <Route path='/logout' element={<Logout />} />
        </Routes>
        <Footer />
        <BottomFooter />
        </div>
    
    </BrowserRouter>
    
  )
}

export default App

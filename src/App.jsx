import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 import './App.css'
import { Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Logo from './components/logo/Logo';
import Shop from './components/shop/Shop';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Contact from './components/contacts/Contact';
function App() {

  return (
    <>
      {/*Router step2 */}
      <Nav />
      <Routes>
        <Route path="/"   element={<Home/>} />
        <Route path="/logo"   element={<Logo/>} />
        <Route path="/shop"   element={<Shop/>} />
        <Route path="/about"   element={<About/>} />
        <Route path="/contacts"   element={<Contact/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import './index.css'
import Homepage from './pages/homepage/Homepage';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import CarRental from './pages/car-rental/CarRental';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/car" element={<CarRental />} />
          {/* <Route path="/bookevent" element={<BookEvent />} /> */}
          {/* <Route path="/reserveticket" element={<ReserveTicket />} /> */}
          {/* <Route path="/multiplecheckout" element={<MultipeCheckout />} /> */}
          {/* <Route path="/checkout" element={<Checkout />} /> */}
          {/* <Route path="/successfulorder" element={<Successfulorder />} /> */}
          {/* <Route path="/virtualevents" element={<VirtualEvents />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
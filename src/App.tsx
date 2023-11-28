import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import './index.css'
import Homepage from './pages/homepage/Homepage';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import CarRental from './pages/car-rental/CarRental';
import PaymentCard from './pages/payment-card/PaymentCard';
import PaymentConfirmation from './pages/payment-confirmation/PaymentConfirmation';
import TruckLandingPage from './pages/truck-page/TruckLandingPage';
import DriversPage from './pages/drivers-page/DriversPage';
import TakeMeHome from './pages/take me home/TakeMeHome';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/car" element={<CarRental />} />
          <Route path="/payment-card" element={<PaymentCard />} />
          <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
          <Route path="/truck" element={<TruckLandingPage />} />
          <Route path="/driver" element={<DriversPage />} />
          <Route path="/driver/take-me-home" element={<TakeMeHome />} />
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
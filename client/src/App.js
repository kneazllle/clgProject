import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import InputForm from "./InputForm";
import Footer from "./footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./loginPage";
import Signup from "./signup";
import { ContextProvider } from "./context/StepContext";

function App() {
  return (
    <>
      <ContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
  
          </Routes>
          <ToastContainer />
        </Router>

        
        <Footer />
      </ContextProvider>
    </>
  );
}

export default App;

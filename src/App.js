import React,{ useState,useEffect } from "react";
import Header from "./W_Main/header.js";  
import Footer from "./W_Main/footer.js";  
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Contact from "./Pages/Contact.js";
import {BrowserRouter,Routes,Route,} from "react-router-dom";

const App = () => 
{
    return(
        <div className="divv">
            <Header />              
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact-us" element={<Contact />} />
                    <Route path="/home" element={<Footer />} />
                </Routes>      
            <Footer />     
        </div>
    );
}

export default App; 
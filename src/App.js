import React,{ useState,useEffect } from "react";

import AddExpenses from "./Components/Add_New_Expenses/AddExpenses.js";

import ExpenseDaTa from "./Components/All_Expenses/ExpenseDaTa.js";

import Header from "./W_Main/header.js";  
import Footer from "./W_Main/footer.js";  

import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Contact from "./Pages/Contact.js";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

// let Dummy_array = [
//     {
//         id: "e1",
//         title: "EMI Loan",
//         amount: 5000,
//         date: new Date(2022,8,15)
//     },
//     {
//         id: "e2",
//         title: "Mobile Reacharge",
//         amount: 300,
//         date: new Date(2022,8,16)
//     }  
// ];

const App = () => 
{
    // const [All_expense,setAllExpense] = useState(Dummy_array);

    // useEffect( () => {              //Here start using Api for DB
    //     fetch("").then(
    //         response =>
    //         {
    //             return response.json()
    //         }
    //     ).then(
    //         data =>
    //         {
    //             console.log(data);
    //             setAllExpense(data);
    //         }
    //     )
    // },[]);              //here array bracket for not looping APi data

    // const AddExpenseData = (expense_data) =>
    // {
    //     const updateExpense = [expense_data, ...All_expense];
    //     setAllExpense(updateExpense);
    // }



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
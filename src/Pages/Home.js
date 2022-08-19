import AddExpenses from "../Components/Add_New_Expenses/AddExpenses.js";

import ExpenseDaTa from "../Components/All_Expenses/ExpenseDaTa.js";

import React,{ useState } from "react";

let Dummy_array = [                     //static data for display Expense Details
    {
        id: "e1",
        title: "EMI",
        amount: 5000,
        date: new Date(2022,8,15)
    },
    {
        id: "e2",
        title: "Mobile Reacharge",
        amount: 300,
        date: new Date(2022,8,16)
    }  
];

const Home = () =>
{
    const [All_expense,setAllExpense] = useState(Dummy_array);

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

    const AddExpenseData = (expense_data) =>
    {
        const updateExpense = [expense_data, ...All_expense];
        setAllExpense(updateExpense);
    }

    return (
        <div>
            <AddExpenses onAddExpense = {AddExpenseData}/>
            <ExpenseDaTa item={All_expense} />
        </div>
    );
}

export default Home;
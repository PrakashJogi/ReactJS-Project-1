import AddExpenses from "../Components/All_Expenses/AddExpenses.js";
import Expense_Item from "../Components/All_Expenses/Expense_item.js";
import React,{ useState } from "react";

// let Dummy_array = [                     //static data for display Expense Details
//     {
//         id: "e1",
//         title: "EMI",
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

const Home = () =>
{
    const [All_expense,setAllExpense] = useState([]);

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
    
    const deleteExpense = (id) =>
    {
        setAllExpense((updateExpense) => 
        {
            return updateExpense.filter((array_element,index) => 
            {
                return (
                        index !== id     //here conditon,index from filter array loop
                        );                //and id from map array loop index equality same
            });
        });
    } 

    return (
            <div>
                <AddExpenses onAddExpense = {AddExpenseData}
                            item={All_expense}
                            onDelete ={deleteExpense}/>
            </div>
           );
}

export default Home;
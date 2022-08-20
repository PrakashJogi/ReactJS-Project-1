import React from "react";
import Expense_Item from './Expense_item.js';
import ExpenseForm from "./ExpenseForm.js";
import "./AddExpenses.css";

const AddExpenses = (props) =>
{
    const saveSubmitDate = (Entered_Data) => 
    {
        props.onAddExpense(Entered_Data);
        // console.log(Entered_Data_object);
    };

    return (
        <div>
            <div className="Expense_card">
                <ExpenseForm saveExpenseData = {saveSubmitDate}/>
            </div>
            <div className="expenseData">
            {
                props.item.map((expense,index) =>
                {
                    return(                       
                            <Expense_Item 
                            key = {index}   //Key unique for remove warning error
                            id = {index} 
                            date={ expense.date }
                            title={ expense.title }
                            amount={ expense.amount } 
                            deleteExpense = {props.onDelete}/>
                        );
                }
                )
            }  
    
            </div>
        </div>
    );
}

export default AddExpenses;
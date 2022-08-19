import React from "react";

import ExpenseForm from "./ExpenseForm.js";

import "./AddExpenses.css";

const AddExpenses = (props) =>
{
    const saveSubmitDate = (Entered_Data) => 
    {
        const Entered_Data_object =
        {
            ...Entered_Data,
            id: Math.random().toString()
        }

        props.onAddExpense(Entered_Data_object);
        // console.log(Entered_Data_object);
    };

    return (
        <div className="Expense_card">
            <ExpenseForm saveExpenseData = {saveSubmitDate}/>
        </div>
    );
}

export default AddExpenses;
import React, { useState } from "react"; //useReact fr any update or changes in our Apps or projects

import "./ExpenseForm.css";

const ExpenseForm = (props) =>
{
    const [TitleData, setTitleData] = useState("");
    const [AmountData, setAmountData] = useState("");
    const [DateData, setDateData] = useState("");

    const ChangeTitle = (event) =>
    {
        setTitleData(event.target.value);
    }
    const ChangeAmount = (event) =>
    {
        setAmountData(event.target.value);
    }
    const ChangeDate = (event) =>
    {
        setDateData(event.target.value);
    }

    const submitForm = (event) =>
    {
        event.preventDefault();

        const expensData = {      //create Object
            title: TitleData,
            amount: AmountData,
            date: new Date(DateData)
        }

        props.saveExpenseData(expensData);
        // console.log(expensData);

        setTitleData("");  //clear form After form submited  
        setAmountData("");
        setDateData("");
    }


    return(
        <form onSubmit={ submitForm }>
            <div className="NewExpense_div">
                <div className="NewExpense">
                    <label className="input_text">Title</label><br />
                    <input type="text" value={TitleData} onChange={ ChangeTitle } placeholder="Enter expense title"/>
                </div>
                <div className="NewExpense">
                    <label className="input_text">Amount</label><br />
                    <input type="number" value={AmountData} onChange={ ChangeAmount } min="1" step="1"placeholder="Enter amount" />
                </div>
                <div className="NewExpense">
                    <label className="input_text">Date</label><br />
                    <input className="date_" value={DateData} type="date" onChange={ ChangeDate } placeholder="" />
                
            </div>
            <div className="btn_submit">
                <button type="submit" className="text-white add_expense_btnss">Add Expense</button>
            </div>
            </div>
        </form>
    );
}

export default ExpenseForm;
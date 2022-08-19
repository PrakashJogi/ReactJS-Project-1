import React,{ useState } from 'react';
import "./Expense_item.css";

import ExpenseDate from './ExpenseDate.js';


const Expense_Item = (props) =>
{
          return(
            <div className="expense-item">
                <ExpenseDate date={props.date} />     {/* <-- Date component */}
                <div className="expense-item-detail">{ props.title }</div>
                <div className="expense-item-price">Rs.{ props.amount }</div>
            </div>
    );
}

export default Expense_Item;
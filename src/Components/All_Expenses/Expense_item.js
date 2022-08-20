import React,{ useState } from 'react';
import "./Expense_item.css";
import ExpenseDate from './ExpenseDate.js';
    

const Expense_Item = (props) =>
{
          return(
            <div className="expense-item table border text-center">
                <div className='row'>
                    <div className='col-lg-3'>
                        <ExpenseDate date={props.date} />     {/* <-- Date component */}
                    </div>
                    <div className='col-lg-4 expense-item-title'>
                        <div className="">{ props.title }</div>
                    </div>

                    <div className='col-lg-3 expense-item-price'>
                        <div className="price-round">Rs.{ props.amount }</div>
                    </div>

                    <div className='col-lg-2 expense-item-delete'>
                        <i onClick = { () => { 
                                            props.deleteExpense(props.id);
                                            }} 
                                            className="fa-solid fa-xmark delete-icon"></i>
                    </div>
                </div>
            </div>
            );
}

export default Expense_Item;
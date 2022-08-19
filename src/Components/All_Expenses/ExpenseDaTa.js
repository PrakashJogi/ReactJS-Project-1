import "./ExpenseDaTa.css";
import Expense_Item from './Expense_item.js';

function ExpenseDaTa(props)
{
    return(
        <div className="expenseData">
            {
                props.item.map(
                    expense =>
                    (
                        <Expense_Item 
                        key = {expense.id}   //Key unique for remove warning error 
                        date={ expense.date }
                        title={ expense.title }
                        amount={ expense.amount } />
                    )
                )
            }  
       
        </div>
    );
}

export default ExpenseDaTa;
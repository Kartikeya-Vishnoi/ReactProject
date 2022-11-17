import "./Expense.css";
import ExpenseDate from "./ExpenseDate";
//import {useState} from "react";


function ExpenseItem(props) {
  

  return (
    <li className="expense-item__description">
      <ExpenseDate date={props.date} />
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
                                                                
    </li>
  );
}
export default ExpenseItem;

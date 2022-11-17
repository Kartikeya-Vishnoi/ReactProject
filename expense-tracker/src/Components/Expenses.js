import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import Expenselist from "./Expenselist";
import "./expenses.css";
import Expensechart from "./ExpenseChart";

function Expenses(props) {
  const [year, setYear] = useState(2020);
  
  const selectyear = (year) => {
    setYear(year);
  };

  const expfilteredbyyear = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  
  return (
    <div className="expenses">
      <ExpensesFilter selectedyear={year} onchange={selectyear} />
      <Expensechart expenselist={expfilteredbyyear} />
      <Expenselist item={expfilteredbyyear} />
    </div>
  );
}

export default Expenses;
import NewExpenseForm from "./NewExpenseForm";
import './NewExpense.css'

function NewExpense(props){

function Onsubmithandler(data){
const expensedata={
    ...data,
    id:Math.random().toString()
};
props.onData(expensedata);
console.log(expensedata);
};

return(    
<div className="new-expense">
    <NewExpenseForm onSaveExpenseData={Onsubmithandler}/>
</div>
);
}
export default NewExpense;

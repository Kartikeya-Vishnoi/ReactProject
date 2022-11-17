import { useState } from "react";
import "./NewExpenseForm.css";

function NewExpenseForm(props) {
  const [Enteredtitle, Settitle] = useState("");
  const [Enteredamount, Setamount] = useState("");
  const [Entereddate, Setdate] = useState("");
  const [Cancelstate, SetCancelstate] = useState(true);

  function Titlehandler(event) {
    Settitle(event.target.value);
  }
  function Amountchangehandler(event) {
    Setamount(event.target.value);
  }
  function Datechangehandler(event) {
    Setdate(event.target.value);
  }

  function Submithandler(event) {
    event.preventDefault();
    const expensedata = {
      title: Enteredtitle,
      amount: Enteredamount,
      date: new Date(Entereddate),
    };
    props.onSaveExpenseData(expensedata);
    Settitle("");
    Setamount("");
    Setdate("");
    cancelhandler();
  }

  function cancelhandler() {
    if (!Cancelstate) {
      SetCancelstate(true);
    } else {
      SetCancelstate(false);
    }
  }
  if (!Cancelstate) {
    return (
      <form onSubmit={Submithandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={Enteredtitle} onChange={Titlehandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={Enteredamount}
              onChange={Amountchangehandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={Entereddate}
              onChange={Datechangehandler}
            />
          </div>
          <div>
            <button className="new-expense__actions">Add Expense</button>
          </div>
          <div>
            <button className="new-expense__actions" onClick={cancelhandler}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    );
  } else if (Cancelstate) {
    return(
    <div>
      <button className="new-expense__actions" onClick={cancelhandler}>
        AddTransaction
      </button>
    </div>
    )
  }
}

export default NewExpenseForm;

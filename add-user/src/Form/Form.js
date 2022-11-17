import "./Form.css";
import Modal from "../Modal/Modal";
import { useState } from "react";
import Wrapper from "../Wrapper";

function Form(props) {
  const [name, Setname] = useState("");
  const [age, Setage] = useState("");
  const [Error, setError] = useState(null);

  function NamechangeHandler(event) {
    Setname(event.target.value);
  }

  function AgechangeHandler(event) {
    Setage(event.target.value);
  }

  function seterrnull(){
    setError(null);
  }

  function OnSubmit(event) {
    event.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    const data = {
      name: name,
      age: age,
    };
    props.submission(data);
    Setname("");
    Setage("");
  }

  return (
    <Wrapper>
      {Error && <Modal title={Error.title} message={Error.message} seterrnull={seterrnull}/>}
      <div className="new-expense">
        <form>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Name</label>
              <input type="text" value={name} onChange={NamechangeHandler} />
            </div>
            <br />

            <div className="new-expense__control">
              <label>Age</label>
              <input type="number" value={age} onChange={AgechangeHandler} />
            </div>
            <div>
              <button className="new-expense__actions" onClick={OnSubmit}>
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

export default Form;

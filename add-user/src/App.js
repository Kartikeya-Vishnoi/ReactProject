import Form from "./Form/Form";
import Items from "./Items/Items";
import Modal from "./Modal/Modal";
import { useState } from "react";

function App() {
  var list = [
    {
      name: "kartik",
      age: "21",
    },
    {
      name: "ved",
      age: "14",
    },
  ];
  function clicksub(data) {
    Setitemlist((list) => {
      return [data, ...list];
    });
    console.log(itemlist);
  }
  const [itemlist, Setitemlist] = useState(list);
  return (
    <div>
      <Form submission={clicksub} />
      <Items list={itemlist} />
    </div>
  );
}

export default App;
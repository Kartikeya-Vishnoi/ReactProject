import Item from "./Item";
import "./Items.css"

function Items(props) {
  return (
    <div className="items">
      {props.list.map((item,index) => (
        <Item key={index} name={item.name} age={item.age} />
      ))}
    </div>
  );
}

export default Items;

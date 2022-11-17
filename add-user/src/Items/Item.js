import "./Item.css"

function Item(props){
  return(
    <div className="expense-item__description">
    <h2>{props.name}</h2>
    <h2>{props.age}</h2>
    </div>
  )
}

export default Item;
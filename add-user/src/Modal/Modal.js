import "./Modal.css";
import Card from "../Card";
function Modal(props){
  return (
  <div>  
  <div className="backdrop" onClick={props.seterrnull} />
  <Card className="modal">
  <header className="header">
    <h2>{props.title}</h2>
   </header>
   <div className="content">
    <p>{props.message}</p>
   </div>
   <footer className="actions">
    <button className="button" onClick={props.seterrnull}>Okay</button>
   </footer>
  </Card>
  </div>
  )
}

export default Modal;
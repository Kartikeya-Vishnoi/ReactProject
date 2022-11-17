import { useNavigate } from "react-router-dom";
import NewMeetupform from "../Meetups/NewMeetupform";
function Neo(props) {
  const history = useNavigate();
  function submithandler(meetupdata) {
    fetch(
      "https://meetup-handler-default-rtdb.firebaseio.com/meetups.json",
      //Configuring of Method is required as Get is method by default and we need POST
      {
        method: "POST",
        body: JSON.stringify(meetupdata), //converts meetup data to JSON format
        headers: {
          "Content-Type": "application/json",
        },
      }
      //Wait for promise to finish
    ).then(() => {
      history("/", { replace: "true" });// object of usenavigate is used to  
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupform onadd={submithandler} />
    </section>
  );
}
export default Neo;

import MeetupList from "../Meetups/MeetupList";
import { useState, useEffect } from "react";

//** Inside the function data fetch returns a promise but javascript doesn't waits for the promise and moves
//   directly to render jsx code hence we have to manage our jsx code according to the fetching state of data
//   hence we use usestate to manage our jsx code 

function All() {
  const [isloading, setisloading] = useState(true);
  const [loadedmeetups, setloadedmeetups] = useState([]);
  useEffect(() => {
    //use effect is a type of hookup which allows us to contol excecution of a piece of code  
    //when state is re-rendered
    setisloading(true);
    fetch("https://meetup-handler-default-rtdb.firebaseio.com/meetups.json")
    //data tabhi fetch ho rha hai jab All component call ho rha hai 
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups=[];
        for(const key in data){
          //since we use map in Meetuplist comp...we have to convert data into an array
          const meetup={
            id:key,
            ...data[key]
          };
          meetups.push(meetup);
        }
        setisloading(false);
        setloadedmeetups(meetups);
      });
  }, []);

  if (isloading) {
    return (
      <section>
        <h1>Loading..</h1>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedmeetups} />
    </section>
  );
}
export default All;
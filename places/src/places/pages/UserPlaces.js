import PlaceList from "../components/PlaceList";
import {useParams} from "react-router-dom";


function UserPlaces(){
    const DUMMY_PLACES = [
      {
        id: 'p3',
        title: 'SOMNATH MANDIR',
        description: 'Heritage of Hindu Culture',
        imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipMCSPaeJjVbISCwzrNqhD2mvGvFVHWqIHtxBWxL=s1360-w1360-h1020',
        address: 'Somnath',
        location: {
          lat: 20.8880,
          lng:  70.4010
        },
        creator: 'u2'
      },
        {
          id: 'p1',
          title: 'Empire State Building',
          description: 'One of the most famous sky scrapers in the world!',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
          address: '20 W 34th St, New York, NY 10001',
          location: {
            lat: 40.7484405,
            lng: -73.9878584
          },
          creator: 'u1'
        },
        {
          id: 'p2',
          title: 'Empire State Building',
          description: 'One of the most famous sky scrapers in the world!',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
          address: '20 W 34th St, New York, NY 10001',
          location: {
            lat: 40.7484405,
            lng: -73.9878584
          },
          creator: 'u2'
        }
        
      ];
      const uid=useParams().userId;
      const loadedplaces=DUMMY_PLACES.filter(place => place.creator===uid)
      return(
        <PlaceList items={loadedplaces}/>
      )
}

export default UserPlaces;
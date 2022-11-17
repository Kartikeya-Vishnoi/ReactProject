import classes from './MeetupItem.module.css';
import Card from '../ui/card';
import { useContext } from 'react';
import FavoritesContext from '../store/favourite-context';

function Meetupitem(props){
    //useContext here is used to estabilish connection b/w the current state of context
    const favoritesCtx=useContext(FavoritesContext);

    const itemIsFavorite=favoritesCtx.itemIsFavorite(props.id);

    function togglefavoritestatushandler(){
       if(itemIsFavorite){
        favoritesCtx.removeFavorite(props.id);
       }
       else{
        favoritesCtx.addFavorite({   
          id:props.id,
          title:props.title,
          description:props.description,
          image:props.image,
          address:props.address,
        });
        //when addfavourite excecutes the state of userfavourites under Favcotxprovide component changes and
        // the ui is updated and new values of context are passed again 
       }
    }
    return <li className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={togglefavoritestatushandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
        </div>
        </Card>
    </li>
}
export default Meetupitem;
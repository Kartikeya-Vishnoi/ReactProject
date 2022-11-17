 import { createContext , useState} from 'react';
 import React from 'react';
//import { Component } from 'react';

 //create a context to manage state
const FavoritesContext=createContext({
    favorites:[],
    totalFavorites:0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite:(meetupId) => {},
    itemIsFavorite:(meetupId) => {}
});

//This Component handles the values of the context and provides them to the components in need
//as we wrap it around the app element in the index.js

    export function FavoritesContextProvider(props){

    //here userfavorites is passed passed to the context favourites....when array userfavorites change the context
    //is updated and so the elements wrapped around it can access them 

    const [userFavorites,setUserFavorites]=useState([]);
       
    function addFavoriteHandler(favoriteMeetup){
         setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
         })
    }
    
    function removeFavoriteHandler(meetupId){
          setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
          });
    }

    function itemIsFavoriteHandler(meetupId){
          
            return userFavorites.some(meetup => meetup.id === meetupId);
    }

    // this stores the current value of the context
     const context={
         favorites:userFavorites,
         totalfavorites:userFavorites.length,
         addFavorite:addFavoriteHandler,
         removeFavorite:removeFavoriteHandler,
         itemIsFavorite:itemIsFavoriteHandler
     };
    return( 
    <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>);
     //Favouritescontext exposes a method Provider in which we pass the current value of the context
}
export default FavoritesContext;
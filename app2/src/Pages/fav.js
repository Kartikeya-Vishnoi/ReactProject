import { useContext } from 'react';

import FavoritesContext from '../store/favourite-context';
import MeetupList from '../Meetups/MeetupList';

function Fav() {
  //use context is used to used to connect with a context 
  const favoritesCtx = useContext(FavoritesContext);
  //console.log(favoritesCtx.favourites);
   let content=<MeetupList meetups={favoritesCtx.favorites} />
   
   if(favoritesCtx.totalFavorites === 0){
    content=<h1>You got no Favorites...Start Adding Some??</h1>;;
   }
   
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default Fav;


// import { useContext } from 'react';

// import favouritescontext from '../store/favourite-context';
// import MeetupList from '../Meetups/MeetupList';

// function Fav(){
//     const favctx=useContext(favouritescontext);

//     var content;
//     content=<p>No Meetups added to your favorite yet!!....Start adding some??</p>
//     if(favctx.totalfavourites===0){
        
//     }
//     else{
//         content=<MeetupList meetups={favctx.favourites} />
//     }
//     return(
//         <section>
//         <h1>
//             My Favorites
//         </h1>
        
//         </section>
        
        
    
//     );
// }
// export default Fav;
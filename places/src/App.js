import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';


import './App.css';
import Users from './user/pages/users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/Components/MainNavigation';
import UserPlaces from "../src/places/pages/UserPlaces"
function App() {
 return(
  <Router>
    <MainNavigation/>
    <main>
    <Routes>
     <Route path='/' element={<Users />}/>
     <Route path='/places/new' element={<NewPlace/>}/>
     <Route path='/:userId/places' element={<UserPlaces/>} />
     <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
    </main>
  </Router>
 )
}

export default App;
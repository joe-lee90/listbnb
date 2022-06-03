import './App.css';
import {Route} from "react-router-dom";
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'
import AddListingPage from './pages/AddListingPage';
import UserProfilePage from './pages/UserProfilePage';

function App() {
  return (
    <div className="App">
      <h1>listbnb 🏡 </h1>
      <NavBar />
      <Route path='/add-listing'><HomePage/> </Route>
      <Route path='/'><AddListingPage/> </Route>
      <Route path='/user-profile'><UserProfilePage/> </Route>
    </div>
  );
}

export default App;


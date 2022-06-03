import './App.css';
import {Route, Switch} from "react-router-dom";
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'
import AddListingPage from './pages/AddListingPage';
import UserProfilePage from './pages/UserProfilePage';

function App() {
  return (
    <div className="App">
      <h1>listbnb 🏡 </h1>
      <NavBar />
      <Switch>
      <Route path='/add-listing'><AddListingPage/> </Route>
      <Route path='/user-profile'><UserProfilePage/> </Route>
      <Route path='/'><HomePage/> </Route>
      </Switch>
    </div>
  );
}

export default App;


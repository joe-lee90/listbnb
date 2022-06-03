import React, { createContext, useContext, useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import AddListingPage from "./pages/AddListingPage";
import UserProfilePage from "./pages/UserProfilePage";

const UserContext = createContext(null);

export function useAuthenticatedUser() {
  return useContext(UserContext);
}

function App() {
  const [user, setUser] = useState(null);

  function signup(name, image, username, password, passwordConfirmation) {
    fetch(
      "/signup?" +
        new URLSearchParams({
          name,
          image,
          username,
          password,
          passwordConfirmation,
        }),
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then(setUser);
  }

  function login(username, password) {
    fetch("/login?" + new URLSearchParams({ username, password }), {
      method: "POST",
    })
      .then((res) => res.json())
      .then(setUser);
  }

  function logout() {
    fetch("/logout?" + new URLSearchParams({ username: user.username }), {
      method: "DELETE",
    }).then(() => setUser(null));
  }

  const auth = { signup, login, logout };

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <h1>listbnb 🏡 </h1>
        <NavBar auth={auth} />
        <Switch>
          <Route path="/add-listing">
            <AddListingPage />
          </Route>
          <Route path="/user-profile">
            <UserProfilePage />
          </Route>
          <Route path="/">
            <HomePage auth={auth} />
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;

import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Admin from "./js/admin";
import User from "./js/user";
import UsersLogged from "./js/usersLogged";
import {Route, useLocation, Link, BrowserRouter as Router} from 'react-router-dom'





function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function App() {

    let query = useQuery()

    useEffect(() => {

    }, []);

   /* function addToUserList(user) {
        return setUsersList(oldArray => [...oldArray, user])
    }*/

    return (
        <div className="App">
            {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
            <Route path='/admin' component={() => <Admin/>}/>
            <Route path='/user' component={() => <User  name={query.get('name')}/>}/>
        </div>
    );
}

export default App;

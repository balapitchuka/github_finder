import React, {Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import UserItem from './components/users/UserItem'

class App extends  Component{
   
   name = "Ironman"
   render() {
    return (
      <div className="App">
        <Navbar />
        <UserItem ></UserItem>
      </div>
    );
   }
 
}

export default App;

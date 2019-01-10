import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Album from './components/Album/Album.js'
import Photo from './components/Photo/Photo.js'
import 'bootstrap/dist/css/bootstrap.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path="/" component={Album}/>
        <Route exact path="/photos/:id" component={Photo}/>
        </Switch>
      </div>
    );
  }
}

export default App;

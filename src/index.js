import React from 'react'
import ReactDOM from 'react-dom'
import 'css/index.css'
import Home from './components/Home'
import About from './components/About'
import Error404 from './components/Error404'
import WebService from './components/WebServ'
import Header from './components/Header'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import WebServ from './components/WebServ'

const root = document.getElementById('root')

  const App = () => {
    
    return(
    <div>
      
        <Router>
        <Header></Header>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/web">
            <WebService />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*" component={Error404} />
        </Switch>
        </Router>

    </div>
    )
  }



  ReactDOM.render(<App />, root)

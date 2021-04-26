import React from 'react'
import ReactDOM from 'react-dom'
import 'css/index.css'
import Home from './components/Home'
import About from './components/About'
import Error404 from './components/Error404'
import Header from './components/Header'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const root = document.getElementById('root')

  
  function Users() {
    return <h2>Users</h2>;
  }
  const App = () => {
    
    return(
    <div>
      
        <Router>
        <Header></Header>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services/web">
            <Users />
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

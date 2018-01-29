import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import Test from '../components/test'
import Home from './home'
import Main from './main'
import IndiFeed from './indifeed'

import '../style/main.css'

// {/*<div className="g-signin2" data-onsuccess="onSignIn"></div>*/}

class App extends Component {

    state = {
        isLoggedIn: false
    }

    componentDidMount() {

    }

    render() {

        return (
            <Router>
                <div>
                    <Route exact path='/' component={Home} />
                    <Route path='/home' component={Main}/>
                    <Route path='/home/feed' component={IndiFeed}/>
                </div>
            </Router>


        )
    }

}

    export default App
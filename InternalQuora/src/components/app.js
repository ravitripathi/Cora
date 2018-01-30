import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Link, Route, browserHistory } from 'react-router-dom'

import Test from '../components/test'
import Home from './home'
import Main from './main'
import IndiFeed from './indifeed'
import Profile from './profile'
import PostQuestion from './postquestion'
import Notification from './notification'
import '../style/main.css'

// {/*<div className="g-signin2" data-onsuccess="onSignIn"></div>*/}

class App extends Component {

    state = {
        isLoggedIn: false
        isLoggedIn: false,
        user: {

        }
    }

    componentDidMount() {

        console.log('Reach')
        // axios({
        //     method: 'get',
        //     url: 'http://localhost:3000/slack'
        // })
        //     .then(function (response) {
        //         console.log(response)
        //     }.bind(this))
        //     .catch(function (error) {
        //         console.log(error)
        //     })
    }

    render() {

        return (
            <Router>
            <Router history={browserHistory}>
                <div>
                    <Route exact path='/' component={Home} />
                    <Route path='/home' component={Main}/>
                    <Route path='/home/feed' component={IndiFeed}/>
                    <Route path='/home/profile' component={Profile} />
                    <Route path='/home/post' component={PostQuestion} />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/home' component={Main}/>
                        <Route exact path='/home/feed/:component' component={IndiFeed}/>
                        <Route exact path='/home/notification' component={Notification}/>
                    </Switch>
                </div>
            </Router>


        )
    }

}

    export default Appexport default App
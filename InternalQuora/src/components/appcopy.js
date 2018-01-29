import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import Test from '../components/test'

// {/*<div className="g-signin2" data-onsuccess="onSignIn"></div>*/}

class App extends Component {

    state = {
        customers: []
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://localhost:3000/test'
        })
            .then(function (res) {
                console.log(res)
                this.setState({customers: res.data})
            }.bind(this))
            .catch(function (err) {
                console.log(err)
            })

        axios({
            method: 'get',
            url: 'https://slack.com/api/oauth.access',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {
                client_id: '251309058049.304853128231',
                client_secret: 'cabb1bb3e5ae76d6dfd09913b03da6ce',
                code: '251309058049.304714844070.ebd7964727e4420712540f5d0f5ca840ce62600a4a95d991f268e87d30e71f21',
                redirect_uri: 'http://localhost:8080'
            }
        })
            .then(function (response) {
                console.log(response)
            })
    }

    render() {
        const { customers } = this.state

        return (
            <Router>
                <div>
                    {customers ? (
                        customers.map((row, index) => (
                            <Link to={`/g/${row.id}`}>
                                <p>
                                    {row.firstName}
                                </p>
                            </Link>
                        ))
                    ): (
                        <div>...Loading</div>
                    )}
                    <Route path='/g/:customerId' component={Test} />
                    <a href="https://slack.com/oauth/authorize?scope=identity.basic+identity.email&client_id=304468210898.305541541543"><img src="https://api.slack.com/img/sign_in_with_slack.png" /></a>
                    <a href='http://localhost:3000/google'>Login</a>
                </div>

            </Router>


        )
    }

}

export default App
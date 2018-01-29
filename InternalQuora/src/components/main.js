import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Header from './header'
import Feed from './feed'
import IndiFeed from './indifeed'

class Main extends Component {
    render() {
        return (
            <div className='container Main'>
                <Header />
                <Route exact path='/home' component={Feed}/>
            </div>
        )
    }
}

export default Main
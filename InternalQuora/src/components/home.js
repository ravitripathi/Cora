import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Main from "./main";

class Home extends Component {
    render() {
        return (
            <div className='container Home'>
                <div className='row'>
                    <div className='col-lg-4 col-lg-offset-4 text-center MainTitle'>
                        CORA
                        <div className='TitleSlogan'>
                            Knowledge.Simplified!!!
                        </div>
                        <div className='OauthButton'>
                            <Link to={`/home`}>
                                <button className="btn-integration">
                                    <span className="icon slack"></span>
                                    <span>Slack</span>
                                </button>
                            </Link>
                            <Link to={`/home`}>
                                <button className="btn-integration">
                                    <span className="icon google"></span>
                                    <span>Google</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
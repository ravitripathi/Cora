import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Indifeed from './indifeed';
import axios from 'axios';

class Profile extends Component {

    state = {
        qactive: false,
        aactive: false,
        catactive: false,
        isFeedVisible: false,
        name: '0',
        imageURL : '0',
        followers : '0',
        following : '0',
        questions : '0',
        category : '0',
        answers : '0',
    }

    getProfile(user){
        axios.post("http://10.177.7.61:8080/user/getProfile"+"?userId="+user)
        .then(function (response) {
            this.setState({name: response.data.name,
                imageURL: response.data.imageUrl,
                followers : response.data.followers,
                following : response.data.following,
                questions : response.data.questions,
                category : response.data.category,
                answers : response.data.questionAnsweredCount,
            })
        
        
        }.bind(this))
        .catch(function (error) {
            console.log(error);
        });
    }
    
    getQuestionsAnsByUser(user) {
        axios.post("http://10.177.7.117:8080/questionAnswer/questionAnswerByUserId"+"?userId="+user)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    toggleClass(variable) {
        console.log(variable)
        if (variable == 'cat') {
            this.setState(
                {
                    qactive: false,
                    aactive: false,
                    catactive: true
                })

        } else if (variable == 'questions') {
            this.setState({
                qactive: true,
                aactive: false,
                catactive: false
            })
        } else {
            this.setState({
                qactive: false,
                aactive: true,
                catactive: false
            })
        }

        this.setState({ isFeedVisible: true })
        this.getQuestionsAnsByUser("jayantrana69@gmail.com");
        // this.getProfile("jayantrana69@gmail.com");
        // Indifeed.setState({active:variable});
    };



    render() {
    
        const { name } = this.state
        const { imageURL } = this.state
        const {followers} = this.state
        const {following} = this.state
        const {questions} = this.state
        const {category} = this.state
        const {answers} = this.state
       
        this.getProfile("jayantrana69@gmail.com")

        return (
            <div className='container Profile'>
                <div className="panel-body" style={{ textAlign: 'center' }}>
                    <img className='ng-binding'
                        src={imageURL}
                        width="150" height='150' style={{ borderRadius: '50%' }}
                    />
                    <h1 id="name">{name}</h1>
                    <div className="tags" value="'Followers'">
                        <span ng-bind="value" className="tags-title ng-binding" style={{ textAlign: 'center' }}>Followers: {followers}</span>
                    </div>

                    <div className="tags" value="'Following'">
                        <span ng-bind="value" className="tags-title ng-binding" style={{ textAlign: 'center' }}>Following: {following}</span>
                    </div>
                </div>

                <div className="bucket-container ng-scope" style={{ textAlign: 'center', margin: '-10px' }}>
                    <ul>
                        <li className="bucket-list">
                            <div id="questions"
                                className={this.state.qactive ? 'buckets orange active' : 'buckets purple'}
                                onClick={(e) => this.toggleClass("questions")} >
                                <div className="buckets-content">
                                    <div className="bucket-heading">Questions</div>
                                    <div className="bucket-value">{questions}</div>
                                </div>
                            </div>
                        </li>

                        <li className="bucket-list">
                            <div id="cat"
                                className={this.state.catactive ? 'buckets orange active' : 'buckets purple'}
                                onClick={(e) => this.toggleClass("cat")}>
                                <div className="buckets-content">
                                    <div className="bucket-heading">Categories subscribed to</div>
                                    <div className="bucket-value">{category}</div>
                                </div>
                            </div>
                        </li>

                        <li className="bucket-list">
                            <div id="ans"
                                className={this.state.aactive ? 'buckets orange active' : 'buckets purple'}
                                onClick={(e) => this.toggleClass("ans")}>
                                <div className="buckets-content">
                                    <div className="bucket-heading">Answers</div>
                                    <div className="bucket-value">{answers}</div>
                                </div>
                            </div>
                        </li>

                    </ul>


                </div>
                {!this.state.isFeedVisible ?
                    '' : <div className='row'>
                        <Indifeed />
                    </div>
                }

            </div>
        )
    }
}

export default Profile
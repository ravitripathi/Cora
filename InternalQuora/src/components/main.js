import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import { debounce } from 'throttle-debounce';


import Header from './header'
import Feed from './feed'
import Search from "./search";

const BASE_URL = 'http://'
const LOGIN_IP = '10.177.7.61'
const LOGIN_PORT = 8080
const LOGIN_END = '/user/login'

const SEARCH_IP = '10.177.7.93'
const SEARCH_PORT = 8080
const SEARCH_END = '/question/autoSuggest/'

const USER = JSON.parse(localStorage.getItem('user'))

class Main extends Component {

    state = {
        user: USER,
        isSearchOn: false,
        searchQuery: '',
        searched: [{
            category: '',
            questionId: '',
            tags: [],
            title: '',
            userName: ''
        }]
    }

    // callSearch(event) {
    //     axios({
    //         method: 'get',
    //         url: BASE_URL + SEARCH_IP + ':' + SEARCH_PORT + SEARCH_END + event.target.value
    //     })
    //         .then(function (response) {
    //             let data = response.data
    //             let tempsearch = this.state.searched.slice()
    //             tempsearch.splice(0,100)
    //             for (var i=0; i<data.length; i++) {
    //                 tempsearch.push({
    //                     category: data[i].category,
    //                     questionId: data[i].questionId,
    //                     tags: data[i].tags,
    //                     title: data[i].title,
    //                     userName: data[i].userName
    //                 })
    //             }
    //             this.setState({searched: tempsearch})
    //             console.log(this.state.searched)
    //         }.bind(this))
    //         .catch(function (error) {
    //             console.log(error)
    //         })
    // }

    addSearch = (event) => {

        // setTimeout(this.callSearch(event), 10000)
        event.persist()
        debounce(1000, () => {
            console.log('value :: ', event.target.value);
            if (event.target.value == '') {
                this.setState({isSearchOn: false})
            } else {
                this.setState({isSearchOn: true})
                axios({
                    method: 'get',
                    url: BASE_URL + SEARCH_IP + ':' + SEARCH_PORT + SEARCH_END + event.target.value
                })
                    .then(function (response) {
                        let data = response.data
                        console.log(data)
                        let tempsearch = this.state.searched.slice()
                        tempsearch.splice(0,100)
                        for (var i=0; i<data.length; i++) {
                            tempsearch.push({
                                category: data[i].category,
                                questionId: data[i].questionId,
                                tags: data[i].tags,
                                title: data[i].title,
                                userName: data[i].userName
                            })
                        }

                        this.setState({searched: tempsearch})

                        console.log('Searched')
                        console.log(this.state.searched)
                    }.bind(this))
                    .catch(function (error) {
                        console.log(error)
                    })
            }

        })()
    }

    componentDidMount() {

        if(this.state.searched[0].questionId == ''){
            this.state.searched.splice(0, 1);
        }

        console.log('Main' + this.state.isSearchOn)

        if (!this.state.user) {
            let code = this.props.location.search;
            code = code.split('=')[1]
            code = code.split('&')[0]
            console.log(code)
            console.log('Reach Main')
            axios({
                method: 'get',
                url: 'https://slack.com/api/oauth.access?client_id=304468210898.305541541543&client_secret=d93eb31dd7fbb9217ceeb713da523b2d&code=' + code,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .then(function (response) {


                    let name = response.data.user.name
                    let userId = response.data.user.email
                    let imageUrl = response.data.user.image_24
                    let id = response.data.user.id

                    this.setState({user: {name: name, userId: userId, imageUrl: imageUrl, id: id}})
                    console.log(this.state.user)
                    localStorage.setItem('user', JSON.stringify(this.state.user));
                    let token = response.data.access_token
                    console.log(token)
                    axios({
                        method: 'post',
                        url: BASE_URL + LOGIN_IP + ':' + LOGIN_PORT + LOGIN_END,
                        data: {
                            name: name,
                            imageUrl: imageUrl,
                            userId: userId,
                            role: 1
                        }
                    })
                        .then(function (respo) {
                            console.log(respo)
                        })
                        .catch(function (er) {
                            console.log(er)
                        })
                    // console.log(token)
                    // axios({
                    //     method: 'get',
                    //     url: 'https://slack.com/api/users.profile.get?token=' + token,
                    //     headers: {
                    //         'Content-Type': 'application/x-www-form-urlencoded'
                    //     }
                    // })
                    //     .then(function (resp) {
                    //         // const userDetail = {
                    //         //     name: name,
                    //         //     imageUrl: imageUrl,
                    //         //     userId: userId,
                    //         //     id: id
                    //         // }
                    //         console.log(resp)
                    //
                    //         //console.log(resp.data.profile.email)
                    //         // res.json(userDetail);
                    //         res.redirect('http://localhost:8080/home')
                    //     })
                    //     .catch(function (error) {
                    //         // console.log(error)
                    //     })
                }.bind(this))
                .catch(function (err) {
                    console.log(err)
                })
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


    }

    render() {
        const { user, isSearchOn, searched } = this.state

        return (
            <div className='container Main'>
                <Header user={user} addSearch={this.addSearch.bind(this)} />
                {isSearchOn ?
                    <div className='container Search'>
                        <div className="panel panel-warning">
                            <div className="panel-heading">
                                <h3 className="panel-title">Search</h3>
                            </div>
                            <div className="panel-body">
                                {searched.length>0 &&(
                                    <div>
                                        {searched.map((row, index) => (
                                            <div className='col-lg-12' eventKey={index} key={index}>
                                                <Link to={`/home/feed/${row.questionId}`}><a><h5>{row.title}</h5></a></Link>
                                                <span className='pull-right AuthorName'>By: <a>{row.userName}</a></span>
                                                <h6>Category: {row.category}</h6>
                                                <div>
                                                    <p>Tags :
                                                        {row.tags.map((item) => (
                                                            <span className='custom-label' key={item}>{item}</span>
                                                        ))}
                                                    </p>
                                                </div>
                                                <hr />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div> :
                    <Route exact path='/home' component={Feed}/>
                }
            </div>
        )
    }
}

export default Main
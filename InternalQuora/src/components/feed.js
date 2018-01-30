import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const BASE_URL = 'http://'
const FEED_IP = '10.177.7.86'
const FEED_PORT = 8080
const FEED_END = '/notifications/feed'

const USER = JSON.parse(localStorage.getItem('user'))

class Feed extends Component {

    state = {
        user: USER,
        category: [{}],
        sport: [{
            active: true,
            category: '',
            content: '',
            imageUrl: '',
            questionId: '',
            tags: [],
            timestamp: '',
            title: '',
            userId: '',
            userName: ''
        }],
        food: [{
            active: true,
            category: '',
            content: '',
            imageUrl: '',
            questionId: '',
            tags: [],
            timestamp: '',
            title: '',
            userId: '',
            userName: ''
        }],
        technology: [{
            active: true,
            category: '',
            content: '',
            imageUrl: '',
            questionId: '',
            tags: [],
            timestamp: '',
            title: '',
            userId: '',
            userName: ''
        }],
        news: [{
            active: true,
            category: '',
            content: '',
            imageUrl: '',
            questionId: '',
            tags: [],
            timestamp: '',
            title: '',
            userId: '',
            userName: ''
        }],
        general: [{
            active: true,
            category: '',
            content: '',
            imageUrl: '',
            questionId: '',
            tags: [],
            timestamp: '',
            title: '',
            userId: '',
            userName: ''
        }],
        feed: [
            {
                active: true,
                category: '',
                content: '',
                imageUrl: '',
                questionId: '',
                tags: '',
                timestamp: '',
                title: '',
                userId: ''
            }
        ]
    }

    componentDidMount() {
        console.log(this.state.user.userId)
        axios({
            method: 'post',
            url: BASE_URL + FEED_IP + ':' + FEED_PORT + FEED_END + '?user_id=' + this.state.user.userId
        })
            .then(function (response) {
                console.log(response)
                let data = response.data
                this.setState({category: data})
                this.setState({sport: this.state.category.Sport})
                this.setState({news: this.state.category.News})
                this.setState({general: this.state.category.General})
                this.setState({technology: this.state.category.Technology})
                this.setState({food: this.state.category.Food})
                console.log(this.state.sport)
                // console.log(this.state.category.Sport)
                // console.log(data)
                // for (var i=0; i<data.length; i++) {
                //     tempfeed.push({
                //         category: data[i].category,
                //         questionId: data[i].questionId,
                //         tags: data[i].tags,
                //         title: data[i].title
                //     })
                // }
                // this.setState({searched: tempfeed})
            }.bind(this))
            .catch(function (error) {
                console.log(error)
            })


    }

    render() {
        const { category, sport, news, food, general, technology } = this.state

        return (
            <div className='container Feed'>
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Top Feed</h3>
                    </div>
                    <div className="panel-body">
                        <div className='row'>
                            {sport.map((row, index) => (
                                <div className='col-lg-12'>
                                    <Link to={`/home/feed/${row.questionId}`}><a><h5>{row.title}</h5></a></Link>
                                    <span className='pull-right AuthorName'>By: <a>{row.userName}</a></span>
                                    <h6>Category: {row.category}</h6>
                                    <p>{row.content}</p>
                                    <p>Tags :
                                        {row.tags.map((item) => (
                                            <span className='custom-label' key={item}>{item}</span>
                                        ))}
                                    </p>
                                    <hr />
                                </div>
                            ))}
                            {news.map((row, index) => (
                                <div className='col-lg-12'>
                                    <Link to={`/home/feed/${row.questionId}`}><a><h5>{row.title}</h5></a></Link>
                                    <span className='pull-right AuthorName'>By: <a>{row.userName}</a></span>
                                    <h6>Category: {row.category}</h6>
                                    <p>{row.content}</p>
                                    <p>Tags :
                                        {row.tags.map((item) => (
                                            <span className='custom-label' key={item}>{item}</span>
                                        ))}
                                    </p>
                                    <hr />
                                </div>
                            ))}
                            {technology.map((row, index) => (
                                <div className='col-lg-12'>
                                    <Link to={`/home/feed/${row.questionId}`}><a><h5>{row.title}</h5></a></Link>
                                    <span className='pull-right AuthorName'>By: <a>{row.userName}</a></span>
                                    <h6>Category: {row.category}</h6>
                                    <p>{row.content}</p>
                                    <p>Tags :
                                        {row.tags.map((item) => (
                                            <span className='custom-label' key={item}>{item}</span>
                                        ))}
                                    </p>
                                    <hr />
                                </div>
                            ))}
                            {general.map((row, index) => (
                                <div className='col-lg-12'>
                                    <Link to={`/home/feed/${row.questionId}`}><a><h5>{row.title}</h5></a></Link>
                                    <span className='pull-right AuthorName'>By: <a>{row.userName}</a></span>
                                    <h6>Category: {row.category}</h6>
                                    <p>{row.content}</p>
                                    <p>Tags :
                                        {row.tags.map((item) => (
                                            <span className='custom-label' key={item}>{item}</span>
                                        ))}
                                    </p>
                                    <hr />
                                </div>
                            ))}
                            {food.map((row, index) => (
                                <div className='col-lg-12'>
                                    <Link to={`/home/feed/${row.questionId}`}><a><h5>{row.title}</h5></a></Link>
                                    <span className='pull-right AuthorName'>By: <a>{row.userName}</a></span>
                                    <h6>Category: {row.category}</h6>
                                    <p>{row.content}</p>
                                    <p>Tags :
                                        {row.tags.map((item) => (
                                            <span className='custom-label' key={item}>{item}</span>
                                        ))}
                                    </p>
                                    <hr />
                                </div>
                            ))}
                            {/*<div className='col-lg-4'>*/}
                                {/*<img className='img-responsive' src='../img/2013-lebron-11-away-commercial-04.jpg' />*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feed
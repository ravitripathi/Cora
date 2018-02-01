import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const BASE_URL = 'http://'
const INFEED_IP = '10.177.7.117'
const INFEED_PORT = 8080
const QUES_END = '/questionAnswer/getQuestionByQuestionId/?questionId='
const ANSW_END = '/questionAnswer/getAnswersByQuestionId/'

var USER = JSON.parse(localStorage.getItem('user'))

class IndiFeed extends Component {
    state = {
        question: {
            active: true,
            category: '',
            content: '',
            imageUrl: '',
            questionId: '',
            tags: [],
            timestamp: '',
            title: '',
            userId: '',
            userName: '',


            //For answers
            answer: 'this is an answer',
            file: '',

        },
        answers: [
            {}
        ]
    }

    postA() {
        let content = this.refs.answer.value;
        const data = new FormData();
        data.append('questionId', this.props.match.params.component);
        data.append('userId', USER.userId);
        data.append('answer', content);

        let qid = this.props.match.params.component

        if (this.state.file) {
            data.append('file', this.state.file);
            axios.post('http://10.177.7.117:8080/questionAnswer/addAnswer', data)
                .then(function (response) {
                    console.log(response.data)
                    axios({
                        method: 'post',
                        url: BASE_URL + INFEED_IP + ':' + INFEED_PORT + QUES_END + qid
                    })
                        .then(function (response) {
                            console.log(response)
                            this.refs.answer.value = ''
                            let data = response.data
                            this.setState({
                                question: data
                            })
                            axios({
                                method: 'get',
                                url: BASE_URL + INFEED_IP + ':' + INFEED_PORT + ANSW_END + qid
                            })
                                .then(function (response) {
                                    console.log(response)
                                    let data = response.data.answerDTOList
                                    this.setState({answers: data})
                                    console.log('Answers')
                                    console.log(this.state.answers)
                                }.bind(this))
                                .catch(function (error) {
                                    console.log(error)
                                })
                        }.bind(this))
                        .catch(function (error) {
                            console.log(error)
                        })
                    alert('Thanks for answering')
                }.bind(this))
                .catch(function (error) {
                    console.log(error);
                    alert('Could not add Answer')
                });
        }
        else {
            axios.post('http://10.177.7.117:8080/questionAnswer/addAnswerWithoutImage', data)
                .then(function (response) {
                    console.log(response.data)
                    this.refs.answer.value = ''
                    axios({
                        method: 'post',
                        url: BASE_URL + INFEED_IP + ':' + INFEED_PORT + QUES_END + qid
                    })
                        .then(function (response) {
                            console.log(response)
                            let data = response.data
                            this.setState({
                                question: data
                            })
                            axios({
                                method: 'get',
                                url: BASE_URL + INFEED_IP + ':' + INFEED_PORT + ANSW_END + qid
                            })
                                .then(function (response) {
                                    console.log(response)
                                    let data = response.data.answerDTOList
                                    this.setState({answers: data})
                                    console.log('Answers')
                                    console.log(this.state.answers)
                                }.bind(this))
                                .catch(function (error) {
                                    console.log(error)
                                })
                        }.bind(this))
                        .catch(function (error) {
                            console.log(error)
                        })
                    alert('Thanks for answering')
                }.bind(this))
                .catch(function (error) {
                    console.log(error);
                    alert('Could not add Answer')
                });
        }
    }

    handleFile(e) {
        this.setState({file: e.target.files[0]})
        console.log(e.target.files[0]);

    }


    componentDidMount() {
        console.log('Indifeed')
        console.log(this.props)
        let qid = this.props.match.params.component
        axios({
            method: 'post',
            url: BASE_URL + INFEED_IP + ':' + INFEED_PORT + QUES_END + qid
        })
            .then(function (response) {
                console.log(response)
                let data = response.data
                this.setState({
                    question: data
                })
                axios({
                    method: 'get',
                    url: BASE_URL + INFEED_IP + ':' + INFEED_PORT + ANSW_END + qid
                })
                    .then(function (response) {
                        console.log(response)
                        let data = response.data.answerDTOList
                        this.setState({answers: data})
                        console.log('Answers')
                        console.log(this.state.answers)
                    }.bind(this))
                    .catch(function (error) {
                        console.log(error)
                    })
            }.bind(this))
            .catch(function (error) {
                console.log(error)
            })
    }

    render() {
        const {question, answers} = this.state

        return (
            <div className='container IndiFeed'>
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">{question.title}</h3>
                    </div>
                    <div className="panel-body">
                        <div className='row'>
                            <div className='col-lg-12'>
                                {question.imageUrl == '' ?
                                    <img className='img-responsive FeedImage' src={question.imageUrl}/> :
                                    <img className='img-responsive FeedImage' src='http://www.nmgncp.com/data/out/252/5835014-nike-wallpapers-for-computers.jpg' />
                                }

                            </div>
                            <div className='col-lg-3 pull-right'>By: {question.userName}</div>
                            <div className='col-lg-3'>Category: {question.category}</div>
                            <p>Tags :
                                {question.tags.map((item) => (
                                    <span className='custom-label' key={item}>{item}</span>
                                ))}
                            </p>

                            <div className='col-lg-12 RealDesc'>
                                <p>{question.content}</p>
                            </div>
                        </div>
                    </div>
                    {answers ?
                        <div className="panel-footer">
                            <div className='row'>
                                <h4>Answers: </h4>
                                {answers.map((row, index) => (
                                    <div className='col-lg-12'>
                                        <span className='pull-right AuthorName'>By: <a>{row.userName}</a></span>
                                        <p>{row.answer}</p>
                                        <Link to={`/home/comment/${row.answer}/${row.id}/${row.userId}/${row.userName}`}>
                                            New Comment
                                        </Link>
                                        <hr/>
                                    </div>
                                ))}
                            </div>
                        </div> :
                        ''
                    }
                    <textarea ref="answer" className="form-control AnswerQues" rows="4" placeholder="Add Answer"/>


                    <button style={{margin: '40px'}} type="button" className="btn btn-default"
                            onClick={(e) => this.postA()}>
                        Answer
                    </button>

                    <input type="file" onChange={(e) => this.handleFile(e)}/>


                </div>
            </div>
        )
    }
}

export default IndiFeed
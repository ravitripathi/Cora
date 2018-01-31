import React, { Component } from 'react'
import axios from 'axios'

const BASE_URL = 'http://'
const INFEED_IP = '10.177.7.117'
const INFEED_PORT = 8080
const QUES_END = '/questionAnswer/getQuestionByQuestionId/?questionId='
const ANSW_END = '/questionAnswer/getAnswersByQuestionId/'


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
            userName: ''
        },
        answers: [
            {

            }
        ]
    }

    componentDidMount() {
        console.log('Indifeed')
        console.log(this.props.match.params.component)
        let qid = this.props.match.params.component
        axios({
            method: 'post',
            url: BASE_URL + INFEED_IP + ':' + INFEED_PORT + QUES_END + qid
        })
            .then(function (response) {
                //console.log(response)
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
        const { question, answers } = this.state

        return (
            <div className='container IndiFeed'>
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">{question.title}</h3>
                    </div>
                    <div className="panel-body">
                        <div className='row'>
                            <div className='col-lg-12'>
                                <img className='img-responsive FeedImage' src={question.imageUrl} />
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
                    <div className="panel-footer">
                        <div className='row'>
                            <h4>Answers: </h4>
                            {answers.map((row, index) => (
                                <div className='col-lg-12'>
                                    <span className='pull-right AuthorName'>By: <a>{row.userName}</a></span>
                                    <p>{row.answer}</p>
                                    <hr />
                                </div>
                            ))}
                            <textarea className="form-control AnswerQues" rows="4" max-lines="10" placeholder="Add Answer"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IndiFeed
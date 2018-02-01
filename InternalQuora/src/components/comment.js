import React, { Component } from 'react'
import axios from 'axios'

var USER = JSON.parse(localStorage.getItem('user'))

class Comment extends Component {

    state = {
        answer : {
            answer: '',
            answerId: '',
            userId: '',
            userName: ''
        },
        answerFetched: false,
        comment : [
            {
                commentId: '',
                answerId: '',
                comment: '',
                timestamp: '',
                userId: '',
                userName: ''
            }
        ]
    }

    postComment() {
        let tempanswer = this.props.match.params
        console.log(tempanswer)
        let content = this.refs.commentTextArea.value;
        axios({
            method: 'post',
            url: 'http://10.177.7.117:8080/questionAnswer/addComment',
            data: {
                "comment" : content,
                "userId" : USER.userId,
                "answerId" : this.props.match.params.answerId
            }
        }).then(function (response) {
            console.log(response.data)
            axios({
                method: 'get',
                url: 'http://10.177.7.117:8080/questionAnswer/getCommentsByAnswerId/' + tempanswer.answerId
            })
                .then(function (response) {
                    console.log(response)
                    this.refs.commentTextArea.value = ''
                    let data = response.data.commentDTOList
                    let tempcomment = this.state.comment.slice()
                    tempcomment.splice()
                    this.setState({comment: data})
                    console.log(this.state.comment)
                }.bind(this))
                .catch(function (error) {
                    console.log(error)
                })
        }.bind(this))
            .catch(function (error) {
                console.log(error);
                alert('Could not add Comment')
            });
    }

    componentWillMount() {
        let tempanswer = this.props.match.params
        console.log(tempanswer)
        this.setState({
            answer: tempanswer
        })
        console.log(this.state.answer)
        console.log(this.state.answerFetched)
        if(this.state.answer != '') {
            this.setState({answerFetched: true})
        }
        console.log(this.state.answerFetched)

        axios({
            method: 'get',
            url: 'http://10.177.7.117:8080/questionAnswer/getCommentsByAnswerId/' + tempanswer.answerId
        })
            .then(function (response) {
                console.log(response)
                let data = response.data.commentDTOList
                let tempcomment = this.state.comment.slice()
                tempcomment.splice()
                this.setState({comment: data})
                console.log(this.state.comment)
            }.bind(this))
            .catch(function (error) {
                console.log(error)
            })
    }


    render() {

        const { answer, comment } = this.state

        return (
            <div>
                <div style={{ padding: '50px 0px' }}>
                    <div className="container">
                        <div className="customjumbotron">
                            <div className="row">
                                <div className="col-md-3">
                                    <profile-pic size="lg"

                                                 image-url="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgxKQ2hBgl1BFKaZlHzfhdG86GUKZ0jIajau7PgSh12MZM9hO'"
                                                 className="ng-scope ng-isolate-scope admin_pic">
                                        <span className="profile-pic ng-binding circle-lg" ng-bind="letters" ng-class="size_class"
                                              style={{ backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgxKQ2hBgl1BFKaZlHzfhdG86GUKZ0jIajau7PgSh12MZM9hO&quot' }}>
                                        </span>
                                    </profile-pic>
                                </div>
                                <div className="col-md-9">
                                    <p className="heading-4">{this.props.match.params.answer}</p>
                                    <p className="heading-6 font-light" style={{ textAlign: "right" }}>{this.props.match.params.userName}</p>
                                </div>
                            </div>
                        </div>

                        <div className="row" style={{ marginTop: '30px' }}>
                            <div className="col-md-12">
                                <div className="form-group has-feedback input-container-md">
                                        <textarea auto-grow=""
                                                  className="form-control ng-pristine ng-valid ng-empty ng-touched"
                                                  rows="4" max-lines="10"
                                                  ref="commentTextArea"
                                                  placeholder="Enter your comment here" ng-model="testarea2"
                                                  style={{ overflowY: 'hidden', height: '96px' }}>
                                        </textarea>
                                </div>
                                <div className="form-group" style={{ textAlign: 'right' }}>
                                    {!this.props.match.params.active ?
                                        <input type="submit" name="" value="Add Comment" className="btn btn-sm btn-primary" onClick={(e) => this.postComment()}>
                                        </input>
                                        :
                                        <input type="submit" name="" disabled value="Add Comment" className="btn btn-sm btn-primary" onClick={(e) => this.postComment()}>
                                        </input>
                                    }

                                </div>

                                {comment &&
                                    <p className="heading-4">Comments ({comment.length})</p>
                                }

                                {comment && comment.map((row, index) => (
                                    <div className="list-view-card comment_card">
                                        <div className="card-image">
                                            <profile-pic size="md" image-url="https://static1.squarespace.com/static/563186f5e4b0d916cf7ec6ce/t/563ad7a8e4b09a4c529b97e5/1446696874049/"></profile-pic>
                                        </div>
                                        <div className="card-details">
                                            <div className="card-title heading-5">{row.userName}</div>
                                            <ul className="card-sub-details">
                                                <li>
                                                <span>
                                                    {row.comment}
                                        </span>
                                                </li>
                                                <li style={{ textAlign: 'right' }}>
                                                    <div className="text-muted" style={{ textAlign: 'right' }}>
                                                        {row.timestamp}
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}



                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Comment
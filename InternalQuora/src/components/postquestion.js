import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import SkyLight from 'react-skylight';

import { List } from 'immutable'

import { TagBox } from 'react-tag-box'

const sampleTags = List(
    [].map(t => ({
        value: t
    }))
)

class PostQuestion extends Component {

    state = {
        showModal: false,
        showDrop: false,
        dropdownVal: 'Category',
        tags: sampleTags,
        selected: sampleTags.take(0),
        finalTAG: [],
        file: null,
        questionId: null,
    }



    handleFile(e) {
        this.setState({ file: e.target.files[0] })
        console.log(e.target.files[0]);
        var bodyFormData = new FormData();
        bodyFormData.set('questionId',this.state.questionId);
        bodyFormData.set('file', e.target.files[0])
        axios({
            method: 'post',
            url: 'http://10.177.7.117:8080/questionAnswer/addQuestionImage',
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(function (response) {
                alert('File uploaded!')
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                alert('Upload failed!')
                console.log(response);
            });

    }

    toggleDrop() {
        let current = this.state.showDrop;
        console.log(current)
        this.setState({ showDrop: !current })
    }

    handleChange(tags) {
        this.setState({ tags: tags })
    }

    postQ() {
        let content = this.refs.descTextArea.value;
        let title = this.refs.titleTextArea.value;

        let val = this.state.selected.toJS();
        let valarr = []
        for (var i = 0; i < val.length; i++) {
            valarr.push(val[i].value)
        }
    
        axios({
            method: 'post',
            url: 'http://10.177.7.117:8080/questionAnswer/addQuestion',
            data: {
                "title": title,
                "userId": "jayantrana69@gmail.com",
                "content": content,
                "active": true,
                "category": this.state.dropdownVal,
                "tags": valarr
            }
        }).then(function (response) {
            console.log(response.data)
            this.setState({ questionId: response.data })
            this.simpleDialog.show()
        }.bind(this))
            .catch(function (error) {
                console.log(error);
                alert('Could not add Question')
            });

       
    }
    render() {

        const { tags, selected } = this.state
        const onSelect = tag => {
            const newTag = {
                label: tag.label,
                value: tag.value || tag.label
            }

            this.setState({
                selected: selected.push(newTag)
            })
        }

        const remove = tag => {
            this.setState({
                selected: selected.filter(t => t.value !== tag.value)
            })
        }

        const placeholder = selected.isEmpty() ? '' :
            "Add tags. Use the backspace key to delete the last tag"


        return (
            <div className='container Profile'>
                <div className="panel-body" style={{ textAlign: 'center' }}>
                    <h1>Post a new Question</h1>
                    <div className="form-group has-feedback input-container-md">
                        <textarea
                            auto-grow=""
                            className="form-control ng-valid ng-dirty ng-valid-parse ng-touched ng-empty"
                            rows="2" max-lines="10" placeholder="Question Title"
                            ng-model="testarea2" name="message"
                            placeholder="Enter the question"
                            style={{ overflowY: 'scroll', height: '48px' }}
                            ref='titleTextArea'
                            value={this.state.titleTextAreaVal}
                            onChange={(event) => {
                                this.setState({
                                    titleTextAreaVal: event.target.value
                                });
                            }}
                        >
                        </textarea>
                    </div>
                    <div className="form-group has-feedback input-container-md">
                        <textarea
                            label="Description"
                            auto-grow=""
                            className="form-control ng-valid ng-dirty ng-valid-parse ng-touched ng-empty"
                            rows="4" max-lines="10" placeholder="Describe your question"
                            ng-model="testarea2" name="message"
                            style={{ overflowY: 'scroll', height: '96px' }}
                            ref='descTextArea'
                            value={this.state.descTextAreaVal}
                            onChange={(event) => {
                                this.setState({
                                    descTextAreaVal: event.target.value
                                });
                            }}
                        >
                        </textarea>

                        <div className={this.state.showDrop ? "btn-group ng-scope dropdown open" : "btn-group ng-scope dropdown"} uib-dropdown=""
                            onClick={(event) => { this.toggleDrop() }}>
                            <button className="btn btn-default btn-action dropdown-toggle" type="button" uib-dropdown-toggle="" aria-haspopup="true" aria-expanded={this.state.showDrop ? "true" : "false"}>
                                {this.state.dropdownVal}
                                <span className="icon-down-arrow-solid"></span>
                            </button>
                            <ul className="dropdown-menu" uib-dropdown-menu="" role="menu">
                                <li role="menuitem">
                                    <a onClick={(event) => { this.setState({ dropdownVal: 'General' }) }}>General</a>
                                </li>
                                <li role="menuitem">
                                    <a onClick={(event) => { this.setState({ dropdownVal: 'Food' }) }}>Food</a>
                                </li>
                                <li role="menuitem">
                                    <a onClick={(event) => { this.setState({ dropdownVal: 'Sport' }) }}>Sport</a>
                                </li>
                                <li role="menuitem">
                                    <a onClick={(event) => { this.setState({ dropdownVal: 'News' }) }}>News</a>
                                </li>
                                <li role="menuitem">
                                    <a onClick={(event) => { this.setState({ dropdownVal: 'Tech' }) }}>Tech</a>
                                </li>
                                <li role="menuitem">
                                    <a onClick={(event) => { this.setState({ dropdownVal: 'Bot' }) }}>Bot</a>
                                </li>
                            </ul>
                        </div>


                        <button style={{ margin: '40px' }} type="button" className="btn btn-default"
                            onClick={(e) => this.postQ()}>
                            Post it!
                        </button>

                        <SkyLight
                            hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Drop an image to add to your question">
                            <div>
                                <input type="file" onChange={(e) => this.handleFile(e)} />
                            </div>
                        </SkyLight>


                        <TagBox
                            tags={tags.toJS()}
                            selected={selected.toJS()}
                            onSelect={onSelect}
                            removeTag={remove}
                            backspaceDelete={true}
                            placeholder={placeholder}
                        />
                    </div>


                </div>



            </div>

        )
    }
}

export default PostQuestion
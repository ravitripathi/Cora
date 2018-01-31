import React, { Component } from 'react'
import axios from 'axios'


class Comment extends Component {

    render() {
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
                                    <p className="heading-4">User Name's Answer</p>
                                    <p className="heading-6 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p className="heading-6 font-light date_text" style={{textAlign:"right"}}>22/01/2018</p>
                                </div>
                            </div>
                        </div>

                        <div className="row" style={{ marginTop: '30px' }}>
                            <div className="col-md-12">
                                <form className="form" action="index.html" method="post">
                                    <div className="form-group has-feedback input-container-md">
                                        <textarea auto-grow="" className="form-control ng-pristine ng-valid ng-empty ng-touched" rows="4" max-lines="10" placeholder="Enter your comment here" ng-model="testarea2" name="message"
                                            style={{ overflowY: 'hidden', height: '96px' }}></textarea>
                                    </div>
                                    <div className="form-group" style={{textAlign:'right'}}>
                                        <input type="submit" name="" value="Add Comment" className="btn btn-sm btn-primary">
                                        </input>
                                    </div>
                                </form>

                                <p className="heading-4">Comments (4)</p>
                                <div className="list-view-card comment_card">
                                    <div className="card-image">
                                        <profile-pic size="md" image-url="https://static1.squarespace.com/static/563186f5e4b0d916cf7ec6ce/t/563ad7a8e4b09a4c529b97e5/1446696874049/"></profile-pic>
                                    </div>
                                    <div className="card-details">
                                        <div className="card-title heading-5">Jane Doe</div>
                                        <ul className="card-sub-details">
                                            <li>
                                                <span>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </span>
                                            </li>
                                            <li style={{ textAlign: 'right' }}>
                                                <div className="text-muted" style={{ textAlign: 'right' }}>
                                                    22nd January, 2018
                                        </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="list-view-card comment_card">
                                    <div className="card-image">
                                        <profile-pic size="md" image-url="'https://static1.squarespace.com/static/563186f5e4b0d916cf7ec6ce/t/563ad7a8e4b09a4c529b97e5/1446696874049/'"></profile-pic>
                                    </div>
                                    <div className="card-details">
                                        <div className="card-title heading-5">John Doe</div>
                                        <ul className="card-sub-details">
                                            <li>
                                                <span>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </span>
                                            </li>
                                            <li style={{ textAlign: 'right' }}>
                                                <div className="text-muted" style={{ textAlign: 'right' }}>
                                                    22nd January, 2018
                                        </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="list-view-card comment_card">
                                    <div className="card-image">
                                        <profile-pic size="md" image-url="'https://static1.squarespace.com/static/563186f5e4b0d916cf7ec6ce/t/563ad7a8e4b09a4c529b97e5/1446696874049/'"></profile-pic>
                                    </div>
                                    <div className="card-details">
                                        <div className="card-title heading-5">Jane Doe</div>
                                        <ul className="card-sub-details">
                                            <li>
                                                <span>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </span>
                                            </li>
                                            <li style={{ textAlign: 'right' }}>
                                                <div className="text-muted" style={{ textAlign: 'right' }}>
                                                    22nd January, 2018
                                        </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                </div>
                )
    }
}

export default Comment
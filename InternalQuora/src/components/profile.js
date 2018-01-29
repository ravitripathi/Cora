import React from 'react'
import { Link } from 'react-router-dom'

import Indifeed from './indifeed';

const Profile = ({ match }) => (
    <div className='container Profile'>
        <div className="panel-body" style={{ textAlign: 'center' }}>
            <img className='ng-binding'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgxKQ2hBgl1BFKaZlHzfhdG86GUKZ0jIajau7PgSh12MZM9hO"
                width="150" height='150' style={{ borderRadius: '50%' }}
            />
            <h1>Sample Name</h1>
            <div className="tags" value="'Followers'">
                <span ng-bind="value" className="tags-title ng-binding" style={{ textAlign: 'center' }}>Followers</span>
            </div>

            <div className="tags" value="'Following'">
                <span ng-bind="value" className="tags-title ng-binding" style={{ textAlign: 'center' }}>Following</span>
            </div>
        </div>

        <div className="bucket-container ng-scope" style={{ textAlign: 'center', margin: '-10px' }}>
            <ul>
                <li className="bucket-list">
                    <div className="buckets orange active">
                        <div className="buckets-content">
                            <div className="bucket-heading">Questions</div>
                            <div className="bucket-value">22</div>
                        </div>
                    </div>
                </li>

                <li className="bucket-list">
                    <div className="buckets purple">
                        <div className="buckets-content">
                            <div className="bucket-heading">Categories subscribed to</div>
                            <div className="bucket-value">22</div>
                        </div>
                    </div>
                </li>

                <li className="bucket-list">
                    <div className="buckets purple">
                        <div className="buckets-content">
                            <div className="bucket-heading">Answers</div>
                            <div className="bucket-value">22</div>
                        </div>
                    </div>
                </li>

            </ul>


        </div>
        <div style={{marginTop: '50px'}}>
        <Indifeed/>
        </div>
    </div>
)

export default Profile
import React from 'react'
import { Link } from 'react-router-dom'

const Feed = ({ match }) => (
    <div className='container Feed'>
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">Top Feed</h3>
            </div>
            <div className="panel-body">
                <div className='row'>
                    <div className='col-lg-8'>
                        <span className='pull-right AuthorName'>By: <a>Jayant Rana</a></span>
                        <Link to={`/home/feed`}><a><h5>Feed Head</h5></a></Link>
                        <p>Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit</p>
                    </div>
                    <div className='col-lg-4'>
                        <img className='img-responsive' src='../img/2013-lebron-11-away-commercial-04.jpg' />
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <div className='col-lg-8'>
                        <span className='pull-right AuthorName'>By: <a>Jayant Rana</a></span>
                        <Link to={`/home/feed`}><a><h5>Feed Head</h5></a></Link>
                        <p>Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit</p>
                    </div>
                    <div className='col-lg-4'>
                        <img className='img-responsive' src='../img/2013-lebron-11-away-commercial-04.jpg' />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Feed
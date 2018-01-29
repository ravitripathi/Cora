import React, { Component } from 'react'

class IndiFeed extends Component{
    render() {
        return (
            <div className='container IndiFeed'>
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Feed Name</h3>
                    </div>
                    <div className="panel-body">
                        <div className='row'>
                            <div className='col-lg-8 col-lg-offset-4'>
                                <img className='img-responsive' src='../img/2013-lebron-11-away-commercial-04.jpg' />
                            </div>
                            <div className='col-lg-12'>
                                <p>Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IndiFeed
import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

class Header extends Component {

const Header = ({ match }) => (
    <div className='container Header'>
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" style={{color:'#FFFFFF'}} href="/home">Cora</a>
                </div>
                <ul className="nav navbar-nav navbar-right">
                    <li><input type="text" className="NavSearch form-control input" placeholder="Search" /></li>
                    <li><a href="#"><FontAwesome name='bell'/></a></li>
                    <li><a href="/home/post"><FontAwesome name='pencil-square-o'/>Post Question</a></li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Profile</a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="#">Separated link</a></li>
    componentWillMount() {
        // console.log('Check' + this.props.isSearchOn)
    }

    handleSearch() {
        this.props.addSearch
    }

    render() {
        return (
            <div className='container Header'>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/home">Cora</a>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li><input type="text" className="NavSearch form-control input" placeholder="Search" onChange={this.props.addSearch} /></li>
                            <li><a href="#"><FontAwesome name='bell'/></a></li>
                            <li><a href="#"><FontAwesome name='pencil-square-o'/>Answers</a></li>
                            <li><a role="button">{this.props.user.name}</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header
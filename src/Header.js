import React, { Component } from 'react'
import './Header.css'
import logo from './logo-dark.png'

class Header extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
      }
      handleScroll(event) {
        console.log(window.pageYOffset)
        
        let scrollTop = window.pageYOffset
        let header = document.getElementById('header')

        if(scrollTop > 100) {
            header.classList.add('Header-show')
        } else {
            header.classList.remove('Header-show')
        }
      }

    render() {
        return (
            <div className="Header" id="header">
                <a className="Header-logo" href="/"><img src={logo} width="30" alt="logo" /></a>
                <a className="Header-link" href="/about">Chapters</a>
                <a className="Header-link" href="/">Sign in</a>
            </div>
        )
    }
}

export default Header


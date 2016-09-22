import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <h2 className="header">{this.props.children}</h2>
    }
}

export default Header
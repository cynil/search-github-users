import '../node_modules/bootstrap/scss/bootstrap.scss'
import '../style/main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.jsx'
import Search from './Search.jsx'
import List from './List.jsx'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            status: '',
            results: []
        }
    }
    handleData(data){
        this.setState({
            status: 'done',
            results: data.items
        })
    }
    handleSearchStart(){
        this.setState({
            status: 'pending'
        })
    }
    handleError(err){
        console.log(err)
    }
    render(){
        return (
            <div className="container">
                    <Header>Search Github Users</Header>
                    <Search url={this.props.url}
                        onReceiveData={this.handleData.bind(this)}
                        onStartSearch={this.handleSearchStart.bind(this)}
                        onConnectionError={this.handleError.bind(this)}
                        placeholder="Enter Name to Search"/>
                    <List status={this.state.status}
                        items={this.state.results}/>
            </div>
        )
    }
}

window.onload = function(){
    const app = document.createElement('div')
    document.body.appendChild(app)
    ReactDOM.render(<App url="https://api.github.com/search/users?q=" />, app)
}
import React from 'react'
import ReactDOM from 'react-dom'
import {get} from './ajax.js'

export default class Search extends React.Component{
        constructor(){
            super()
            this.state = {
                keyword: ''
            }
        }
        inputValue(e){
            this.setState({keyword: e.target.value})
        }
        startSearch(e){
            e.preventDefault()
            if(this.props.onStartSearch){
                this.props.onStartSearch()
            }
            let self = this
            get(this.props.url + this.state.keyword).then(function(data){
                if(self.props.onReceiveData){
                    self.props.onReceiveData(data)
                }
            }, function(err){
                if(self.props.onConnectionError){
                    self.props.onConnectionError(err)
                }
            })
        }
        render(){
            return <form className="search"
                         onSubmit={this.startSearch.bind(this)}>
                       <div className="input-group">
                        <input type="text"
                            className="form-control"
                            placeholder={this.props.placeholder}
                            value={this.state.keyword}
                            onChange={this.inputValue.bind(this)} />
                        <span className="input-group-btn">
                            <button className="btn btn-primary">Search</button>
                        </span>
                       </div>
                   </form>
        }
}
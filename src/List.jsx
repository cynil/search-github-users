import React from 'react'
import ReactDOM from 'react-dom'

export default class List extends React.Component{
    constructor(){
        super()
    }
    render(){
        let status = this.props.status
        if(status === ''){
            return <p>waiting for input...</p>
        }
        else if(status === 'pending'){
            return <p>fetching data...</p>
        }
        else if(status === 'done'){
            let items = this.props.items
            const list = items.map((item) => 
                    <li className="user" key={item.id}>
                        <a href={item.html_url}>
                            <img src={item.avatar_url} alt="avatar"/>
                        </a>
                        <p>{item.login}</p>
                        <p>{item.score}</p>
                    </li>
                )
            return <ul className="users">{list}</ul>
        }
    }
}
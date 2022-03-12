import React, { Component } from 'react'

export default class UserItem extends Component {
    user = {
        
            "login": "mojombo",
            "id": 1,
            "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
            "url": "https://api.github.com/users/mojombo",
            "html_url": "https://github.com/mojombo"
          
    }
    
    render() {
        return (
            <div className="card text-center">
                <img src={this.user.avatar_url} className='round-img' alt='' style={{ width : '75px'}}/>
                <h3>{this.user.login}</h3>
                <a href={this.user.html_url}>find more</a>
            </div>
        )
    }
}

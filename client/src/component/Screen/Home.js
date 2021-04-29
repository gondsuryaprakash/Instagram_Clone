import React from 'react'
import SignIn from './SignIn'

const Home = () => {
    
    return (
        <div className="home">
            <div className="card home-card">

                <h5>
                    Ramesh
                </h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1616925148172-0062686b1fa3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80"></img>
                </div>
                <div className="card-content">
                    <i className="material-icons" style={{'color':'red'}}>favorite</i>
                    <h6>tittle</h6>
                    <p>This id amazing post</p>
                    <input type="text" placeholder="add a comment"></input>
                </div>
            </div>



        </div>

    )
}

export default Home
import React from "react";
import './Register.css'

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }


    handleSubmit(event){
        if (this.state.username === '' || this.state.password===''){
            alert('Fields must be filled!');
            return;
        }

        alert(`
        Username: ${this.state.username} \n
        Password: ${this.state.password} \n
        Successfully signed up! 
        `);
        event.preventDefault();
    }

    render(){
        return(
            <div class="wrapper">
                <div id="formContent">
                    <h2>Sign up</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input type="text"
                                   name="username"
                                   value={this.state.username}
                                   onChange={this.handleChange}
                                   placeholder="Username:"/>
                        </label>
                        <label>
                            <input type="password"
                                   name="password"
                                   value={this.state.password}
                                   onChange={this.handleChange}
                                   placeholder="Password:" />
                        </label>
                        <input type="submit" value="Sing up!"/>

                    </form>
                </div>
            </div>
        )
    }
}

export default Login

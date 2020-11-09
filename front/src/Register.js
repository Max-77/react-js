import React from "react";
import './Register.css'

class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            role: '',
            age: '',
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }


    handleSubmit(event){
        if (this.state.username === '' || this.state.role ==='' ||
            this.state.age==='' || this.state.email==='' || this.state.password===''){
            alert('Fields must be filled!');
            return;
        }

        alert(`
        Username: ${this.state.username} \n
        Role: ${this.state.role} \n
        Age: ${this.state.age} \n
        Email: ${this.state.email} \n
        Password: ${this.state.password}
        Successfully registered! 
        `);
        event.preventDefault();
    }

    render(){
        return(
            <div class="wrapper">
                <div id="formContent">
                <h2>Registration</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text"
                               name="username"
                               value={this.state.username}
                               onChange={this.handleChange}
                               placeholder="Username:"/>
                    </label>
                    <label>
                        <input type="text"
                               name="role"
                               value={this.state.role}
                               onChange={this.handleChange}
                               placeholder="Role:"/>
                    </label>
                    <label>
                        <input type="number"
                               name="age"
                               value={this.state.age}
                               onChange={this.handleChange}
                               placeholder="Age:"/>
                    </label>
                    <label>
                        <input type="email"
                               name="email"
                               value={this.state.email}
                               onChange={this.handleChange}
                               placeholder="Email:" />
                    </label>
                    <label>
                        <input type="password"
                               name="password"
                               value={this.state.password}
                               onChange={this.handleChange}
                               placeholder="Password:" />
                    </label>
                        <input type="submit" value="Ready!"/>

                </form>
                </div>
            </div>
        )
    }
}

export default Register

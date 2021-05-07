import {Component} from 'react';
import '../css/Login.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Login extends Component{

    constructor(props){
        super(props);

        this.state = {
            username:"",
            password: "",
            usernameServer:"",
            passwordServer:"",
            loginSuccess: false,
            redirect:null
        }
        
    }

    inputSet = (e) => {
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value })
    }

    callLoginApi = (e) =>{

        e.preventDefault();
        console.log("inside button");

        axios.get("api/validuser/51c8dfae-6b5a-47f0-bdeb-cb5d03a17dde/admin/592cyewd" )
        .then(res =>{
            console.log( " server uname " + res.data[0].loginame);
            console.log( " server password " + res.data[0].loginpwd);

            this.setState( {usernameServer: res.data[0].loginame,passwordServer: res.data[0].loginpwd})
            this.checkIfCredentialsMatch();
            
        })
        .catch(e => {
            console.log("error on item detail " + e);
        })
    }

    checkIfCredentialsMatch(){
        
        let inputuserName = this.state.username;
        let inputuserPassword = this.state.password;
        let serverUserName = this.state.usernameServer;
        let serverPassword = this.state.passwordServer;
          
        if( inputuserName == serverUserName ){
            if( inputuserPassword == serverPassword ){

                 this.setState({loginSuccess:true});

                 localStorage.setItem("cubixLoginStatus", "yes");

                 if(this.state.loginSuccess){ 
                    console.log("inside redirect");
                    this.setState({ redirect: "/home" });
                 }
                 
            }else{
                this.setState({loginSuccess:false});
                localStorage.setItem("cubixLoginStatus", "no");
                console.log("inside upaswd else");
            }
        }else{
            this.setState({loginSuccess:false});
            localStorage.setItem("cubixLoginStatus", "no");
            console.log("inside uname else");
        }
        
    }

    render(){
        if(this.state.redirect){
            return <Redirect to={this.state.redirect} />
        }
        return(     
            <div>
            <h3 className="titleHome">Login</h3>
            
            <div className="loginFieldsContainer">
                <form className="loginFieldsContainerForm">
                <input  onChange ={this.inputSet} name="username" type="text" placeholder="Username" required />
                <input onChange ={this.inputSet} name="password" type="password" placeholder="Password" required />
                <button onClick={this.callLoginApi} className="btn btn-primary">Submit</button>
                </form>
            </div>
            
            </div>
        )
    }
}

export default Login;
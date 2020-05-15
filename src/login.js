import React from 'react'
import { Button,Input, FormGroup, Label} from 'reactstrap'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './login.css'

const Login = (props) => {
        return (
            <div className="login-form">
            <h1>Login</h1>  
                <FormGroup className="mb-3">
                    <Label>UserName</Label>
                    <Input type="text" placeholder="UserName" value = {props.userName} onChange = {props.handleUserName}/>
                </FormGroup>   
                <FormGroup className="mb-3">
                    <Label>Password</Label>
                    <Input type="text" placeholder="Password" value = {props.password} onChange = {props.handlePassword}/>  
                </FormGroup>  
                <Button onClick = {props.submit}>Login</Button>
                <Label>{props.error}</Label>
        </div>
    );
}
export default Login;

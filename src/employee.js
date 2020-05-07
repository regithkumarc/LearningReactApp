import React from "react"
import { FormGroup, Label, Button, Input } from "reactstrap";

const Employee = function(props){

    return (
        <div className="login-form">
            <FormGroup className="mb-3">
                <Label>Name</Label>
                <Input type="text" placeholder="Name" value = {props.empName} onChange = {props.handleName}/>
            </FormGroup>   
            <FormGroup className="mb-3">
                <Label>Salery</Label>
                <Input type="text" placeholder="Salery" value = {props.empSalary} onChange = {props.handleSalery}/>  
            </FormGroup>  
            <Button onClick = {props.deleteHandler}>Delete</Button>
    </div>
    )
}
export default Employee;
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'reactstrap';
import './login.css'
import Login from './login';
import Employee from './employee';
import axios from 'axios'

class App extends React.Component {

  state = {
    userName : '',
    password : '',
    employees : [],
    loggedIn : false,
    error : ''
  };

  componentWillMount(){
    const getAllApi = "http://localhost:9000/api/employees/getAllEmployees";
    axios.get(getAllApi).then(result => {
      this.setState({employees : result.data});
      console.log("Employee : ",this.state.employees)
    });
  }

  handleName = (event, index) => {

    console.log("Event111--->"+event.target.value,index);

    //copy the element
    const employees = [...this.state.employees];

    // change the value
    employees[index].empName = event.target.value;
    //console.log(JSON.stringify(employees));

    // setting the changed state
    this.setState({employees: employees});
    //console.log(JSON.stringify(this.state));

}

handleSalery = (event, index) => {

    //console.log("Event111--->"+event.target.value,index);

    //copy the element
    const employees = [...this.state.employees];

    // change the value
    employees[index].empSalery = event.target.value;
    //console.log(JSON.stringify(employees));

    // setting the changed state
    this.setState({employees: employees});
    //console.log(JSON.stringify(this.state));

}

  render () {

    const employees_jsx = (<div>
       <h1>Employee Details</h1>  
      {this.state.employees.map(
          (employee, index) => <Employee empName={employee.empName}
                                        //  deleteHandler={() => {
                                        //      this.deleteHandler(index);
                                        //  }}
                                         empSalary={employee.empSalary}
                                         handleName={(event) => {
                                             this.handleName(event, index);
                                         }}
                                         handleSalery={(event) => {
                                             this.handleSalery(event, index);
                                         }}/>
      )}
  </div>
);

    if(this.state.loggedIn){
        return (
          <div>
              <Button onClick  = {() => this.setState({loggedIn : false})} >Logout</Button>
              {employees_jsx}
          </div>
        )
    }else{
      return (
        <div>
            <Login userName = {this.state.userName}
                   password = {this.state.password}
                   error = {this.state.error}
                   handleUserName = {(event) => this.setState({userName : event.target.value})}
                   handlePassword = {(event) => this.setState({password : event.target.value})}
                   submit = {() =>{
                     if(this.state.userName === "regith" && this.state.password === "regith"){
                       this.setState({loggedIn : true})
                     }else{
                      this.setState({error : 'Not valid User'});
                    }
                   }}></Login>
        </div>
      );
    }
  }
}

export default App;

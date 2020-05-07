import React from 'react'
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap'; 

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userName : '',
            password : ''
        }
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }

    onChangeUserName(event){
        this.setState({
            userName : event.target.value
        })
    }

    onChangePassword(event){
        this.setState({
            password : event.target.value
        })
    }

    onSubmit(event){
        alert("Submitted" + this.state.userName + " __ " + this.state.password);
    }

    render () {
        return (
            <div className="app flex-row align-items-center"> 
              <Container> 
                <Row className="justify-content-center"> 
                   <Col> 
                  {/* <Col md="12" lg="10" xl="8"> */}
                    <Card className="mx-2">  
                      <CardBody className="p-4">
                        <Form onSubmit = { this.onSubmit } >  
                          <h1>Login Screen</h1>  
                          <InputGroup className="mb-3">
                            <Input type="text" placeholder="UserName" name="userName" id="userName" value={this.state.productId} onChange = { this.onChangeUserName } />
                          </InputGroup>  
                           <InputGroup className="mb-3">
                            <Input type="text" placeholder="Password" name="password" id="password" value={this.state.productName} onChange = { this.onChangePassword } />  
                          </InputGroup>  
                     <CardFooter className="p-4">  
                        <Row>  
                          <Col> 
                            <Button type="submit" className="btn btn-info mb-1" block><span>Login</span></Button>  
                          </Col>  
                          {/* <Col xs="12" sm="6">  
                            <Button className="btn btn-info mb-1" block><span>Clear</span></Button>  
                          </Col>   */}
                        </Row>  
                      </CardFooter>  
                        </Form>  
                      </CardBody> 
                    </Card>  
                  </Col>  
                </Row>  
              </Container>  
            </div>
        );
    }
}
export default Login;
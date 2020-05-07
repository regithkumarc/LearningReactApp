import React from "react"
import {Card,CardHeader,CardBody,Col,Row,Table } from 'reactstrap'; 

function Employee(props){

    return (
        <div>
        <div className="flex-large">
            <h2>Employee Screen</h2>
        </div>
        <Row>
            <Col>
                <Card>
                    <CardHeader>
                        <i className = "fa fa-align-justify"></i>
                    </CardHeader>
                    <CardBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Designation</th>
                                </tr>
                            </thead>
                            <tbody>  
                                <tr>
                                    <th>1</th>
                                    <th>A</th>
                                    <th>Developer</th>
                                </tr>   
                            </tbody>  
                        </Table>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </div>
    )
}
export default Employee;
import React, { Component } from 'react';
import axios from "axios"
import {Table , Alert , Form , FormControl,Modal ,Col, Button, Row} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
class StudentList extends Component {

    constructor(){

        super()
        this.state = {

            msg: '',
            errorStatus: '',
            data: []
        }


    }

    componentDidMount(){

        const axiosOptions = {
            url: process.env.React_App_API_URL + 'admin/student',
            method: "get",
            }

            
            axios(axiosOptions)
            .then(response => {

            console.log(response.data.data.data)
            if (response.data.status == 0) {
                this.setState({

                    errorStatus: 'error',
                    msg: response.data.message
                    
                    })    
            }else{

                this.setState({

                    data : response.data.data.data
    
                })
            }
                
            })
            .catch(err =>

                console.log(err)
            
            )
    }

    render() {
        return (
            
            <Container fluid >
                
                <Row>
                    <Col>
                    

                        <h1 style={{textAlign:'center'}}>Student List</h1>
                        {/* <Link to='/events'> <Button variant="success" className="float-right">Add Events</Button></Link> */}

                                {this.state.errorStatus == 'error'?
                                <div class="col-12 m-0 p-2 input-group">
                                    <p style={{color:'red'}}>{this.state.msg}</p>
                                    </div>
                                :null}

                        <Table responsive="lg">
                            <thead>
                            <tr>
                                <th width="5%">#</th>
                                <th width="5%">Name</th>
                                <th width="5%">Email</th>
                                <th width="10%">City</th>
                                <th width="10%">Event Name</th>
                                <th width="10%">Mobile No</th>
                                <th width="10%">Phone No </th>
                                {/* <th width="5%">Orgnization</th> */}
                                <th width="10%">Address</th>
                                <th width="10%">University</th>
                                <th width="10%">Campus</th>
                                <th width="5%">Degree</th>
                                <th width="5%">Country</th>
                                {/* <th width="10%">Register URL</th> */}
                                <th width="10%">Field of Study</th>
                                <th width="10%">LinkedIn</th>
                                <th width="5%">Delete</th>
                                <th width="5%">Edit</th>
                                
                    
                            </tr>
                            </thead>
                            <tbody>

                            {this.state.data.length == 0 ?
                                

                                <tr>
                                    <td width=""></td>
                                    <td width=""></td>
                                    <td width=""></td>
                                    <td width=""></td>
                                    <td width=""></td>
                                    <td width=""></td> 
                                    <td width=""></td>
                                    <td width=""></td>
                                    <td width="" style={{color:'red', textAlign: 'center'}}>Record not Found </td>
                                    <td width=""></td>
                                    <td width=""></td>
                                    <td width=""></td>
                                    <td width=""></td>
                                    <td width=""></td>
                                    <td width=""></td>
                                    <td width=""></td>
                                    <td width=""></td>
                                    
                                </tr>

                            :null}
                                {this.state.data.length != 0 ?

                                            this.state.data.map((students, index) => (

                                                <tr key={index}>
                                                    <td width="5%">{index + 1}</td>
                                                    <td width="5%">{students.first_name}</td>
                                                    <td width="5%">{students.email}</td>
                                                    <td width="5%">{students.city}</td>
                                                    <td width="5%">{students.event_name}</td>
                                                    <td width="5%">{students.mobile_no}</td>
                                                    <td width="5%">{students.phone_no}</td>
                                                    <td width="5%">{students.address}</td>
                                                    <td width="5%">{students.university}</td>
                                                    <td width="5%">{students.campus}</td>
                                                    <td width="5%">{students.degree}</td>
                                                    <td width="5%">{students.country}</td>
                                                    <td width="5%">{students.field_of_study}</td>
                                                    <td width="5%"><a href={students.linkedin_profile}>{students.linkedin_profile}</a></td>
                                                    <td><Button variant="danger">Delete</Button></td>
                                                    <td><Button variant="secondary">Edit</Button></td>
                                                </tr>
                                            ))

                                :null}

                            

                            </tbody>

                        </Table>
                    {/* <a href="#" onClick={this.handleShow}>Modal</a>

                    <Modal show={this.state.show} onHide={this.handleClose}>
					
                        <Modal.Body style={{textAlign:'center'}}>Are You Sure You Want to delete this?</Modal.Body>
                        <Modal.Footer>
                            <Button  variant="secondary" onClick={this.handleClose}>
                                No
                            </Button>
                                        <Button variant="danger" onClick={this.deleteId}>
                                        Yes
                            </Button>
                        </Modal.Footer>
				    </Modal> */}
                    



                    </Col>
                </Row>

            </Container>
        );
    }
}

export default StudentList;
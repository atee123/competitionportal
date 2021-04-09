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

                        <Table style={{fontSize: '0.9rem'}} responsive>
                            <thead>
                            <tr>
                                <th width="">#</th>
                                <th width="">Name</th>
                                <th width="">Email</th>
                                <th width="">City</th>
                                <th width="">Event Name</th>
                                <th width="">Mobile No</th>
                                <th width="">Phone No </th>
                                {/* <th width="5%">Orgnization</th> */}
                                <th width="">Address</th>
                                <th width="">University</th>
                                <th width="">Campus</th>
                                <th width="">Degree</th>
                                <th width="">Country</th>
                                {/* <th width="10%">Register URL</th> */}
                                <th width="">Field of Study</th>
                                <th width="">LinkedIn</th>
                                <th width="">Delete</th>
                                <th width="">Edit</th>
                                
                    
                            </tr>
                            </thead>
                            <tbody>

                            {this.state.data.length == 0 ?
                                

                                <tr>
                                    <td colSpan="17" style={{color:'red', textAlign: 'center'}}>Record not Found </td>
                                    
                                </tr>

                            :null}
                                {this.state.data.length != 0 ?

                                            this.state.data.map((students, index) => (

                                                <tr key={index}>
                                                    <td width="">{index + 1}</td>
                                                    <td width="">{students.first_name}</td>
                                                    <td width="">{students.email}</td>
                                                    <td width="">{students.city}</td>
                                                    <td width="">{students.event_name}</td>
                                                    <td width="">{students.mobile_no}</td>
                                                    <td width="">{students.phone_no}</td>
                                                    <td width="">{students.address}</td>
                                                    <td width="">{students.university}</td>
                                                    <td width="">{students.campus}</td>
                                                    <td width="">{students.degree}</td>
                                                    <td width="">{students.country}</td>
                                                    <td width="">{students.field_of_study}</td>
                                                    <td width="">
                                                        <a href={students.linkedin_profile}>
                                                            {students.linkedin_profile}
                                                        </a>
                                                    </td>
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
import React, { Component } from 'react';
import {Table , Alert , Form , FormControl,Modal , Button, Container, Col, Row} from 'react-bootstrap'
import axios from "axios"

class MentorList extends Component {

    constructor(props){
        super(props) 
        
        this.state = {
            data: [],
            msg: '',
            errorStatus: ''

        }
    }

    componentDidMount() {

        const axiosOptions = {
            url: process.env.React_App_API_URL + 'admin/mentor',
            method: "get",
            }

            
            axios(axiosOptions)
            .then(response => {

            console.log(response.data.data.data)
            if (response.data.status == 0) {
                this.setState({

                    errorStatus: 'error',
                    // data : response.data.data.data,
                    msg: response.data.message
                    
                    // data : response.data.data.data
                    })    
            }else{

                this.setState({

                    data : response.data.data.data

                    // errorStatus: 'error',
                    // data : response.data.data.data,
                    // msg: response.data.message
    
                })
            }
                
            })
            .catch(err =>

                console.log(err)
            
            )

        }

        dataFound(){

            this.setState({

                isData: true
            })
        }

    render() {

        // const { isLoading, data, error } = this.state;

        return ( 
                   
            <Container fluid >
                <Row>
                    <Col>


                    <h1 style={{textAlign:'center'}}>Mentor List</h1>
                    {/* <Link to='/events'> <Button variant="success" className="float-right">Add Events</Button></Link> */}

                            {this.state.errorStatus == 'error'?
                            <div class="col-12 m-0 p-2 input-group">
                                <p style={{color:'red'}}>{this.state.msg}</p>
                                </div>
                            :null}

                    <Table style={{fontSize: '0.9rem'}} responsive>
                        <thead>
                        <tr>
                            <th >#</th>
                            <th >Name</th>
                            <th >Email</th>
                            <th >city</th>
                            <th >Event Name</th>
                            <th >Mobile No</th>
                            <th >Phone No </th>
                            {/* <th width="5%">Orgnization</th> */}
                            <th >Address</th>
                            <th >University</th>
                            <th >Campus</th>
                            <th >Degree</th>
                            <th >Country</th>
                            {/* <th width="10%">Register URL</th> */}
                            <th >Field of Study</th>
                            <th >LinkedIn</th>
                            <th >Delete</th>
                            <th >Edit</th>
                            
                  
                        </tr>
                        </thead>
                        <tbody>

                        {this.state.data.length == 0 ?
                        
                        
                            <tr>
                                
                                <td colSpan="17" style={{color:'red', textAlign: 'center'}}>Record not Found </td>
                                
                            </tr>

                        :null}
                             {this.state.data.length != 0 ?

                                        this.state.data.map((mentors, index) => (

                                            <tr key={index}>
                                                <td >{index + 1}</td>
                                                <td >{mentors.first_name}</td>
                                                <td >{mentors.email}</td>
                                                <td >{mentors.city}</td>
                                                <td >{mentors.event_name}</td>
                                                <td >{mentors.mobile_no}</td>
                                                <td >{mentors.phone_no}</td>
                                                <td >{mentors.address}</td>
                                                <td >{mentors.university}</td>
                                                <td >{mentors.campus}</td>
                                                <td >{mentors.degree}</td>
                                                <td >{mentors.country}</td>
                                                <td >{mentors.field_of_study}</td>
                                                <td ><a href={mentors.linkedin_profile}>{mentors.linkedin_profile}</a></td>
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

export default MentorList;
import React, { Component } from 'react';
import {Table , Alert , Form , FormControl,Modal , Button, Row, Col} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import axios from "axios"
import { BrowserRouter as Router , Route , Link } from "react-router-dom";

class JudgeList extends Component {

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
            url: process.env.React_App_API_URL + 'admin/judge',
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

    render() {
        return (
            

                <Container fluid>

                    <Row>

                        <Col>

                            {/* <h1 style={{textAlign:'center'} }>All Judges</h1> */}
                            <h1 className="text-center mt-4 mb-4">All Judges</h1>
                            {/* <Link to='/events'> <Button variant="success" className="float-right">Add Events</Button></Link> */}

                                    {/* {this.state.errorStatus == 'error'?
                                    <div class="col-12 m-0 p-2 input-group">
                                        <p style={{color:'red'}}>{this.state.msg}</p>
                                        </div>
                                    :null} */}

                                <Link to='/add_judge?event_token=eyJpdiI6IlBZeU5uTit1d3dkeC9kOG5GSVJEc0E9PSIsInZhbHVlIjoiRWJMeENpK29renRVRktncGtwUGVUZz09IiwibWFjIjoiOTA0MGE1MjQ3NWQ3MWMxZDAyZWRlZmNmMzZkMDVmMDY3YmE1MGQwNDhiZTgxNGJhZGQxYmU1NGU2ZjRiNDMyYSJ9'> 
                                    <Button variant="success" className="float-right">Add Judge</Button>
                                </Link>

                            <Table responsive="lg">
                                <thead>
                                <tr>
                                    <th >#</th>
                                    <th >Name</th>
                                    <th >Email</th>
                                    <th >city</th>
                                    <th >Mobile No</th>
                                    {/* <th width="5%">Orgnization</th> */}
                                    <th >Address</th>
                                    <th >Org Name</th>
                                    <th >Country</th>
                                    {/* <th width="10%">Register URL</th> */}
                                    <th >Designation</th>
                                    <th >Education</th>
                                    <th >Work Experience</th>
                                    <th >Delete</th>
                                    <th >Edit</th>
                                    
                        
                                </tr>
                                </thead>
                                <tbody>

                                {this.state.data.length == 0 ?
                                // <tr> <td className="text-center" style={{color:'red', textAlign: 'center'}}> No Record Found </td> </tr>
                                    

                                    <tr>
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
                                        
                                    </tr>

                                :null}
                                    {this.state.data.length != 0 ?

                                                this.state.data.map((judges, index) => (

                                                    <tr key={index}>
                                                        <td >{index + 1}</td>
                                                        <td >{judges.first_name}</td>
                                                        <td >{judges.email}</td>
                                                        <td >{judges.city}</td>
                                                        <td >{judges.mobile_no}</td>
                                                        <td >{judges.address}</td>
                                                        <td >{judges.org_name}</td>
                                                        <td >{judges.country}</td>
                                                        <td >{judges.designation}</td>
                                                        <td >{judges.education}</td>
                                                        <td >{judges.work_exp}</td>
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

export default JudgeList;
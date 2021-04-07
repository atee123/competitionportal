import React, { Component } from 'react';
import {Table , Alert , Form , FormControl,Modal , Button} from 'react-bootstrap'
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
            <div>

                <Container fluid >
                    <h1 style={{textAlign:'center'}}>All Judges</h1>
                    {/* <Link to='/events'> <Button variant="success" className="float-right">Add Events</Button></Link> */}

                            {/* {this.state.errorStatus == 'error'?
                            <div class="col-12 m-0 p-2 input-group">
                                <p style={{color:'red'}}>{this.state.msg}</p>
                                </div>
                            :null} */}

                        <Link to='/add_judge'> <Button variant="success" className="float-right">Add Judge</Button></Link>

                    <Table bordered hover responsive="lg">
                        <thead>
                        <tr>
                            <th width="5%">#</th>
                            <th width="5%">Name</th>
                            <th width="5%">Email</th>
                            <th width="10%">city</th>
                            <th width="10%">Mobile No</th>
                            {/* <th width="5%">Orgnization</th> */}
                            <th width="10%">Address</th>
                            <th width="5%">Orgnization Name</th>
                            <th width="5%">Country</th>
                            {/* <th width="10%">Register URL</th> */}
                            <th width="10%">Designation</th>
                            <th width="10%">Education</th>
                            <th width="10%">Work Experience</th>
                            <th width="5%">Delete</th>
                            <th width="5%">Edit</th>
                            
                  
                        </tr>
                        </thead>
                        <tbody>

                        {this.state.data.length == 0 ?
                        <tr> <p style={{color:'red'}}>No Record found </p></tr>

                        :null}
                             {this.state.data.length != 0 ?

                                        this.state.data.map((judges, index) => (

                                            <tr key={index}>
                                                <td width="5%">{index + 1}</td>
                                                <td width="5%">{judges.first_name}</td>
                                                <td width="5%">{judges.email}</td>
                                                <td width="5%">{judges.city}</td>
                                                <td width="5%">{judges.mobile_no}</td>
                                                <td width="5%">{judges.address}</td>
                                                <td width="5%">{judges.org_name}</td>
                                                <td width="5%">{judges.country}</td>
                                                <td width="5%">{judges.designation}</td>
                                                <td width="5%">{judges.education}</td>
                                                <td width="5%">{judges.work_exp}</td>
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
                    


                    </Container>
            </div>
        );
    }
}

export default JudgeList;
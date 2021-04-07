import React, { Component } from 'react';
import {Table , Alert , Form , FormControl,Modal , Button} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
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
            <div>
               <div> 
                   
                   <Container fluid >
                    <h1 style={{textAlign:'center'}}>Mentor List</h1>
                    {/* <Link to='/events'> <Button variant="success" className="float-right">Add Events</Button></Link> */}

                            {this.state.errorStatus == 'error'?
                            <div class="col-12 m-0 p-2 input-group">
                                <p style={{color:'red'}}>{this.state.msg}</p>
                                </div>
                            :null}

                    <Table bordered hover responsive="lg">
                        <thead>
                        <tr>
                            <th width="5%">#</th>
                            <th width="5%">Name</th>
                            <th width="5%">Email</th>
                            <th width="10%">city</th>
                            <th width="5%">Event Name</th>
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
                        <tr> <p style={{color:'red'}}>No Record found </p></tr>

                        :null}
                             {this.state.data.length != 0 ?

                                        this.state.data.map((mentors, index) => (

                                            <tr key={index}>
                                                <td width="5%">{index + 1}</td>
                                                <td width="5%">{mentors.first_name}</td>
                                                <td width="5%">{mentors.email}</td>
                                                <td width="5%">{mentors.city}</td>
                                                <td width="5%">{mentors.event_name}</td>
                                                <td width="5%">{mentors.mobile_no}</td>
                                                <td width="5%">{mentors.phone_no}</td>
                                                <td width="5%">{mentors.address}</td>
                                                <td width="5%">{mentors.university}</td>
                                                <td width="5%">{mentors.campus}</td>
                                                <td width="5%">{mentors.degree}</td>
                                                <td width="5%">{mentors.country}</td>
                                                <td width="5%">{mentors.field_of_study}</td>
                                                <td width="5%"><a href={mentors.linkedin_profile}>{mentors.linkedin_profile}</a></td>
                                                <td><Button variant="primary">Delete</Button></td>
                                                <td><Button variant="primary">Edit</Button></td>
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
        </div>
        );
    }
}

export default MentorList;
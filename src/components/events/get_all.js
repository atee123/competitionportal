import React, {Component, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Table , Alert , Form , FormControl,Modal , Button} from 'react-bootstrap'
import axios from "axios"
import * as qs from "query-string"
import { BrowserRouter as Router , Route , Link } from "react-router-dom";

class GetAll extends Component {
   
    constructor(props, context) {

        super(props) 
        this.state = {
			show: false,
            data:[],
            delete_id:''
		};
     
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

	
	}


    componentDidMount() {

        
        const axiosOptions = {
            url: process.env.React_App_API_URL + 'admin/event',
            method: "get",
          }

          axios(axiosOptions)
          .then(response => {
            
            // console.log(response.data.data.data)
            this.setState({
            
                data : response.data.data.data
  
              })
             
          })
          .catch(err =>

            console.log(err)
           
          )


    }

    handleClose() {

		this.setState({ show: false });

	}

	handleShow(id) {
        
      
		 this.setState({ 
             show: true , 
            });

            this.deleteId(id)
         
	}

    deleteId(id){

        
        if(window.confirm('Are you sure')){

        const axiosOptions = {
            url: process.env.React_App_API_URL + 'event/delete/'+id,
            method: "delete",
          }
        
          axios(axiosOptions)
          .then(response => {
              this.componentDidMount()
          })
          .catch(err =>

            console.log(err)
           
          )

        }
       
    }     
    
    render() {

        return (
            <div>
               <div> 
                   
                   <Container fluid >
                    <h1 style={{textAlign:'center'}}>All Events</h1>
                    <Link to='/events'> <Button variant="success" className="float-right">Add Events</Button></Link>
                    <Table bordered hover responsive="lg">
                        <thead>
                        <tr>
                            <th width="5%">#</th>
                            <th width="5%">Name</th>
                            <th width="5%">Email</th>
                            <th width="10%">Description</th>
                            <th width="10%">Start Date</th>
                            <th width="10%">End Date</th>
                            {/* <th width="5%">Orgnization</th> */}
                            <th width="10%">Contact Person</th>
                            <th width="10%">Venue</th>
                            <th width="10%">Phone#</th>
                            <th width="5%">Mobile</th>
                            {/* <th width="10%">Register URL</th> */}
                            <th width="20%">Register</th>
                            <th width="10%">Login</th>
                            <th width="5%">Website</th>
                            <th width="5%">Delete</th>
                            <th width="5%">Edit</th>
                            
                  
                        </tr>
                        </thead>
                        <tbody>

                        {this.state.data.map((data , index) => (

                            <tr key={index}>
                            <td width="5%">{index + 1}</td>
                            <td width="5%">{data.name}</td>
                            <td width="5%">{data.email}</td>
                            <td width="50%" style={{wordWrap:'break-word'}}>{data.description.substring(0,100)}...</td>
                            <td width="10%">{data.start_date}</td>
                            <td width="10%">{data.end_date}</td>
                            {/* <td width="5%">{data.orgnization_id}</td> */}
                            <td width="10%">{data.contact_person}</td>
                            <td width="10%">{data.venue}</td>
                            <td width="5%">{data.phone_no}</td>
                            <td width="5%">{data.mobile_no}</td>
                            
                            <td width="10%">

                                <a href={process.env.React_App_Register_URL+"?event="+data.event_token+"&role_token="+data.student_token} target="_blank"><Button variant="primary">Student</Button></a> <br></br><br></br>
                                <a href={process.env.React_App_Register_URL+"?event="+data.event_token+"&role_token="+data.mentor_token} target="_blank"><Button variant="primary">Mentor</Button></a> <br></br><br></br>
                                <a href='/add_judge' ><Button variant="primary">Judge</Button></a>
                            
                            </td>

                            <td width="10%">

                                    <a href={process.env.React_App_Login_URL+"?event="+data.event_token} target="_blank"><Button variant="primary">Login</Button></a> <br></br><br></br>
                            
                            </td>

                            <td width="10%">
                                <a href={data.website} target="_blank">
                                {data.website}
                                </a>
                                </td>

                            <td width="5%">

                                <a style={{cursor:'pointer'}} onClick={() => this.deleteId(data.id)}>
					                <Button variant="danger">Delete</Button>
                                </a>

                            </td>

                            <td width="5%">
                                <Link to={'/edit_event/'+data.id} style={{cursor:'pointer'}}>
					                <Button variant="secondary">Edit</Button>
                                </Link>
                            </td>
                            
                        </tr>

                        ))}  
                        

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

export default GetAll;
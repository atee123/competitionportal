import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BrowserRouter as Router , Route , Link, Redirect } from "react-router-dom"
import {Alert , Form , FormControl , Button} from 'react-bootstrap'
import axios from "axios"
import * as qs from "query-string"
import FlashMessage from 'react-flash-message'
 

class Event extends Component {

    constructor(props) {

        console.log(process.env.React_App_API_URL)

       
        super(props) 

        this.state = {
             
             msg: '' ,
             errorStatus : '',
             redirect: false,
             name : '' , email: '' , description: '', start_date : '', end_date : '' , orgnization: ''  , contact_person:'',venue:'' , phone:'' ,website: '' , 
        };

    }

    // changeState = () => {

    //     this.setState({redirect: true});
    //   }

    

    handleChange = (event) => {        
    
        this.setState({[event.target.name] : event.target.value});
    }


    handleSubmit(event) {

        // console.log(this.state.venue)

        event.preventDefault()
        const formData = {}
        var fd = new FormData();
        console.log(this.state.name)
        fd.append( 'name', this.state.name);
        fd.append( 'description', this.state.description);
        fd.append( 'email', this.state.email);
        fd.append( 'start_date', this.state.start_date);
        fd.append( 'end_date', this.state.end_date);
        fd.append( 'orgnization_id', '1');  //fd.append( 'orgnization_id', this.state.orgnization);
        fd.append( 'venue', this.state.venue);
        fd.append( 'phone_no', this.state.phone);
        fd.append( 'contact_person', this.state.contact_person);
        fd.append( 'website', this.state.website);
        fd.append( 'mobile_no', this.state.mobile);

        
        for (var key of fd.entries()) {
        
            formData[key[0]] = key[1]
        }

        const axiosOptions = {
            url: process.env.React_App_API_URL+ 'admin/event',
            method: "post",
            headers: { "Content-Type": "application/x-www-form-urlencoded",
                        "Accept" : "application/json"
                     },
            data: qs.stringify(formData)
        }
        
        axios(axiosOptions)
            .then(response => {
            
                console.log(response)

                if(response.data.status == 0){
                    
                    this.setState({
                        errorStatus : 'error',
                        msg:response.data.messgae,
                        })

                } 
                else {
                    this.setState({
                        errorStatus : 'success', 
                        msg:response.data.messgae,
                        
                        })
                } 
            })
            .catch(err =>
            console.log(err)
            )
    }

    //   timeDelay(){
    //     setTimeout(function(){ this.setState({redirect: true}) }, 3000);
    //   }

    render() {

        // const changeState = setTimeout(function(){ this.setState({ redirect: true}) }, 3000);
        // const showMessage = setTimeout(function(){ alert("Hello"); }, 3000);
      
        return (

            <Container>
                <h1 style={{textAlign:'center'}}>Add Event</h1>
              
               
                <br></br>
                <br></br>
                {/* <button as="input" type="submit" variant="success" >All Events</button></Link> */}
                
                <Form name="event form" method="POST" onSubmit={event => this.handleSubmit(event)}>
                    {this.state.errorStatus == 'error'?
                    <FlashMessage duration={300000}>

                        <Alert variant="danger">
                        <Alert.Heading>{this.state.msg}</Alert.Heading>
                        </Alert>
                        
                    </FlashMessage>
                    :null}

                {this.state.errorStatus == 'success'?
                

                    <FlashMessage duration={300000}>
                        

                            <Alert variant="success">
                            <Alert.Heading>{this.state.msg}</Alert.Heading>
                            </Alert>

                    </FlashMessage>
                    
                    :null}
                        
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Name
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="" name="name" value={this.state.name} onChange={this.handleChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Email
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="" name="email" onChange={this.handleChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Description
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control  as="textarea" rows={3} name="description" onChange={this.handleChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Start Date
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="Date" placeholder="" name="start_date" onChange={this.handleChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        End Date
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="Date" placeholder="" name="end_date" onChange={this.handleChange} />
                        </Col>
                    </Form.Group>

                    {/* <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Orgnization
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="" name="orgnization" onChange={this.handleChange} />
                        </Col>
                    </Form.Group> */}

                    

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Contact Person
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="" name="contact_person" onChange={this.handleChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Venue
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="" name="venue" onChange={this.handleChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Phone#
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="" name="phone" onChange={this.handleChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Mobile
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="" name="mobile" onChange={this.handleChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Website
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="url" placeholder="" name="website" onChange={this.handleChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        </Form.Label>
                        <Col sm="10">
                        <Button as="input" type="reset" variant="light" value="Reset" />
                        <Button as="input" type="submit" variant="success" className="float-right" value="Add" />

                        </Col>
                    </Form.Group>

                </Form>
            </Container>


        );
    }
}

export default Event
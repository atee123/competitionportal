import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Alert , Form , FormControl , Button} from 'react-bootstrap'
import axios from "axios"
import * as qs from "query-string"
import {useParams , BrowserRouter as Router , Route , Link } from "react-router-dom";

class EditEvent extends Component {

    constructor(props) {

       super(props)

        this.state = {
            id: props.match.params.id, 
            data:'',
            msg: '' ,
            errorStatus : '', 
            name : '' , email: '' , description: '', start_date : '', end_date : '' , orgnization: '' , contact_person:'',venue:'' , phone:'' ,website: '' , 
            
        }

    }


    componentDidMount() {

        console.log(this.state.id)

        const axiosOptions = {
            url: process.env.React_App_API_URL + 'event/getOne/'+this.state.id,
            method: "get",
          }

          axios(axiosOptions)
          .then(response => {

                console.log(response.data.message)
            

            this.setState({
            
                name: response.data.message.name,
                email : response.data.message.email,
                description : response.data.message.description,
                start_date : response.data.message.start_date,
                end_date : response.data.message.end_date,
                orgnization : response.data.message.orgnization_id,
                contact_person : response.data.message.contact_person,
                venue : response.data.message.venue,
                phone : response.data.message.phone_no,
                mobile : response.data.message.mobile_no,
                website : response.data.message.website,

  
              })

          })
          .catch(err =>

            console.log(err)
           
          )


      }


      handleChange = (event) => {        
    
        this.setState({[event.target.name] : event.target.value});
      }


      handleSubmit(event) {

        event.preventDefault()

        const formData = {}
        var fd = new FormData();
 
        fd.append( 'name', this.state.name);
        fd.append( 'description', this.state.description);
        fd.append( 'email', this.state.email);
        fd.append( 'start_date', this.state.start_date);
        fd.append( 'end_date', this.state.end_date);
        fd.append( 'orgnization_id','1' );      
        fd.append( 'contact_details', this.state.contact_details);
        fd.append( 'venue', this.state.venue);
        fd.append( 'phone_no', this.state.phone);
        fd.append( 'contact_person', this.state.contact_person);
        fd.append( 'website', this.state.website);
        fd.append( 'mobile_no', this.state.mobile);

        
        for (var key of fd.entries()) {
       
            formData[key[0]] = key[1]
        }

       
         const axiosOptions = {
          url: process.env.React_App_API_URL + 'event/update/'+ this.state.id,
          method: "post",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          data: qs.stringify(formData)
        }
      
        axios(axiosOptions)
          .then(response => {

            console.log(formData)
           
                if(response.data.status == 0){
                   
                    this.setState({
                        errorStatus : 'error',
                        msg:response.data.message,
                      })

                } 
                else {
                    this.setState({
                        errorStatus : 'success', 
                        msg:response.data.message,
                      })
                } 


          })
          .catch(err =>
            console.log(err)
          )
      }
    render() {

        return (

            <Container>
                <h1 style={{textAlign:'center'}}>Edit Event</h1>
                    <Form name="event form" method="POST" onSubmit={event => this.handleSubmit(event)}>
                        
                    {this.state.errorStatus == 'error'?
                    <Alert variant="danger">
                        <Alert.Heading>{this.state.msg}</Alert.Heading>
                    </Alert> :null}

                    {this.state.errorStatus == 'success'?
                    <Alert variant="success">
                        <Alert.Heading>{this.state.msg}</Alert.Heading>
                       
                    </Alert> :null}
                          
                        <Form.Group as={Row} controlId="formPlaintextEmail">

                            <Form.Label column sm="2">
                            Name
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="text"  value={this.state.name} name="name" onChange={this.handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Email
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="text" value={this.state.email} name="email" onChange={this.handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Description
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control as="textarea" name="description" onChange={this.handleChange}  value={this.state.description} rows={3}></Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Start Date
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="Date" onChange={this.handleChange} value={this.state.start_date} name="start_date" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            End Date
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="Date" onChange={this.handleChange} value={this.state.end_date} placeholder="" name="end_date" />
                            </Col>
                        </Form.Group>

                        {/* <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Orgnization
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="text" onChange={this.handleChange} placeholder="" value={this.state.orgnization} name="orgnization" />
                            </Col>
                        </Form.Group> */}

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Contact Person
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="text" onChange={this.handleChange} value={this.state.contact_person}  name="contact_person" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Venue
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="text" onChange={this.handleChange} value={this.state.venue} name="venue" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Phone#
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="text" onChange={this.handleChange} value={this.state.phone} name="phone" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Mobile
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="text" onChange={this.handleChange} value={this.state.mobile} name="mobile" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            website
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="url" onChange={this.handleChange} name="website" value={this.state.website} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            </Form.Label>
                            <Col sm="10">
                           
                            <Button as="input" type="submit" variant="success" className="float-right" value="update" />

                            </Col>
                        </Form.Group>

                    </Form>
            </Container>


        );
    }
}

export default EditEvent;
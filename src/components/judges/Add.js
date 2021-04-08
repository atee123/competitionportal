import React, { Component, BackHandler } from 'react';
import { BrowserRouter as Router , Route , Link, Redirect } from "react-router-dom"
import {Container, Row, Col, Alert , Form , FormControl , Button} from 'react-bootstrap'
import axios from "axios"
import * as qs from "query-string"
import FlashMessage from 'react-flash-message'
import ReactTooltip from "react-tooltip";

class Add extends Component {

    constructor(props) {

        // console.log(process.env.React_App_API_URL)
        let Params = new URLSearchParams(props.location.search)
       
        super(props) 

        this.state = {
             
             msg: '' ,
             errorStatus : '',
             redirect: false,
             first_name : '' ,
             last_name : '',
             email: '' ,
             password: '',
             confirm_password: '',
             city : '',
             mobile_no : '',
             country : '',
             address : '',
             org_name : '',
             designation : '',
             education : '',
             work_exp : '',
             msg2: {},
             messag: '',
             event_token: Params.get('event_token'),
             //  role_token: Params.get('role_token'),

             // Validation Process
             email_validation: "", //apply css class
             first_name_validation: "",
             last_name_validation: "",
             password_validation: "",
             confirm_password_validation: "",
             city_validation: "",
             mobile_no_validation: "",
             error_messages: {},
             itemValues:[]
        };

    }

    handleChange = (event) => {        
        
        // console.log(event.target.name)
        // first name validate
        if (event.target.name == "first_name" && event.target.value == "") {
            this.setState({
              first_name_validation: "in_valid",
            });
          } else if (event.target.name == "first_name" && event.target.value != "") {
            // console.log("first name");
      
            this.setState({
              first_name_validation: "valid_input",
            //   data_tip_disable_first_name: true,
            });
          }

        // last name validate
        if (event.target.name == "last_name" && event.target.value == "") {
            this.setState({
                last_name_validation: "in_valid",
            });
            } else if (event.target.name == "last_name" && event.target.value != "") {
            this.setState({
                last_name_validation: "valid_input",
                // data_tip_disable_last_name: true,
            });
        }
    
        if (event.target.name == "email" && event.target.value == "") {
            this.setState({
                email_validation: "in_valid",
            });
            } else if (event.target.name == "email" && event.target.value != "") {
            this.setState({
                email_validation: "valid_input",
                // data_tip_disable_email: true,
            });
        }
    
        if (event.target.name == "password" && event.target.value == "password") {
            this.setState({
                password_validation: "in_valid",
            });
            } else if (
            event.target.name == "password" &&
            event.target.value != "password"
            ) {
            this.setState({
                password_validation: "valid_input",
                // data_tip_disable_password: true,
            });
        }
    
        if (event.target.name == "confirm_password" && event.target.value == "") {
            this.setState({
                confirm_password_validation: "in_valid",
            });
            } else if (
            event.target.name == "confirm_password" &&
            event.target.value != ""
            ) {
            this.setState({
                confirm_password_validation: "valid_input",
                // data_tip_disable_confirm_password: true,
            });
        }
    
        if (event.target.name == "city" && event.target.value == "") {
            this.setState({
                city_validation: "in_valid",
            });
            } else if (event.target.name == "city" && event.target.value != "") {
            this.setState({
                city_validation: "valid_input",
                // data_tip_disable_city: true,
            });
        }
    
        if (event.target.name == "mobile_no" && event.target.value == "") {
            this.setState({
                mobile_no_validation: "in_valid",
            });
            } else if (event.target.name == "mobile_no" && event.target.value != "") {
            this.setState({
                mobile_no_validation: "valid_input",
                // data_tip_disable_mobile_no: true,
            });
        }


        this.setState({[event.target.name] : event.target.value});

    }

    handleSubmit(event) {

        // console.log(this.state.venue)
        console.log('working')
        event.preventDefault()

        const formData = {}
        var fd = new FormData();
        // console.log(fd)
        fd.append( 'first_name', this.state.first_name);
        fd.append( 'last_name', this.state.last_name);
        fd.append( 'email', this.state.email);
        fd.append( 'password', this.state.password);
        fd.append( 'confirm_password', this.state.confirm_password);
        fd.append( 'city', this.state.city);  //fd.append( 'orgnization_id', this.state.orgnization);
        fd.append( 'mobile_no', this.state.mobile_no);
        fd.append( 'country', this.state.country);
        fd.append( 'address', this.state.address);
        fd.append( 'org_name', this.state.org_name);
        fd.append( 'designation', this.state.designation);
        fd.append( 'education', this.state.education);
        fd.append( 'work_exp', this.state.work_exp);
        fd.append( 'event_token', this.state.event_token);

        for (var key of fd.entries()) {
            formData[key[0]] = key[1]
            // console.log(formData[key])
        }
        // console.log(formData)
        // BackHandler.exitApp();
        const axiosOptions = {
            url: process.env.React_App_API_URL+ 'admin/judge',
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Accept" : "application/json"
                 },
            // data: qs.stringify(formData)
            data: formData

        }

        // console.log(axiosOptions)
        
        axios(axiosOptions)
            .then(response => {
                console.log(response)
                
                if(response.data.status == 0){

                    if (response.data.errors.first_name != undefined) {
                        this.setState({
                          first_name_validation: "in_valid",
                        //   data_tip_disable_first_name: false,
                        });
                      } else {
                        this.setState({
                          first_name_validation: "valid",
                        });
                      }

                      if (response.data.errors.password != undefined) {
                        this.setState({
                          password_validation: "in_valid",
                        //   data_tip_disable_password: false,
                        });
                      } else {
                        this.setState({
                          password_validation: "valid",
                        });
                      }
            
                    //   if (response.data.errors.confirm_password != undefined) {
                    //     this.setState({
                    //       confirm_password_validation: "in_valid",
                    //     //   data_tip_disable_confirm_password: false,
                    //     });
                    //   } else {
                    //     this.setState({
                    //       confirm_password_validation: "valid",
                    //     });
                    //   }
            
                      if (response.data.errors.last_name != undefined) {
                        this.setState({
                          last_name_validation: "in_valid",
                        //   data_tip_disable_last_name: false,
                        });
                      } else {
                        this.setState({
                          last_name_validation: "valid",
                        });
                      }
            
                      if (response.data.errors.city != undefined) {
                        this.setState({
                          city_validation: "in_valid",
                        //   data_tip_disable_city: false,
                        });
                      } else {
                        this.setState({
                          city_validation: "valid",
                        });
                      }
            
                      if (response.data.errors.mobile_no != undefined) {
                        this.setState({
                          mobile_no_validation: "in_valid",
                        //   data_tip_disable_mobile_no: false,
                        });
                      } else {
                        this.setState({
                          mobile_no_validation: "valid",
                        });
                      }

                      this.setState({
                        errorStatus: "error",
                        msg: response.data.message,
                        error_messages: response.data.messgae,
                        msg2: response.data.errors
                      });

                    //   console.log(this.state.msg2)
                    //   console.log(this.state.error_messages)
                    //   console.log(this.state.errorStatus)

                } else if (response.data.status == 1){

                    this.setState({
                        errorStatus: "success",
                        messag: response.data.message,
                        first_name: "",
                        last_name: "",
                        email: "",
                        password: "",
                        confirm_password: "",
                        city: "",
                        mobile_no: "",
                      });
                    
                }
                    
            })
            .catch(err =>
            console.log(err)
            )
    }

    handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = "")
        );
        this.setState({
          itemValues: [{}]
        });
      };

    render() {

        return (
            <Container fluid>
                <Row>
                    <Col>
                        <Container>
                            <Row>
                                <Col>
                                    <h1 className="text-center mt-4 mb-4">Judge Register</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>

                                    <Form name="judge form" method="POST" onSubmit={event => this.handleSubmit(event)}>

                                    {this.state.errorStatus == 'error' ?
                                        <Form.Row>
                                            <Col>
                                            
                                            <FlashMessage duration={4000} persistOnHover={true}>
                                                <h5 className="text-center" id="flash_message_heading" style={{color: 'red'}}>{this.state.error_messages}</h5>
                                            </FlashMessage>
                                            {/* <p style={{color: 'red'}}> {this.state.error_messages}</p> */}

                                            </Col>
                                        </Form.Row>
                                    :null}


                                    {this.state.errorStatus == 'success'?
                                        <Form.Row>
                                            <Col>

                                                
                                                <FlashMessage duration={1000} persistOnHover={true}>
                                                    <h5 className="text-center" id="flash_message_heading" style={{color: 'green'}}>{this.state.messag}</h5>
                                                </FlashMessage>
                                                {/* {this.handleReset()} */}
                                                <Redirect to="/judges"/>
                                            </Col>
                                        </Form.Row>
                                    :null}

                                        <Form.Group as={Row} controlId="formPlaintextFirstName">
                                            <Form.Label column sm="2">
                                            First Name 
                                            </Form.Label>
                                            <Col sm="10">
                                            <Form.Control type="text" name="first_name" placeholder="First Name" onChange={this.handleChange}/>
                                            {this.state.msg2.first_name != undefined ? (
                                                    <span style={{color: 'red'}}> {this.state.msg2.first_name}</span>
                                                ) : null}
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formPlaintextLastName">
                                            <Form.Label column sm="2">
                                            Last Name
                                            </Form.Label>
                                            <Col sm="10">
                                            <Form.Control type="text" name="last_name" placeholder="Last Name" onChange={this.handleChange}/>
                                            {this.state.msg2.last_name != undefined ? (
                                                    <span style={{color: 'red'}}> {this.state.msg2.last_name}</span>
                                                ) : null}
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formPlaintextEmail">
                                            <Form.Label column sm="2">
                                            Email
                                            </Form.Label>
                                            <Col sm="10">
                                            <Form.Control type="email" name="email" placeholder="Email" onChange={this.handleChange}/>
                                            {this.state.msg2.email != undefined ? (
                                                    <span style={{color: 'red'}}> {this.state.msg2.email}</span>
                                                ) : null}
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formPlaintextPassword">
                                            <Form.Label column sm="2">
                                            Password
                                            </Form.Label>
                                            <Col sm="10">
                                            <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                                            {this.state.msg2.password != undefined ? (
                                                    <span style={{color: 'red'}}> {this.state.msg2.password}</span>
                                                ) : null}
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formPlaintextConfirmPassword">
                                            <Form.Label column sm="2">
                                            Confirm Password
                                            </Form.Label>
                                            <Col sm="10">
                                            <Form.Control type="password" name="confirm_password" placeholder="Confirm Password" onChange={this.handleChange} />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formPlaintextCity">
                                            <Form.Label column sm="2">
                                            City
                                            </Form.Label>
                                            <Col sm="10">
                                            <Form.Control type="text" name="city" placeholder="City" onChange={this.handleChange}/>
                                            {this.state.msg2.city != undefined ? (
                                                    <span style={{color: 'red'}}> {this.state.msg2.city}</span>
                                                ) : null}
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formPlaintextMobleNo">
                                            <Form.Label column sm="2">
                                            Mobile Number
                                            </Form.Label>
                                            <Col sm="10">
                                            <Form.Control type="text" name="mobile_no" placeholder="Mobile Number" onChange={this.handleChange} />
                                            {this.state.msg2.mobile_no != undefined ? (
                                                    <span style={{color: 'red'}}> {this.state.msg2.mobile_no}</span>
                                                ) : null}
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formPlaintextCountry">
                                            <Form.Label column sm="2">
                                            Country
                                            </Form.Label>
                                            <Col sm="10">
                                            <Form.Control type="text" name="country" placeholder="Country" onChange={this.handleChange} />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formPlaintextAddress">
                                            <Form.Label column sm="2">
                                            Address
                                            </Form.Label>
                                            <Col sm="10">
                                            <Form.Control type="text" name="address" placeholder="Address" onChange={this.handleChange} />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formPlaintextOrgnizationName">
                                            <Form.Label column sm="2">
                                            Orgnization Name
                                            </Form.Label>
                                            <Col sm="10">
                                            <Form.Control type="text" name="org_name" placeholder="Orgnization Name" onChange={this.handleChange}/>
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formPlaintextDesignation">
                                            <Form.Label column sm="2">
                                            Designation
                                            </Form.Label>
                                            <Col sm="10">
                                            <Form.Control type="text" name="designation" placeholder="Designation" onChange={this.handleChange} />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formPlaintextEducation">
                                            <Form.Label column sm="2">
                                            Education
                                            </Form.Label>
                                            <Col sm="10">
                                            <Form.Control type="text" name="education" placeholder="Education" onChange={this.handleChange} />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formPlaintextWorkExperience">
                                            <Form.Label column sm="2">
                                            Work Experience
                                            </Form.Label>
                                            <Col sm="10">
                                            <Form.Control type="text" name="work_experience" placeholder="Work Experience" onChange={this.handleChange} />
                                            </Col>
                                        </Form.Group>
                                        <Form.Row>
                                            <Form.Label column sm="2">

                                            </Form.Label>

                                            <Col sm="5">
                                                <Button type="submit" href={this.state.event_token}> Reset </Button>
                                            </Col>
                                            {/* <Col sm="7">
                                            </Col> */}
                                            <Col sm="5" className="text-right">
                                                <Button type="submit"> Register </Button>
                                            </Col>
                                        </Form.Row>
                                        
                                        
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Add;
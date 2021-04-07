import React, { Component, BackHandler } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BrowserRouter as Router , Route , Link, Redirect } from "react-router-dom"
import {Alert , Form , FormControl , Button} from 'react-bootstrap'
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
        // console.log('working')
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
                // console.log(response)
                
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
            <div>
                 <Container>              

                    <div style={{height: "100px"}}></div>
                    <section >
                        <div class="container">
                            <div class="row">
                                <div class="col-12 col-lg-3"></div>
                                <div class="col-12 col-lg-6">
                                    <h1 style={{textAlign:'center'}}>Judge Registeration</h1>
                                    <form name="user form" method="POST" onSubmit={event => this.handleSubmit(event)}>

                                    {this.state.errorStatus == 'error' ?
                                        <div class="col-12 m-0 p-2 input-group">
                                            
                                            <FlashMessage duration={4000} persistOnHover={true}>
                                                <h5 id="flash_message_heading" style={{color: 'red'}}>{this.state.error_messages}</h5>
                                            </FlashMessage>
                                            {/* <p style={{color: 'red'}}> {this.state.error_messages}</p> */}

                                        </div>
                                    :null}

                                    {this.state.errorStatus == 'success'?
                                        <div class="col-12 m-0 p-2 input-group">
                                            <div style={{ paddingLeft: "8%" }}>
                                                <FlashMessage duration={4000} persistOnHover={true}>
                                                    <h5 id="flash_message_heading" style={{color: 'green'}}>{this.state.messag}</h5>
                                                </FlashMessage>
                                                {/* {this.handleReset()} */}
                                                {/* <Redirect to="/judges"/> */}
                                            </div>
                                            {/* <p style={{color:'green'}}>{this.state.messag}

                                            <Redirect to="/verify_code"  />
                                            </p> */}
                                            </div>
                                        :null}


                                        <div class="row form-group-margin">
                                            
                                            <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">

                                                <label>First Name</label>
                                                <input type="text" name="first_name" placeholder="First Name" onChange={this.handleChange}/>
                                                {this.state.msg2.first_name != undefined ? (
                                                    <span style={{color: 'red'}}> {this.state.msg2.first_name}</span>
                                                ) : null}
                                                
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                                <label>Last Name</label>
                                                <input type="text" name="last_name" placeholder="Last Name" onChange={this.handleChange}/>
                                                {this.state.msg2.last_name != undefined ? (
                                                    <span style={{color: 'red'}}> {this.state.msg2.last_name}</span>
                                                ) : null}
                                                             
                                            </div>

                                            <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                <label>Email</label>
                                                <input type="text" name="email" placeholder="Email" onChange={this.handleChange}/>
                                                {this.state.msg2.email != undefined ? (
                                                    <span style={{color: 'red'}}> {this.state.msg2.email}</span>
                                                ) : null}
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                                <label>Password</label>
                                                <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                                                {this.state.msg2.password != undefined ? (
                                                    <span style={{color: 'red'}}> {this.state.msg2.password}</span>
                                                ) : null}
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                                <label>Confirm Password</label>
                                                <input type="password" name="confirm_password" placeholder="Confirm Password" onChange={this.handleChange}/>
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                                <label>City</label>
                                                <input type="text" name="city" placeholder="City" onChange={this.handleChange}/>
                                                {this.state.msg2.city != undefined ? (
                                                    <span style={{color: 'red'}}> {this.state.msg2.city}</span>
                                                ) : null}
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                                <label>Mobile Number</label>
                                                <input type="text" name="mobile_no" placeholder="Mobile Number" onChange={this.handleChange}/>
                                                {this.state.msg2.mobile_no != undefined ? (
                                                    <span style={{color: 'red'}}> {this.state.msg2.mobile_no}</span>
                                                ) : null}
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                                <label>Country</label>
                                                <input type="text" name="country" placeholder="Country" onChange={this.handleChange}/>
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                                <label>Address</label>
                                                <input type="text" name="address" placeholder="Address" onChange={this.handleChange}/>
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                                <label>Orgnization Name</label>
                                                <input type="text" name="org_name" placeholder="Orgnization Name" onChange={this.handleChange}/>
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                                <label>Designation</label>
                                                <input type="text" name="designation" placeholder="Designation" onChange={this.handleChange}/>
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                                <label>Education</label>
                                                <input type="text" name="education" placeholder="Education" onChange={this.handleChange}/>
                                            </div>

                                            <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                                <label>Work Experience</label>
                                                <input type="text" name="work_exp" placeholder="Work Experience" onChange={this.handleChange}/>
                                            </div>
                                            
                                            <div class="col-12 input-group m-0 p-2">
                                                <input type="submit" class="float-right btn btn-success" value="Register" style={{marginLeft:"45%"}}/>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div class="col-12 col-lg-3"></div>
                            </div>
                        </div>
                    </section>
                
                </Container>
            </div>
        );
    }
}

export default Add;
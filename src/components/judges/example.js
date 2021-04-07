import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BrowserRouter as Router , Route , Link, Redirect } from "react-router-dom"
import {Alert , FormGroup, FormText, Form , FormControl , Button} from 'react-bootstrap'
import axios from "axios"
import * as qs from "query-string"
import FlashMessage from 'react-flash-message'
import $ from 'jquery'
 

class Example extends Component {

    constructor(props){
        super(props)
        // this.state = {
        //     firstNameErr: '',
        //     lastNameErr: '',
        // }
        // this.getValidationState = this.getValidationState.bind(this);

        this.state = {
          fields: {},
          errors: {}
        }
      }
      
      handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Cannot be empty";
        }
  
        if(typeof fields["name"] !== "undefined"){
           if(!fields["name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = "Only letters";
           }        
        }
   
        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }
  
        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
        }  

          this.setState({errors: errors});
          return formIsValid;
      }


      contactSubmit(e){
        e.preventDefault();

        if(this.handleValidation()){
           alert("Form submitted");
        }else{
           alert("Form has errors.")
        }
  
      }

      handleChange(field, e){         
          let fields = this.state.fields;
          fields[field] = e.target.value;        
          this.setState({fields});
      }



// Separate Code



      // getValidationState() {
      //   var errors = this.state.errors;
      //   if (!$.isEmptyObject(errors))
      //   {
      //     var firstErr = '';
      //     var lastErr = '';
      //     errors.forEach((error) => {
      //       console.log("error:", error.name);
      //       // Check each error to see which input it belongs to
      //       // NOTE: please also consider using error.name instead, if error.message is invalid, thanks!
      //       if(error.message.indexOf('firstName') != -1){
      //         firstErr = error.message;
      //       }
      //       if(error.message.indexOf('lastName') != -1){
      //         lastErr = error.message
      //       }     
      
      //     });
      
      //     this.setState({
      //       firstNameErr: firstErr,
      //       lastNameErr: lastErr,
      //     });
      
      //   }
      // }
      

      // handleSubmit(event){

      //   event.preventDefault()

      //   const formData = {}
      //   var fd = new FormData();
      //   console.log(this.state.name)
      //   fd.append( 'firstName', this.state.firstNameErr);
      //   fd.append( 'lastName', this.state.lastNameErr);

      //   const axiosOptions = {
      //       url: process.env.React_App_API_URL+ 'admin/judge',
      //       method: "post",
      //       headers: {
      //           "Content-Type": "application/json",
      //           "Accept" : "application/json"
      //            },
      //       // data: qs.stringify(formData)
      //       data: formData

      //   }

      //   axios(axiosOptions)
      //       .then(response => {
      //           console.log(response)
      //           // console.log(response.data.data.errors.last_name)
      //           // console.log(response.headers)
      //           var errors = response.data.errors;

      //           var errormessage = ""

      //           Object.keys(errors).forEach(function(key) {
                   
      //               // errormessage += errors[key] + "<br></br>";
      //               errormessage += errors[key] + " ";
      //           });

      //           // console.log(response.data)
      //           // console.log(response.data.errors)
      //       //   console.log(typeof errormessage)
      //       //   console.log(response.data.status)
      //         if(response.data.status == 0){
                    
      //               this.setState({
      //                   errorStatus : 'error',
      //                   msg2: errors,
      //                   msg: errormessage
      //                   })

      //           } 
      //           else {
      //               this.setState({
      //                   errorStatus : 'success', 
      //                   msg:response.data.message,
                        
      //                   })
      //           }

      //               // this.setState({
      //               //     errorStatus : errormessage,
      //               //     })

               
      //               // this.setState({
      //               //     errorStatus : 'success', 
      //               //     msg:response.data.message,
                        
      //               //     })
                
      //       })
      //       .catch(err =>
      //       console.log(err)
      //       )
        
      // }



      render() {
        const inputProps = {
          value: this.state.address,
          onChange: this.onChange,
        }
        return (

            <h1> Example Page </h1>,
          // <form onSubmit={this.handleSubmit.bind(this)}>
      
          //   <FormGroup
          //     validationState={this.getValidationState()} >
          //     <FormControl
          //       type="text"
          //       name="firstName"
          //       value={this.state.firstName}
          //       placeholder="First name"
          //       onChange={this.handleChange}
          //     />
          //     <FormControl.Feedback />
          //     <FormText>
          //       <p className="text-danger">{this.state.firstNameErr}</p>
          //     </FormText>
          //   </FormGroup>
      
          //   <FormGroup >
          //     <FormControl
          //       type="text"
          //       name="lastName"
          //       value={this.state.lastName}
          //       placeholder="Last name"
          //       onChange={this.handleChange}
          //     />
          //     {/* <HelpBlock>
          //       <p className="text-danger">{this.state.lastNameErr}</p>
          //     </HelpBlock> */}
          //     <FormText>
          //         <p className="text-danger">{this.state.lastNameErr}</p>
          //     </FormText>
          //   </FormGroup>
      
      
          //   <FormGroup >
          //     <Button type="submit">
          //       Save
          //     </Button>
          //   </FormGroup>
          // </form>




          <div>           
                   <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
                        <div className="col-md-6">
                          <fieldset>
                               <input ref="name" type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
                               <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                              <br/>
                             <input refs="email" type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                             <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                             <br/>
                             <input refs="phone" type="text" size="30" placeholder="Phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}/>
                             <br/>
                             <input refs="address" type="text" size="30" placeholder="Address" onChange={this.handleChange.bind(this, "address")} value={this.state.fields["address"]}/>
                             <br/>
                         </fieldset>
                      </div>

                      <div className="col-md-12">
                        <fieldset>
                          <button className="btn btn-lg pro" id="submit"
                                  value="Submit">Send Message</button>
                        </fieldset>
                      </div>
          
                  </form>
                </div>
        )
    }
             
}

export default Example
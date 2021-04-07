import React, { Component } from 'react'
import MainHeader from "./main_header"
import MainFooter from "./main_footer"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



class MainLayout extends Component {

    render() {

        return (

            <div>
               
                        <MainHeader></MainHeader>
                       
                            {this.props.children}

                        {/* <MainFooter></MainFooter> */}
            
            
            </div>

        );

    }

}

export default MainLayout;

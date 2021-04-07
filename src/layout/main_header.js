import React, { Component } from 'react';
import styles from './main_header.css'
import { BrowserRouter as Router , Route , Link } from "react-router-dom";
import Event from '../components/events/add'
import GetAllEvents from '../components/events/get_all'
import EditEvent from '../components/events/edit'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Form , FormControl , Button} from 'react-bootstrap'

class MainHeader extends Component {

    render() {

        return (

           
                    <Navbar bg="dark" variant="dark">
                        <Nav className="mr-auto">
                        <Nav><Link to='/all_events'>Events</Link></Nav>&nbsp;&nbsp;
                        <Nav><Link to='/mentors'>Mentors</Link></Nav>&nbsp;&nbsp;
                        <Nav><Link to='/students'>Students</Link></Nav>&nbsp;&nbsp;
                        <Nav><Link to='/judges'>Judges</Link></Nav>&nbsp;&nbsp;
                        {/* <Nav><Link to='/add'>Organizations</Link></Nav> */}
                        </Nav>

                    </Navbar>
        
        
            );
    }

}

export default MainHeader;
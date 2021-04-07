import logo from './logo.svg';
import './App.css';
import styles from './layout/main_header.css'
import { BrowserRouter as Router , Route , Link } from "react-router-dom";
import MainLayout from './layout/main_layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import Event from './components/events/add'
import GetAllEvents from './components/events/get_all'
import Homepage from './components/homepage'
import EditEvent from './components/events/edit'
import Hook from './components/events/hook'
import MentorList from './components/mentors/mentorlist';
import Clock from './components/mentors/clock'
import StudentList from './components/students/StudentList';
import Add from './components/judges/Add';
import JudgeList from './components/judges/judgelist';
import Example from './components/judges/example';




const AppRoute = ({component : Component, layout:Layout, ...rest})=>(
  <Route {...rest} render={props=>(
    <Layout><Component {...props}></Component></Layout>
    )}>
    </Route>
    )



function App() {

  return (

     
          <Router>
               <AppRoute exact path='/' layout={MainLayout} component={Homepage} />
               <AppRoute exact path='/events' layout={MainLayout} component={Event} />
               <AppRoute exact path='/edit_event/:id' layout={MainLayout} component={EditEvent} />
               <AppRoute exact path='/all_events' layout={MainLayout} component={GetAllEvents} />
               {/* <AppRoute exact path='/hook' layout={MainLayout} component={Hook} /> */}
               <AppRoute exact path='/mentors' layout={MainLayout} component={MentorList} />
               <AppRoute exact path='/students' layout={MainLayout} component={StudentList} />
               {/* <AppRoute exact path='/clock' layout={MainLayout} component={Clock} /> */}
               <AppRoute exact path='/add_judge' layout={MainLayout} component={Add} />
               <AppRoute exact path='/judges' layout={MainLayout} component={JudgeList} />
               <AppRoute exact path='/example' layout={MainLayout} component={Example} />
          </Router>
          
      
  );

}

export default App;

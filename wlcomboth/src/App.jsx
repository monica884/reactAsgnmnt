// import logo from './logo.svg';
// import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Mycomponent from './Components/Mycomponent/MyComponent';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import 'bootstrap/dist/css/bootstrap.css';
//import RegistrationForm from './Components/Registrationform/RegistrationForm';
import Welcome from './Components/WelcomBoth/Welcome';





function App() {


  return (
    <>
    
    <Welcome/>

    {/* <Guest/>
    <Admin/> */}


      {/* <RegistrationForm /> */}
    </>
  );
}


export default App;

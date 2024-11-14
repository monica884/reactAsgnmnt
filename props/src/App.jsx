// import logo from './logo.svg';
// import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Mycomponent from './MyComponent';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap';
import Container from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="">
      <h1 className='bg-danger'>    <FontAwesomeIcon icon="fa-solid fa-house" style={{ color: "#63E6BE", }} /> firstapp</h1>
      <Mycomponent userName="Monica" role="9" />

     
    </div>
  );
}


export default App;

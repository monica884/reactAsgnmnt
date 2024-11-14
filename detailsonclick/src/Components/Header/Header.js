

import { Container, Row, Col } from 'react-bootstrap';
import './Header.css';


import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Container fluid className="">
        <Row >
          <h1 className='my-3 text-center shadow-sm '>
            <Link to="/" className='remove_defult' >SpaceX</Link>
          </h1>
        </Row>
      </Container>
    </>
  );
}

export default Header;
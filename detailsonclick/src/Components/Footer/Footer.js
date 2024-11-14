
import { Container,Row,Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <>
    <Container fluid className='mt-5 pt-5'>
      <Row className="footer_shadow ">
      <p className='text-center my-3 '>
        All rights reserved 2024.
      </p>
      </Row>
    </Container>
   
    </>
  );
}

export default Footer;
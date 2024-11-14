import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductListUI } from './Components/Fetch_1/Fetch_1';
import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


function App() {
  const [products, updateProducts] = useState(null);



  async function handleClick() {

    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      if (result.status === 200) {
        const data = await result.json();
        updateProducts(data);
      }
    }
    catch (err) {
      console.log(err.message);
    }
  }


  
  return (
    <Container fluid className='my-3' >
      <Row>
        <Col className='col-2'>
          <Button variant='primary' onClick={handleClick} > Fetch Data </Button>
        </Col>
      </Row>
      <Row className='my-3'>
        <Col>
          <ProductListUI itemsList={products} />
        </Col>
      </Row>
    </Container>

  );
}

export default App;

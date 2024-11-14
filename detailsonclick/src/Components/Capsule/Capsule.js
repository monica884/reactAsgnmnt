

import { Col, Container, Row, Button, Card, ListGroup } from 'react-bootstrap';
import './Capsule.css';
import { Link } from 'react-router-dom';
import DATABASE from '../DATAB/capsules.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useParams } from "react-router-dom"
import { Navigate } from 'react-router-dom';

function Capsule() {

  return (
    <>
      <Container fluid>
        <Row className='mt-5'>
          <Col lg={12} md={12} sm={12}>
            <Link to="/" className='mt-5'>
              <Button className='back_btn'>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" flip="horizontal" style={{ color: "#d6931f", }} className='me-1' />
                Go Back</Button>
            </Link>
          </Col>


          <Col >
            <ProductListUI itemsList={DATABASE} />
          </Col>
        </Row>
      </Container>

    </>
  );

}
export default Capsule;


export function ProductListUI({ itemsList }) {
  return (
    <>
      <Container fluid>
        <Row className=''>
          <Col lg={12} md={12} sm={12} className='mt-5'>
            {
              (itemsList) &&
              <Row>
                {
                  itemsList.map(i =>
                    <Col lg={3} md={6} sm={12} className=' my-1' key={i.id}  >
                      <ProductUI item={i} />
                    </Col>
                  )
                }
              </Row >
            }
          </Col>
        </Row>
      </Container>
    </>
  );
}



export function ProductUI({ item }) {

  // const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Container fluid>
        {/* <input id="searchInput" type="text" placeholder='search here...' onChange={(e) => {
          setSearchTerm(e.target.value) } } /> 
  {
          DATABASE
            .filter((value) => {
              if (searchTerm == '') {
                return value;
              }
              else if (
                value.serial.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                return value;
              }
            })
            .map((value) => {
              return (

                <div key={value.id}>
                  <Row>
                    <Col className="col-8">
                      {item.serial}

                    </Col>
                    <Col className="col-4">
                      <Link to="#"><Button className='view_btn'>View</Button></Link>
                    </Col>
                  </Row>
                  <div className='org_bg mt-5 px-1'>
                    {item.type}
                  </div>
                </div>

              )
            })
        }  */}

        <Row>
          <Col lg={12} md={12} sm={12} className="">  <Card className="">
            <Card.Body className="demo">
              <Row>

                <Col className="col-8">
                  {item.serial}

                </Col>
                <Col className="col-4">
                  <Link to="/capsule/:id"><Button className='view_btn'>View</Button></Link>
                </Col>
              </Row>

              <div className='org_bg mt-5 px-1'>
                {item.type}
              </div>

            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container >
    </>
  );
}



export function View() {
  const { id } = useParams();
  const [toHome, setToHome] = useState(false);
  if (toHome) {
    return <Navigate to="/capsule" />;
  }

  return (
    <>
      <div className='mt-5 pt-5'>
        <h1>Settings Page</h1>
        <button onClick={() => setToHome(true)} className='back_btn'>Back</button>
      </div>

    </>
  )

}
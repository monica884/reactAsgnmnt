import { Button, CardBody, Col, ListGroup, Row, Card, Container } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import DATABASE from '../DATAB/capsules.json'
import { Link } from 'react-router-dom';


export default function View() {
    const { id } = useParams();
 
     const [productData, setProductData] = useState(
        DATABASE.find((product) => product.id === parseInt(id))
    );

    // const [toHome, setToHome] = useState(false);
    // if (toHome) {
    //     return <Navigate to="/capsule" />;
    // }

    if (!productData) {
                 return (
                     <div className="container my-5">
                         <h2>Product not found</h2>
                         <p>id:  {id}</p>
                         <button className="btn btn-sm btn-primary mb-3">
                             <Link
                                 to="/capsule"
                                 className="text-white text-decoration-none"
                             >
                                 Back to Products
                             </Link>
                         </button>
                     </div>
                 );
             }

    return (
        <>
            {/* <div className='mt-5 pt-5'>
                <button onClick={() => setToHome(true)} className='back_btn'>Back</button>
            </div>
            <h1>im view</h1>
            {id} */}
        
        
        <Container>
                 <Row className='d-flex justify-content-center align-item-center'>

                     <Col>
                         <h1>Details</h1>
                         {/* <p> {productData.reuse_count}</p>
                         <p> {productData.water_landings}</p>
                         <p> {productData.land_landings}</p>
                         <p> {productData.last_update}</p>
                         <p> {productData.launches}</p>
                         <p> {productData.serial}</p>
                         <p> {productData.status}</p>
                         <p> {productData.type}</p> */}
                         <p> {productData.id}</p>
                     </Col>
                 </Row>
             </Container>
           
        </>
    )
}




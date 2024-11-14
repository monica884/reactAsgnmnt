
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StartImg from '..//../Images/starship.webp';
import './Home.css';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <>
        
            <Container >
                <Row>
                    <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12} className='mt-3'>
                        <h5 className='mt-5'>
                            SpaceX API...
                        </h5>

                        <p className='border-bottom'>
                            <FontAwesomeIcon icon="fa-solid fa-capsules" style={{ color: "#e1842d", }} />
                            <Link to="/capsule" className='remove_defult2'>Capsule</Link></p>


                        <p className='border-bottom'>
                            <FontAwesomeIcon icon="fa-solid fa-paperclip" style={{ color: "#db7a39", }} />
                            Company info</p>


                        <p className='border-bottom'>
                            <FontAwesomeIcon icon="fa-solid fa-paperclip" style={{ color: "#db7a39", }} />
                            Core</p>


                        <p className='border-bottom'>
                            <FontAwesomeIcon icon="fa-solid fa-paperclip" style={{ color: "#db7a39", }} />
                            Crew</p>


                        <p className='border-bottom'>
                            <FontAwesomeIcon icon="fa-solid fa-paperclip" style={{ color: "#db7a39", }} />
                            Dragons</p>

                        <p className='border-bottom'>
                            <FontAwesomeIcon icon="fa-solid fa-paperclip" style={{ color: "#db7a39", }} />
                            Landpads</p>
                        <p className='border-bottom'>
                            <FontAwesomeIcon icon="fa-solid fa-paperclip" style={{ color: "#db7a39", }} />
                            Launches</p>
                        <p className='border-bottom'>
                            <FontAwesomeIcon icon="fa-solid fa-paperclip" style={{ color: "#db7a39", }} />
                            Payloads</p>
                        <p className='border-bottom'>
                            <FontAwesomeIcon icon="fa-solid fa-paperclip" style={{ color: "#db7a39", }} />
                            Roadster info</p>
                        <p className='border-bottom'>
                            <FontAwesomeIcon icon="fa-solid fa-paperclip" style={{ color: "#db7a39", }} />
                            Rockets</p>
                        <p className='border-bottom'>
                            <FontAwesomeIcon icon="fa-solid fa-paperclip" style={{ color: "#db7a39", }} />
                            Ships</p>
                        <p className='border-bottom'>
                        <FontAwesomeIcon icon="fa-solid fa-paperclip" style={{ color: "#db7a39", }} />
                            Star Link</p>


                    </Col>

                    <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12} className='mt-5'>
                        <img src={StartImg} alt='rocket' className='img-fluid' />
                    </Col>
                </Row>
            </Container>
     
            


        </>
    );
}

export default Home;
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NavabarComp from './NavabarComp'
import Footer from './Footer';
import img1 from '../assets/img1.jpg'


const Home = () => {
    return (
        <div>
            <NavabarComp />

            <div className="bg-light rounded-lg img-wrapper">
                <img src={img1} alt="Image1" id="home-img" className="img-fluid" />
                <div className="img-content">
                    <h2 className="animate__animated animate__backInLeft"><strong>The Online Library</strong></h2>
                    <p className="animate__animated animate__backInRight">Opening the door to knowledge.</p>
                </div>
            </div>



            <Container>
                <Row className="mt-3">
                    <Col md={4}>
                        <h4 className="text-primary text-center">Discussion Rooms</h4>
                        <hr />
                        <p>Library has introduced Discussion Rooms. Students need to study in groups can use these discussions rooms.</p>
                    </Col>

                    <Col md={4}>
                        <h4 className="text-primary text-center">Study carrels</h4>
                        <hr />
                        <p>Library has added study carrels in its infrastructure for personalized studies purpose. The carrels are located at Library. These carrels are partitioned by glass fitting and charging point is also provided for the laptops.</p>
                    </Col>

                    <Col md={4}>
                        <h4 className="text-primary text-center">Purchase of New books</h4>
                        <hr />
                        <p>Library has recently procured 547 books(Aug.2019) for students and faculty members.</p>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    )
}

export default Home

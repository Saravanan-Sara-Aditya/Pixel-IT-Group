import React, { Suspense, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImageSkeletonLoader from '../Layouts/Skeleton';
import LazyImage from './LazyImage';
import contact from "../assets/images/contact.jpg"
import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {

    useEffect(() => {
        // Initialize AOS when component mounts
        AOS.init({ duration: 1000 }); // Set the duration of animation
    }, []);


    return (
        <Container className="pb-5">
            
            <h1 className="fw-bold mt-3 mb-3 text-white" data-aos="fade-up">CONTACT US</h1>
            <Row>
                <Col md={6} data-aos="fade-left">
                    <Suspense fallback={<ImageSkeletonLoader />}>
                        <LazyImage src={contact} />
                    </Suspense>
                </Col>
                <Col md={6} className='mt-3 mt-lg-0 text-white' data-aos="fade-right">
                    <h2 className='text-white'>Working Hours</h2>
                    <p className='lead opacity-75'>09:00 - 18:00</p>
                    <h2 className='text-white'>Address</h2>
                    <p className='lead opacity-75'>Kukatpally, Hyderabad, Telangana</p>
                    <h2 className='text-white'>Email</h2>
                    <h5 className='text-white'><FontAwesomeIcon color='lightblue'  icon={faEnvelope} flip={true} size='1x'/> contact@pixelitgroup.com </h5>
                    <h2 className='text-white'>Phone</h2>
                    <h5 className='text-white'><FontAwesomeIcon  color='lightblue' icon={faPhoneAlt} size='1x' flip={true}  />+91 8125933474</h5>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;

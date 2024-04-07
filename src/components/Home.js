import React, { Suspense, useEffect } from 'react'
import AI from '../assets/images/IT_Services.jpg'
import utilities from '../assets/images/Router.avif'
import java from '../assets/images/servers.jpg'
import about from '../assets/images/ourteam.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import softwareServices from '../assets/images/software.jpg'
import Testimonials from './Testimonial'
import Mobile from "../assets/images/target.jpg"
import Mobile1 from "../assets/images/MobileApp.jpg"
import Carousel from './Carousel'
import AutoReactSwiperSlider from './WhyChooseUs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faHandshake, faCut, faGraduationCap, faCog, faAward, faHandshakeAlt, faLightbulb, faTools, faStar } from '@fortawesome/free-solid-svg-icons';
// import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import APN from "../assets/images/APN.jpg"
import AOS from 'aos';
import { Link } from 'react-router-dom'
import LazyImage from './LazyImage'
import ImageSkeletonLoader from '../Layouts/Skeleton'
import Cloud from "../assets/images/Cloud.jpg"
import HP from "../assets/images/Desktops_Laptops.jpg"
import ITSec from "../assets/images/ITSec.jpg"
import VOIP from "../assets/images/VOIP.jpeg"
import Support from "../assets/images/supportService.avif"
import Client from "../assets/images/Client_Banner.png"
import Contact from './Contactus'


const Home = () => {

    useEffect(() => {
        // Initialize AOS when component mounts
        AOS.init({ duration: 1000 }); // Set the duration of animation
    }, []);


    return (
        <div className="">
            <div class="py-0 overflow-hidden" id="banner" data-bs-theme="light">
              
                <div class="">
                    <Carousel />
                </div>
            </div>

            <div id='about' class="bg-all pt-2 pb-5 white__bg-opacity-50">
                <Container>
                    <Row className="pt-3">
                        <h1 className="fw-bold mt-3 mb-3 text-white" data-aos="fade-up">ABOUT US</h1>
                        <Col lg={6} className='mb-3' data-aos="fade-left">
                            <Suspense fallback={<ImageSkeletonLoader />}>
                                <LazyImage src={about} />
                            </Suspense>
                        </Col>
                        <Col lg={6} data-aos="fade-right">
                            <div>
                                <p className='lead opacity-75 text-white d-'>
                                    Pixel IT Group providing IT Network Security Solutions & focuses on evolving technology-specific solutions. The way customer-specific solutions are provided is distinct and different.
                                    Pixel IT Group enables technology companies to look at their day-to-day software and hardware challenges in a fresh light, and then apply inventiveness and intelligence to develop new and different approaches, all with less investment Pixel IT Group makes an in-depth assessment, designs, acquires, implements, manages and supports the clients’ software and hardware, less manpower and less hassles.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/*  */}
            <div class="bg-all pt-2 pb-5 white__bg-opacity-50">
                <Container>
                    <h1 data-aos="fade-left" class="fw-bold mt-3 text-end d-lg-block d-none text-uppercase mb-3 text-white">Our Mission</h1>
                    <h1 data-aos="fade-left" class="fw-bold mt-3 text-start d-lg-none d-block text-uppercase mb-3 text-white">Our Mission</h1>
                    <Row className="pt-3">
                        <Col data-aos="fade-up" className='order-2 order-lg-1' lg={6}>
                            <div>
                                <FontAwesomeIcon icon={faBullseye} size='3x' color='lightblue' />
                                <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
                                    Customer Focus:
                                </h4>
                                <p className='lead opacity-75 text-white'>We prioritize our customers' needs by proactively engaging with them and providing personalized solutions tailored to their requirements.</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faHandshake} size='3x' color='lightblue' />
                                <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
                                    Collaboration:
                                </h4>
                                <p className='lead opacity-75 text-white d-'>Collaboration is at the heart of our methodology, as we believe in working closely with our clients as integrated partners to achieve mutual success.</p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faStar} size='3x' color='lightblue' />
                                <h4 className='opacity-75 ms-2 text-white mb-3 d-inline'>
                                    Success:
                                </h4>
                                <p className='lead opacity-75 text-white d-'>We measure our success by the achievements of our clients, celebrating their milestones and victories as our own and striving to be catalysts for their continued growth and prosperity.</p>
                            </div>

                        </Col>
                        <Col data-aos="fade-down" className='order-1 mb-3 order-lg-2' lg={6}>
                            <Suspense fallback={<ImageSkeletonLoader />}>
                                <LazyImage src={Mobile} />
                            </Suspense>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/*  */}
            <div id="services" class="bg-all pb-3 white__bg-opacity-50">
                <div class="container">
                    <h1 data-aos="fade-right" class="fw-bold mt-3 text-white">OUR SERVICES</h1>
                    <div class="row">
                        <div class="col text-center">
                            {/* <h4 class="lead mb-0 text-uppercase text-white">Our Services</h4> */}
                        </div>
                    </div>
                    <div class="row mt-3 mb-3">
                        <div data-aos="zoom-in" class="col-md-4">
                            <Link target="_parent" to="/IT_Services">
                                <div class="card-container" >
                                    <div class="card bg-black text-white overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                        <div style={{ filter: "brightness(0.5)" }} class="card-img-top">
                                            <Suspense fallback={<ImageSkeletonLoader />}>
                                                <LazyImage class="img-fluid" src={AI} />
                                            </Suspense>
                                        </div>
                                        <div class="card-img-overlay d-flex align-items-end">
                                            <div>
                                                <h5 class="card-title text-white">IT Infrastructure Services</h5>
                                            </div>
                                        </div>
                                        <div class="card-overlay">
                                            <p className=''>Tap to Know More</p>
                                        </div>
                                    </div>
                                </div>

                            </Link>
                        </div>
                        <div data-aos="zoom-out" class="col-md-4 mt-3 mb-3 mt-lg-0">
                            <Link target="_parent" to="/IT_Support">
                            
                                <div class="card-container" >
                                    <div class="card bg-black text-white overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                        <div style={{ filter: "brightness(0.5)" }} class="card-img-top">
                                            <Suspense fallback={<ImageSkeletonLoader />}>
                                                <LazyImage class="img-fluid" src={Support} />
                                            </Suspense>
                                        </div>
                                        <div class="card-img-overlay d-flex align-items-end">
                                            <div>
                                                <h5 class="card-title text-white">IT Support</h5>
                                            </div>
                                        </div>
                                        <div class="card-overlay">
                                            <p className=''>Tap to Know More</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="zoom-in" class="col-md-4 mt-3 mb-3 mt-lg-0">
                            <Link target="_parent" to="/Cloud_Support">
                                <div class="card-container" >
                                    <div class="card bg-black text-white overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                        <div style={{ filter: "brightness(0.5)" }} class="card-img-top">
                                            <Suspense fallback={<ImageSkeletonLoader />}>
                                                <LazyImage class="img-fluid" src={Cloud} />
                                            </Suspense>
                                        </div>
                                        <div class="card-img-overlay d-flex align-items-end">
                                            <div>
                                                <h5 class="card-title text-white">Cloud Services</h5>
                                            </div>
                                        </div>
                                        <div class="card-overlay">
                                            <p className=''>Tap to Know More</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="zoom-out" class="col-md-4 mt-3 mb-3 mt-lg-0">
                            <Link target="_parent" to="/IT_Security">

                                <div class="card-container" >
                                    <div class="card bg-black text-white overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                        <div style={{ filter: "brightness(0.7)" }} class="card-img-top">
                                            <Suspense fallback={<ImageSkeletonLoader />}>
                                                <LazyImage class="img-fluid" src={ITSec} />
                                            </Suspense>
                                        </div>
                                        <div class="card-img-overlay d-flex align-items-end">
                                            <div>
                                                <h5 class="card-title text-white">Infrastructure Security</h5>
                                            </div>
                                        </div>
                                        <div class="card-overlay">
                                            <p className=''>Tap to Know More</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="zoom-in" class="col-md-4 mt-3 mb-3 mt-lg-0">
                            <Link target="_parent" to="/VOIP">

                                <div class="card-container" >
                                    <div class="card bg-black text-white overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                        <div style={{ filter: "brightness(0.8)" }} class="card-img-top">
                                            <Suspense fallback={<ImageSkeletonLoader />}>
                                                <LazyImage class="img-fluid" src={VOIP} />
                                            </Suspense>
                                        </div>
                                        <div class="card-img-overlay d-flex align-items-end">
                                            <div>
                                                <h5 class="card-title text-white">VOIP Solutions</h5>
                                            </div>
                                        </div>
                                        <div class="card-overlay">
                                            <p className=''>Tap to Know More</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="zoom-out" class="col-md-4 mt-3 mb-3 mt-lg-0">
                            <Link target="_parent" to="/Networking_Devices">

                                <div class="card-container" >
                                    <div class="card bg-black text-white overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                        <div style={{ filter: "brightness(0.8)" }} class="card-img-top">
                                            <Suspense fallback={<ImageSkeletonLoader />}>
                                                <LazyImage class="img-fluid" src={utilities} />
                                            </Suspense>
                                        </div>
                                        <div class="card-img-overlay d-flex align-items-end">
                                            <div>
                                                <h5 class="card-title text-white">Networking Devices</h5>
                                            </div>
                                        </div>
                                        <div class="card-overlay">
                                            <p className=''>Tap to Know More</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div data-aos="zoom-in" class="col-md-4 mt-3 mb-3 mt-lg-0">
                            <Link target="_parent" to="/WebApplicaiton">

                                <div class="card-container" >
                                    <div class="card bg-black text-white overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                        <div style={{ filter: "brightness(0.8)" }} class="card-img-top">
                                            <Suspense fallback={<ImageSkeletonLoader />}>
                                                <LazyImage class="img-fluid" src={Mobile1} />
                                            </Suspense>
                                        </div>
                                        <div class="card-img-overlay d-flex align-items-end">
                                            <div>
                                                <h5 class="card-title text-white">Web & App Development</h5>
                                            </div>
                                        </div>
                                        <div class="card-overlay">
                                            <p className=''>Tap to Know More</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div data-aos="zoom-out" class="col-md-4 mt-3 mb-3 mt-lg-0">
                            <Link target="_parent" to="/Servers">

                                <div class="card-container" >
                                    <div class="card bg-black text-white overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                        <div style={{ filter: "brightness(0.5)" }} class="card-img-top">
                                            <Suspense fallback={<ImageSkeletonLoader />}>
                                                <LazyImage class="img-fluid" src={java} />
                                            </Suspense>
                                        </div>
                                        <div class="card-img-overlay d-flex align-items-end">
                                            <div>
                                                <h5 class="card-title text-white">Servers</h5>
                                            </div>
                                        </div>
                                        <div class="card-overlay">
                                            <p className=''>Tap to Know More</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="zoom-in" class="col-md-4 mt-3 mb-3 mt-lg-0">
                            <Link target="_parent" to="/Access_Points">
                                <div class="card-container" >
                                    <div class="card bg-black text-white overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                        <div style={{ filter: "brightness(0.5)" }} class="card-img-top">
                                            <Suspense fallback={<ImageSkeletonLoader />}>
                                                <LazyImage class="img-fluid" src={APN} />
                                            </Suspense>
                                        </div>
                                        <div class="card-img-overlay d-flex align-items-end">
                                            <div>
                                                <h5 class="card-title text-white">Access Points</h5>
                                            </div>
                                        </div>
                                        <div class="card-overlay">
                                            <p className=''>Tap to Know More</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div data-aos="zoom-in" class="col-md-4 mt-3 mb-3 mt-lg-0">
                            <Link target="_parent" to="/Software_Solutions">

                                <div class="card-container" >
                                    <div class="card bg-black text-white overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                        <div style={{ filter: "brightness(0.5)" }} class="card-img-top">
                                            <Suspense fallback={<ImageSkeletonLoader />}>
                                                <LazyImage class="img-fluid" src={softwareServices} />
                                            </Suspense>
                                        </div>
                                        <div class="card-img-overlay d-flex align-items-end">
                                            <div>
                                                <h5 class="card-title text-white">Software Solutions</h5>
                                            </div>
                                        </div>
                                        <div class="card-overlay">
                                            <p className=''>Tap to Know More</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="zoom-out" class="col-md-4 mt-3 mb-3 mt-lg-0">
                            <Link target="_parent" to="/Desktops_Laptops">

                                <div class="card-container" >
                                    <div class="card  bg-black text-white overflow-hidden" data-bs-theme="light" style={{ maxWidth: "30rem" }}>
                                        <div style={{ filter: "brightness(0.8)" }} class="card-img-top">
                                            <Suspense fallback={<ImageSkeletonLoader />}>
                                                <LazyImage class="img-fluid" src={HP} />
                                            </Suspense>
                                        </div>
                                        <div class="card-img-overlay d-flex align-items-end">
                                            <div>
                                                <h5 class="card-title text-white">Desktops & Laptops</h5>
                                            </div>
                                        </div>
                                        <div class="card-overlay">
                                            <p className=''>Tap to Know More</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div >
            </div >
            {/*  */}
            <div id="our_clients" data-aos="fade-down" class="bg-all pt-2 pb-5 white__bg-opacity-50">
                <Container>
                <h1 data-aos="fade-left" class="fw-bold mt-3 text-start d-lg-none d-block text-uppercase mb-3 text-white">Our Clients</h1>
                    <h1 data-aos="fade-left" class="fw-bold mt-3 text-center d-none d-lg-block text-uppercase mb-3 text-white">Our Clients</h1>
                    {/* <AutoReactSwiperSlider /> */}
                    <Suspense fallback={<ImageSkeletonLoader />}>
                        <LazyImage class="img-fluid" src={Client} />
                    </Suspense>
                </Container>
            </div>

            {/* Contact Us */}
            <div id="contact_us">
            <Contact />
            </div>
        </div >
    )
}

export default Home

import React, { Suspense, useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS file for styles
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const SoftwareSolutions = () => {

    useEffect(() => {
        // Initialize AOS when component mounts
        AOS.init({ duration: 1000 }); // Set the duration of animation
    }, []);

    return (
        <div className="software-servicesh">
            {/*  */}
            <section class="py-0 overflow-hidden" id="banner" data-bs-theme="light">
                <div class="bg-holder overlay bg-img-lnd"></div>
                <div class="">
                    <div data-aos="fade-left" style={{ height: "100vh" }} class="row flex-center pt-8 pt-lg-8 pb-lg-9 pb-xl-0 glassmorphism-bg-1">
                        <div class="col-md-11 col-lg-8 col-xl-12 pb-7 pb-xl-5 text-center text-xl-start">
                            <h1 data-aos="fade" class="text-white container fw-bold">
                                Software Solutions
                            </h1>
                            <p data-aos="fade" class="lead container text-capitalize text-start text-white opacity-75">
                            We offer a range of software solutions from industry-leading providers to meet your business needs. Our offerings include software products from:
                               <span className='d-block mt-2 mb-0'>

                                    <ul type="none">
                                        <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#fff' }} />	Microsoft</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#fff' }} />	Adobe</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#fff' }} />	Red Hat</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#fff' }} />	Manage Engine</li>
                                    </ul>
                                </span>
                                Whether you require productivity tools, design software, or enterprise solutions, we provide comprehensive support and licensing options tailored to your requirements. Trust us to deliver reliable software solutions that enhance your organization's efficiency and productivity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SoftwareSolutions;


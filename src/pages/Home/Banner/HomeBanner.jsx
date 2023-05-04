import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomeBanner = () => {
    return (
        <div className='p-5 bg-success'>
            <div className='container d-flex justify-content-between align-items-center'>
                <div>
                    <h2>Welcome to Mexican Kitchen</h2>
                </div>

                <Carousel>
                    <Carousel.Item>
                        <img
                            style={{ height: "500px" }}
                            className="d-block w-100 img-fluid rounded"
                            src="https://img.freepik.com/free-photo/mexican-tacos-with-beef-tomato-sauce-salsa_2829-14221.jpg?w=996&t=st=1683143184~exp=1683143784~hmac=b978e941e4cc1247fcf6a0076c91fff169bb0a7b67ace2800cf97564a61e09df"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "500px" }}
                            className="d-block w-100 img-fluid rounded"
                            src="https://img.freepik.com/premium-photo/platter-mexican-street-tacos-with-carne-asada-chorizo-al-pastor-corn-tortillas_250927-497.jpg?w=900"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "500px" }}
                            className="d-block w-100 img-fluid rounded"
                            src="https://img.freepik.com/free-photo/mexican-kitchen_23-2147640325.jpg?w=996&t=st=1683143167~exp=1683143767~hmac=92a73644d5765de0cef2a3f88dc9f1bb62993940d46f42c15dd373ece084b337"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default HomeBanner;
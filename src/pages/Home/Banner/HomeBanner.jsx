import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../assets/slider-1.png';
import slider2 from '../../../assets/slider-2.png';
import slider3 from '../../../assets/slider-3.png';

const HomeBanner = () => {
    return (
        <div className='p-5 bg-success'>
            <div className='container d-flex flex-column flex-md-row justify-content-between align-items-center'>
                <div className='w-100 w-md-50 me-4 text-center mb-4'>
                    <h2 className='fw-bold fs-2'>Welcome to <span className='text-warning'>Mexican Kitchen</span></h2>
                    <p className='fw-bold fs-5 mt-4'>Mexican Kitchen participates in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. Some of the outgoing links on this website are affiliate links. If you purchase a product after clicking an affiliate link, I may receive a small percentage of the sale as a commission for referring you, at no extra cost to you.</p>
                </div>

                <Carousel className='w-100 w-md-50'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid rounded"
                            src={slider1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className='fw-bold fs-4'>Chiles en Nogada</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid rounded"
                            src={slider2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className='fw-bold fs-4'>Tacos al Pastor</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid rounded"
                            src={slider3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className='fw-bold fs-4'>TGuacamole</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default HomeBanner;
import React from 'react';
import Rating from 'react-rating';
import { FaRegStar, FaStar, FaArrowRight } from "react-icons/fa";
import { Button } from 'react-bootstrap';


const TopRecipe = ({ recipe }) => {
    const { name, rating, photo, about } = recipe;
    if (rating > 4.6) {
        return (
            <div className='text-center container mx-auto p-5'>
                <div className='row row-cols-1 row-cols-md-2 align-items-center g-5'>
                    <div className='col order-last order-md-first'>
                        <h2 className=' fw-bold fs-2 mt-3 text-success'>{name}</h2>
                        <p className='fs-5 mt-4 fw-bold'>
                            {about}
                        </p>
                    </div>
                    <div className='col order-first order-md-last'>
                        <img className='rounded-circle w-100' src={photo} alt="" />
                    </div>
                </div>
                <hr />
                <div className='d-flex gap-4 flex-column flex-md-row align-items-center justify-content-around'>
                    <div className='d-flex gap-2 align-items-center'>
                        <p className='m-0 mt-1 fw-bold'>Ratings: </p>
                        <Rating
                            placeholderRating={rating}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                        <p className='m-0 mt-1'><small className='fw-bold'>{rating}</small></p>
                    </div>
                    <Button className='p-2 fw-bold px-3'>More details<FaArrowRight className='ms-2'></FaArrowRight></Button>
                </div>
            </div>
        );
    }
};

export default TopRecipe;
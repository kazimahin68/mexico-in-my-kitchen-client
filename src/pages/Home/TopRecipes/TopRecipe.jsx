import React from 'react';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { GrFavorite } from "react-icons/gr";


const TopRecipe = ({ recipe }) => {
    const { name, rating, photo, about } = recipe;
    if (rating > 4.6) {
        return (
            <div className='text-center container mx-auto'>
                <div>
                    <img className='rounded-circle h-50 w-50' src={photo} alt="" />
                    <h2 className=' fw-bold fs-3 mt-3'>{name}</h2>
                    <p className='fs-5 mt-4'>
                        {about}
                    </p>
                </div>
                <hr />
                <div className='d-flex gap-2 align-items-center justify-content-around'>
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
                    <Button>Favorite <GrFavorite className='text-danger'></GrFavorite></Button>
                </div>
            </div>
        );
    }
};

export default TopRecipe;
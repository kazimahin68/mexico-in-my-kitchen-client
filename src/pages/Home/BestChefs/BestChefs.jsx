import React from 'react';

const BestChefs = ({ chef }) => {
    const { id, name, picture, years_of_experience, number_of_recipes, likes, bio } = chef;

    if (years_of_experience > 20) {
        return (
            <div className='container mx-auto p-5 bg-white rounded'>
                <div className=' row row-cols-1 row-cols-md-2 g-5'>
                    <div className='col text-center'>
                        <img className='rounded-circle w-100' src={picture} alt="" />
                    </div>
                    <div className='col'>
                        <h2 className='text-success fw-bold'>{name}</h2>
                        <p className='fs-4 fw-semibold'><span className='text-success fw-bold'>About {name} :</span> {bio}</p>
                        <p className='fs-5 fw-bold'><span className='text-success fw-bold'>Likes :</span> {likes}</p>
                        <p className='fs-5 fw-bold'><span className='text-success fw-bold'>Recipes: </span> {number_of_recipes} Recipes</p>
                        <p className='fs-5 fw-bold'><span className='text-success fw-bold'>Experiences: </span> {years_of_experience} Years</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default BestChefs;
import React from 'react';

const BestChefs = ({ chef }) => {
    const { id, name, picture, years_of_experience, number_of_recipes, likes, bio } = chef;

    if (years_of_experience > 20) {
        return (
            <div className='mb-5'>
                <h2 className='text-success bg-white p-3 rounded fw-bold text-center container mt-5 mb-3'>Most Experienced Chef</h2>
                <div className='container mx-auto row row-cols-1 row-cols-md-2 bg-white rounded p-5'>
                    <div className='col text-center'>
                        <img className='rounded-circle img-fluid' src={picture} alt="" />
                    </div>
                    <div className='col'>
                        <h2>{name}</h2>
                        <p className='fs-4'><span className='text-warning fw-semibold'>About {name} :</span> {bio}</p>
                        <p className='fs-5 fw-bold'><span className='text-warning fw-semibold'>Likes :</span> {likes}</p>
                        <p className='fs-5 fw-bold'><span className='text-warning fw-semibold'>Recipes: </span> {number_of_recipes} Recipes</p>
                        <p className='fs-5 fw-bold'><span className='text-warning fw-semibold'>Experiences: </span> {years_of_experience} Years</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default BestChefs;
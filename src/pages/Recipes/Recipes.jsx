import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import { Card, CardGroup } from 'react-bootstrap';

const Recipes = () => {
    const chef = useLoaderData();

    const { id, name, picture, years_of_experience, number_of_recipes, likes, bio, recipes } = chef;

    return (
        <div>
            <div className='bg-success p-md-3'>
                <div className='container mx-auto row row-cols-1 row-cols-md-2 g-5 mb-5 p-3 p-md-5'>
                    <div className='col text-center text-warning'>
                        <img className='rounded-circle img-fluid mb-3' src={picture} alt="" />
                        <h2 className='fw-bold fs-2'>{name}</h2>
                    </div>
                    <div className='col'>
                        <p className='fs-4 fw-bold'><span className='text-warning fw-bold fs-3'>About {name} :</span> {bio}</p>
                        <p className='fs-4 fw-bold'><span className='text-warning fw-bold'>Likes :</span> {likes}</p>
                        <p className='fs-4 fw-bold'><span className='text-warning fw-bold'>Recipes: </span> {number_of_recipes} Recipes</p>
                        <p className='fs-4 fw-bold'><span className='text-warning fw-bold'>Experiences: </span> {years_of_experience} Years</p>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <h2 className='text-success bg-white p-3 rounded fw-bold text-center'>Top Recipes of {name}</h2>
                <CardGroup className='mt-3'>
                    {
                        recipes.map(recipe => <RecipeDetails key={recipe.id} recipe={recipe}></RecipeDetails>)
                    }
                </CardGroup>
            </div>
        </div>
    );
};

export default Recipes;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaThumbsUp } from "react-icons/fa";
import RecipeDetails from './RecipeDetails';
import { Card, CardGroup } from 'react-bootstrap';

const Recipes = () => {
    const chef = useLoaderData();

    const { id, name, picture, years_of_experience, number_of_recipes, likes, bio, recipes } = chef;

    // console.log(name, likes, recipes)
    // console.log(recipes[0].cooking_method)
    return (
        <div>
            <div className='bg-success p-md-3'>
                <div className='container d-flex flex-column flex-md-row align-items-center justify-content-between gap-5 mb-5 p-3 p-md-5'>
                    <div className='w-50 text-center text-warning'>
                        <img className='rounded-circle img-fluid mb-3' src={picture} alt="" />
                        <h2 className='fw-bold'>{name}</h2>
                    </div>
                    <div className='w-50'>
                        <p className='fs-4'><span className='text-warning fw-semibold'>About {name} :</span> {bio}</p>
                        <p className='fs-5 fw-bold'><span className='text-warning fw-semibold'>Likes :</span> {likes}</p>
                        <p className='fs-5 fw-bold'><span className='text-warning fw-semibold'>Recipes: </span> {number_of_recipes} Recipes</p>
                        <p className='fs-5 fw-bold'><span className='text-warning fw-semibold'>Experiences: </span> {years_of_experience} Years</p>
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
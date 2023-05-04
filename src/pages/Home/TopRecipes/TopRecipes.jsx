import React from 'react';
import TopRecipe from './TopRecipe';

const TopRecipes = ({ chef }) => {

    const { recipes } = chef;
    return (
        <div>
            <div className='container mx-auto bg-white p-3 mt-3 rounded'>
                {
                    recipes.map(recipe => <TopRecipe key={recipe.id} recipe={recipe}></TopRecipe>)
                }
            </div>
        </div>
    );
};

export default TopRecipes;
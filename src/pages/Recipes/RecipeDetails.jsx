import React, { useState } from 'react';
import { Button, Card, CardGroup, ListGroup } from 'react-bootstrap';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";

const RecipeDetails = ({ recipe }) => {
    const [favButton, setFavButton] = useState(false);
    const { name, rating, ingredients, cooking_method } = recipe;
    const fiveIngredients = ingredients.slice(0, 5);


    const handleFavBtn = () =>{
        setFavButton(true);
    }
    // console.log(ingredients)
    return (
        <Card>
            <Card.Body className=''>
                <Card.Title className='fs-2 fw-bold mb-4'> <span className='text-success'>Recipe Name: </span>{name}</Card.Title>
                <ListGroup className="list-group-flush">
                    <h3 className='text-success fw-bold'>Ingredients</h3>
                    {
                        ingredients.map((ingredient, index) => <ListGroup.Item key={ingredient}>{index + 1}. {ingredient}</ListGroup.Item>)
                    }
                </ListGroup>
                <Card.Text className='fw-semibold'>
                    <span className='d-block text-danger fw-bold mt-4 fs-4 mb-3'>Cooking Method :</span>
                    {cooking_method}
                </Card.Text>
            </Card.Body>
            <Card.Footer className='d-flex gap-2 align-items-center justify-content-between'>
                <div className='d-flex gap-2 align-items-center'>
                    <Rating
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <p className='m-0 mt-1'><small>{rating}</small></p>
                </div>
                <Button onClick={handleFavBtn} className={!favButton ? "active" : "disabled"}>Favorite <GrFavorite className='text-danger'></GrFavorite></Button>
            </Card.Footer>
        </Card>
    );
};

export default RecipeDetails;
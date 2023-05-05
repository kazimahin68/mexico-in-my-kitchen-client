import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ChefDetails = ({ chef }) => {

    const { id, name, picture, years_of_experience, number_of_recipes, likes } = chef;
    // console.log(name)
    return (
        <div className='col mb-4'>
            <Card>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title className='fw-bold fs-3 text-success mb-4'>{name}</Card.Title>
                    <Card.Text className='fw-semibold fs-5'>
                        <span className='fw-bold fs-5'><span  className='text-success fw-bold fs-5'>Years of experience: </span> {years_of_experience}</span>
                    </Card.Text>
                    <Card.Text className='d-flex justify-content-between align-items-center'>
                        <span className='fw-bold fs-5'><span className='text-success'>Number of Recipes:</span> {number_of_recipes}</span>
                        <span className='fs-5 fw-bold'><FaThumbsUp className='mb-2 text-primary me-1'></FaThumbsUp> {likes}</span>
                    </Card.Text>
                </Card.Body>
                <Link to={`/recipes/${id}`}><Button className='text-bold w-100 fw-bold p-2 fs-5' variant="success">View Recipes</Button></Link>
            </Card>
        </div>
    );
};

export default ChefDetails;
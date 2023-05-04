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
                    <Card.Title className='fw-bold fs-4 text-success mb-4'>{name}</Card.Title>
                    <Card.Text className='fw-semibold fs-5'>
                        <span className='text-danger'>Years of experience:</span> {years_of_experience}
                    </Card.Text>
                    <Card.Text className='d-flex justify-content-between align-items-center'>
                        <span className='m-0 fw-semibold fs-5'><span className='text-primary'>Number of Recipes:</span> {number_of_recipes}</span>
                        <span className='m-0 fs-5'><FaThumbsUp className='mb-1 text-primary'></FaThumbsUp> {likes}</span>
                    </Card.Text>
                </Card.Body>
                <Link to={`/recipes/${id}`}><Button className='text-semibold w-100 fw-bold p-2' variant="success">View Recipes</Button></Link>
            </Card>
        </div>
    );
};

export default ChefDetails;
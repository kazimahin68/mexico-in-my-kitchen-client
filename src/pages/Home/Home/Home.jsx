import React from 'react';
import HomeBanner from '../Banner/HomeBanner';
import { useLoaderData } from 'react-router-dom';
import ChefDetails from '../ChefDetails/ChefDetails';
import { Spinner } from 'react-bootstrap';
import BestChefs from '../BestChefs/BestChefs';
import TopRecipes from '../TopRecipes/TopRecipes';

const Home = () => {
    const chefs = useLoaderData();


    if (!chefs) {
        return <Spinner animation="border" variant="danger" />
    }

    else {
        return (
            <div>
                <HomeBanner></HomeBanner>
                <h2 className='text-success bg-white p-3 rounded fw-bold text-center container mt-5'>Top Chefs of Mexico</h2>
                <div className='row row-cols-1 row-cols-md-2 container mx-auto mt-3 p-0'>
                    {
                        chefs.map(chef => <ChefDetails key={chef.id} chef={chef} ></ChefDetails>)
                    }
                </div>
                <div className='container mx-auto'>
                    {
                        chefs.map(chef => <BestChefs key={chef.id} chef={chef} ></BestChefs>)
                    }
                </div>
                <div className='container mx-auto'>
                    <h2 className='text-success bg-white p-3 rounded fw-bold text-center container mt-5 mb-3'>About some of our top rated recipes</h2>
                    {
                        chefs.map(chef => <TopRecipes key={chef.id} chef={chef} ></TopRecipes>)
                    }
                </div>
            </div>
        );
    }
};

export default Home;
import React from 'react';
import HomeBanner from '../Banner/HomeBanner';
import { useLoaderData } from 'react-router-dom';
import ChefDetails from '../ChefDetails/ChefDetails';

const Home = () => {
    const chefs = useLoaderData();
    return (
        <div>
            <HomeBanner></HomeBanner>
            <h2 className='text-success bg-white p-3 rounded fw-bold text-center container mt-5'>Top Chefs of Mexico</h2>
            <div className='row row-cols-1 row-cols-md-2 container mx-auto mt-5 mb-5 p-0'>
            {
                chefs.map(chef => <ChefDetails key={chef.id} chef={chef} ></ChefDetails>)
            }
            </div>
        </div>
    );
};

export default Home;
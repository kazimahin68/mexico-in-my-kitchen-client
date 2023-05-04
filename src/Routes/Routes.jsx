import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home/Home';
import Recipes from '../pages/Recipes/Recipes';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/chefs')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/recipes/:id',
                element: <Recipes></Recipes>,
                loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]
    },
    // {
    //     path: '/',
    //     element: <AccessLayout></AccessLayout>,
    //     children: [
    //         {
    //             path: '/login',
    //             element: <Login></Login>
    //         },
    //         {
    //             path: '/register',
    //             element: <Register></Register>
    //         }
    //     ]
    // }
])


export default router
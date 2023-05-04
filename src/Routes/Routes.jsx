import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home/Home';
import Recipes from '../pages/Recipes/Recipes';
import Blogs from '../pages/Blogs/Blogs';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import PrivateRout from '../pages/PrivateRoute/PrivateRout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://mexico-in-kitchen-server-kazimahin68.vercel.app/chefs')
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
                element: <PrivateRout><Recipes></Recipes></PrivateRout>,
                loader: ({params}) => fetch(`https://mexico-in-kitchen-server-kazimahin68.vercel.app/chefs/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    },

    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
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
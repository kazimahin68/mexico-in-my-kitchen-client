import React from 'react';
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const Main = () => {
    return (
        <div className='h-100' style={{ backgroundImage: `url(https://img.freepik.com/free-photo/colorful-mexican-menu_23-2147640353.jpg?w=900&t=st=1683134340~exp=1683134940~hmac=48a3c4a38ad7d1423d2ec2e4083a22e14217d430d170903483a84a8c54ef8286)`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;
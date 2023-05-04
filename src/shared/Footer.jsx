import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-black p-2 mt-5'>
            <div className='container d-flex flex-md-row flex-column justify-content-between p-5 gap-4'>
                <div className='text-white w-25'>
                    <h2 className='fw-bold fs-3 text-white mb-3'>Mexican <span className='text-warning'>Kitchen</span></h2>
                    <p className='mb-5 text-secondary fw-semibold'>Mexico in My Kitchen participates in the Amazon Services LLC Associates Program,  an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. </p>
                </div>
                <div className='flex-fill'>
                    <h2 className='fw-bold fs-3 text-white mb-3'>About</h2>
                    <ul className='list-none mb-3 text-secondary list-group list-group-flush'>
                        <li className='mb-3 list-group-item'>ABOUT US</li>
                        <li className='mb-3 list-group-item'>PRIVACY POLICY</li>
                        <li className='mb-3 list-group-item'>USER SERVICE AGREEMENT</li>
                        <li className='mb-3 list-group-item'>ACCESSIBILITY STATEMENT</li>
                    </ul>
                </div>
                <div className='flex-fill'>
                    <h2 className='fw-bold fs-3 text-white mb-3'>Newsletter</h2>
                    <ul className=' mb-3 text-secondary list-group list-group-flush'>
                        <li className='mb-3 list-group-item'>SIGN UP <Link to='/register'>FOR EMAILS AND UPDATES!</Link></li>
                        
                    </ul>
                </div>
                <div className='flex-fill'>
                    <h2 className='fw-bold fs-3 text-white mb-3'>Follow / Contact</h2>
                    <ul className='list-none mb-3 text-secondary list-group list-group-flush'>
                        <li className='mb-3 list-group-item'>FACEBOOK</li>
                        <li className='mb-3 list-group-item'>INSTAGRAM</li>
                        <li className='mb-3 list-group-item'>PINTEREST</li>
                        <li className='mb-3 list-group-item'>CONTACT</li>
                    </ul>
                </div>
                
            </div>
            <hr className='text-secondary' />
            <div className='container text-center flex flex-col flex-md-row justify-content-between text-secondary align-items-center mx-auto mb-32'>
                <p>@2023 <strong>Mexican Kitchen</strong>. All Rights Reserved</p>
                <p>Powered by <strong>Mexican Kitchen</strong></p>
            </div>
        </div>
    );
};

export default Footer;
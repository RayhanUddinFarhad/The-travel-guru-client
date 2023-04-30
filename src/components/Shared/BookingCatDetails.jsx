import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookingCatDetails = () => {

    const detail = useLoaderData()



    return (
        <div>

            <div className='text-white'>


                <h1 className='text-5xl'>{detail.name}</h1>

                <p className='px-16 py-2'>{detail.details}</p>

            </div>

        </div>
    );
};

export default BookingCatDetails;
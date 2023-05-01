import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BookingCatDetails = () => {

    const detail = useLoaderData()



    return (
        <div className='flex items-center'>

            <div className='text-white'>


                <h1 className='text-5xl'>{detail.name}</h1>

                <p className='px-16 py-2'>{detail.details}</p>

            </div>


            <div>


            <div className='card bg-white w-96 h-96'>

<div className="form-control">
    <label className="label">
        <span className="label-text">Origin</span>
    </label>
    <input type="text" placeholder="From" className="input input-bordered" />
</div>
<div className="form-control">
    <label className="label">
        <span className="label-text">Destination</span>
    </label>
    <input type="text" placeholder="To" className="input input-bordered" />
    
</div>

<div>



</div>
<div className="form-control mt-6">
    <Link to= {`/hotels/${detail.id}`}><button className="btn btn-warning">Start Booking</button></Link>
</div>
</div>
            </div>

        </div>
    );
};

export default BookingCatDetails;
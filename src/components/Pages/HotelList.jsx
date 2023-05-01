import React from 'react';
import Navbar from '../Header/Navbar';
import { useLoaderData } from 'react-router-dom';
import Hotel from '../Shared/Hotel';
import Map from '../Shared/Map';

const HotelList = () => {

    const hotel = useLoaderData ()
    console.log  (hotel)



    return (
        <div>
            <Navbar></Navbar>
            
           <div className='flex justify-around my-5'>

            <div>
                {

                    hotel && hotel.map (hotel => <Hotel data = {hotel.hotels}></Hotel>)
                }


            </div>

            <div>
                <Map></Map>


            </div>




           </div>
            
        </div>
    );
};

export default HotelList;
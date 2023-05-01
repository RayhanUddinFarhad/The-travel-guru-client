import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';

const Hotel = ({data}) => {

    const {getDate} = useContext(AuthContext)

    console.log (getDate)



    return (
        <div>
            {

                data.map (hotel => {

                    return (<div className="card card-side bg-base-100 shadow-xl my-5">
                    <figure><img className='w-64 h-48' src={hotel.image} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{hotel.name}</h2>
                        <p> <span>{hotel.guests} guests</span> <span>{hotel.bedrooms} bedrooms <span>{hotel.beds} beds </span>{hotel.baths} baths</span> </p>
                        <p> {hotel.wifi && 'Wif Air conditioning Kitchen'}</p>
                        <p>{hotel.cancellation  && 'Cancellation fexibility availiable'}</p>

                        



                        <div className="card-actions justify-between">


                            <div className='flex font-bold'>

                                <FaStar className='text-yellow-500 mr-2'></FaStar>

                                {hotel.rating}


                            </div>

                            <div className='font-bold'>

                                {hotel.price}

                            </div>


                        </div>
                    </div>
                </div>)
                })
            }
        </div>
    );
};

export default Hotel;
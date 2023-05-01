import React, { createContext, useContext, useState } from 'react';
import { Form, Link, useLoaderData } from 'react-router-dom';
import "rsuite/dist/rsuite.min.css";
import { DatePicker } from "rsuite";
import { AuthContext } from '../provider/AuthProvider';




const BookingCatDetails = () => {

    const detail = useLoaderData()
    const {getDate} = useContext (AuthContext)

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    console.log (startDate, endDate)

    

    




    return (
        <div className='flex items-center'>

            <div className='text-white'>


                <h1 className='text-5xl'>{detail.name}</h1>

                <p className='px-16 py-2'>{detail.details}</p>

            </div>


            <div>


                <Form className='card bg-white w-96 h-96'>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Origin</span>
                        </label>
                        <input name='From' type="text" placeholder="From" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Destination</span>
                        </label>
                        <input name='To' type="text" placeholder="To" className="input input-bordered" />

                    </div>

                    <div className='flex'>

                        <div>

                            <label className="label">
                                <span className="label-text">From</span>
                            </label>

                            <DatePicker
                                showMeridian
                                showWeekNumbers
                                size="lg"
                                name='startDate'
                                
                                selected={startDate}
                                onChange={(date) => getDate(date)}

                                style={{ width: 150 }}
                            />



                        </div>

                        <div>

                            <label className="label">
                                <span className="label-text">To</span>
                            </label>

                            <DatePicker
                                showMeridian
                                showWeekNumbers
                                size="lg"
                                name='endDate'
                                selected={endDate}
                                onChange={(date) => getDate(date)}
                                style={{ width: 150 }}
                            />
                        </div>

                        

                    </div>

                    <div>



                    </div>
                    <div className="form-control mt-6">
                        <Link to={`/hotels/${detail.id}`}><button className="btn btn-warning">Start Booking</button></Link>
                    </div>
                </Form>
            </div>

        </div>
    );
};

export default BookingCatDetails;
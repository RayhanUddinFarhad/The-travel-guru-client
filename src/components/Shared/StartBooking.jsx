import React from 'react';

const StartBooking = () => {
    return (
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
                    <Link to='/hotels'><button className="btn btn-warning">Start Booking</button></Link>
                </div>
            </div>

        </div>
    );
};

export default StartBooking;
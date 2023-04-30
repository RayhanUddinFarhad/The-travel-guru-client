import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const Category = () => {


    const details = useLoaderData()




    return (
        <div>

            <h1 className="text-5xl font-bold">{details.name}</h1>
            <p className="py-6">{details.details}</p>
           <Link to = {`/booking/${details.id}`}>
           
           
           <button className="btn btn-warning">Booking

<FaArrowRight></FaArrowRight>




</button></Link>



        </div>
    );
};

export default Category;
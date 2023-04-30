import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Category = () => {


    const details = useLoaderData()




    return (
        <div>

            <h1 className="text-5xl font-bold">{details.name}</h1>
            <p className="py-6">{details.details}</p>
            <button className="btn btn-primary">Get Started</button>



        </div>
    );
};

export default Category;
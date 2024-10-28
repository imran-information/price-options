import React from 'react';

const Option = ({ option }) => {
    return (
        <div className='border p-10 my-5 rounded-xl'>
            <h1>Name: {option.name}</h1>
            <h1>Price: {option.price}</h1>
        </div>
    );
};

export default Option;
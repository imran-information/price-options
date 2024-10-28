import React, { useEffect, useState } from 'react';
import Option from '../Option/Option';

const PriceOptions = () => {
    const [options, setOptions] = useState([])
    useEffect(() => {
        const dataLoad = async () => {
            const res = await fetch('option.json')
            const data = await res.json()
            setOptions(data)
        }
        dataLoad()
    }, [])
    return (
        <div className='m-10'>
            <h1 className='text-center '>Price Options: {options.length}</h1>
            {options.map(option => <Option key={option.id} option={option}></Option>)}
        </div>
    );
};

export default PriceOptions;
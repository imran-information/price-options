import React from 'react';

const Link = ({ route }) => {
    return (
        <div>
            <li className='hover:bg-slate-200 p-5'>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;
import React, { useState, useEffect } from 'react';
import Heading from '../common/Heading';

const Star = () => {
    const [star, setStar] = useState([]);

    useEffect(() => {
        const Xaxis = 4;
        const Yaxis = 4;
        const result = [];
        for (let i = 0; i < Xaxis; i++) {
            let star = "";
            for (let f = 0; f < Yaxis; f++) {
                star += "*";
            }
            result.push(star.trim());
        }
        setStar(result);
    }, []);

    return (
        <div className='flex flex-col items-center justify-center py-5 bg-sky-blue'>
            <div className='container'>
                <Heading classStyle={'text-center'} text={'Star'} />
                <div className="pt-5 flex flex-col gap-1 text-center mx-auto">
                    {star.map((star, index) => (
                        <p key={index} className="text-3xl text-gray">{star}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Star
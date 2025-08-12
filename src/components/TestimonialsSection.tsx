import React from 'react';

import {testimonialsData} from "../img/images"
import { TestimonialsCard } from './TestimonialsCard';
export function TestimonialsSection(){
    return (
        <div className='testimonials-section'>
            {testimonialsData.map((person,index) =>(
                <TestimonialsCard 
                     key={index}
                    imgSrc={person.imgSrc}
                    name={person.name}
                    email={person.email}
                    text={person.text}
                    />
            ))}
        </div>
    );
}
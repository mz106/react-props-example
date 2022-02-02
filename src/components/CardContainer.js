import React from 'react';
import Card from './Card';
import { useState } from 'react';
import './CardContainer.css';

const CardContainer = ( { data, person, setPerson } ) => {
    
    
    return (
       <div className="container">
           {data.map(item => {
            return <Card key={item.id} id={item.id} url={item.url} name={item.name} person={person} setPerson={setPerson} />
           })}
       </div>
    );
}

export default CardContainer;

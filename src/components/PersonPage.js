import React from 'react';
import { Link } from 'react-router-dom';
import './PersonPage.css';

const PersonPage = ( { person, setPerson } ) => {
    console.log(person)
    return (
        <div>
            <p>Artist ID: {person.id}</p>
            <p>Artist Name: {person.name}</p>
            <div className='img-div'>
                <img src={person.url} className="person-img" alt="" />
            </div>
            
            <Link to="/" >
                <button>Home</button>
            </Link>
        </div>
    );
}

export default PersonPage;

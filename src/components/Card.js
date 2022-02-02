import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Card = ({ key, name, person, setPerson, id, url }) => {
    // useEffect(() => {
    //     setPerson(name);
    // }, [name, setPerson]);
    return (
        <div className="card">
            <p>{name}</p>
            <Link to="personpage">
                <button onClick={() => setPerson({id: id, name: name, url: url})}>person</button>
            </Link>
        </div>
    );
}

export default Card;

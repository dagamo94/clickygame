import React from 'react';

const Card = props => {
    return (
        <img
            src={props.image}
            alt="archi"
            id={props.id}
            onClick={() => props.clicked(props.id)}
        />
    )
}

export default Card;
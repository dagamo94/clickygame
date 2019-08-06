import React from 'react';

const Title = (props) => {
    return (
        <div className="jumbotron jumbotron-fluid text-center">
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}

export default Title;
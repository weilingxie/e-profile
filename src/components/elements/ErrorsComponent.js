import React from 'react';

const ErrorsComponent = (props) => (
    (props.errors !== null && props.errors.length > 0) ?
    (<div className="alert alert-danger" role="alert">
        <ul >            
            {props.errors.map((error, index)=>(<li key={index}>{error}</li>))}
        </ul>
    </div>) :
    (null)
)

export default ErrorsComponent;
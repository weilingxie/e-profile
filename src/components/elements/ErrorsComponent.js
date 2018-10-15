import React from 'react';

class ErrorsComponent extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {

        if(this.props.errors !== null && this.props.errors.length > 0)
        {
            let errors = [];
            this.props.errors.forEach(function (error, index) {   
                errors.push(<li  key={index}>{error}</li>);
            });
            return (
                <div className="alert alert-danger" role="alert">
                    <ul >
                        {errors}
                    </ul>
                </div>
            );
        }
        else
        {
            return (null);
        }

    }
}

export default ErrorsComponent;
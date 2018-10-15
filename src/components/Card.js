import React from 'react';
import PropTypes from 'prop-types';
const Card = ({article}) => {
    
    return (
        <div className="flex-container">
            <div className="thumbnail">
                    <img className="img-responsive img-rounded" src={article.urlToImage} />
                    <div className="caption">
                        <p>{ article.title }</p>
                    </div>
            </div>
        </div>
    );
}

Card.ProTypes = {
    article: PropTypes.object.isRequired
}

export default Card;
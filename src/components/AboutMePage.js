import React from 'react';
import { Link } from 'react-router-dom';
import selectNews from '../selectors/news';
import { connect } from 'react-redux';

const AboutMePage = (props) => (
    <div className="container">
        <div className="jumbotron">
        <h2 className="row">{ props.title }</h2>
        <img  src={ props.urlToImage} />
        <hr />
        <p className="row">{ props.description }</p>
        <Link className="row" to={ props.url ? "\/\/" + props.url.slice(7) : "http://localhost:3000"} target="_blank">Visit official page</Link>
        <p className="row">{ props.publishedAt }</p>
        </div>
    </div>
);

export default AboutMePage;
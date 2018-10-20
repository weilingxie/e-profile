import React from 'react';
import { NavLink } from 'react-router-dom';
import { getNews } from '../actions/NewsActions';
import { connect } from 'react-redux';
import { addNewsList } from '../actions/redux/news';
import YinYang from '../YinYang.png';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="home-page">
                <img id="yinyang-img" src={YinYang} height="700px"  alt="YinYang"></img>
                <h2>Data</h2>
                <h2>Web</h2>
            </div>
        );
    }
}

export default HomePage;

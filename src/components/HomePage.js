import React from 'react';
import { Link } from 'react-router-dom';
import YinYang from '../YinYang.png';
class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="homepage-container">
                <div className="homepage-data-section">
                    <h2>Data</h2>
                </div>
                <div className="homepage-img-section">
                    <img id="yinyang-img" src={YinYang} height="700px"  alt="YinYang"></img>
                </div>                
                <div className="homepage-web-section">
                    <h2>Web</h2>
                </div>
            </div>
        );
    }
}

export default HomePage;

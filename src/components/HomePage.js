import React from 'react';
import { Link } from 'react-router-dom';
import YinYang from '../images/YinYang.svg';
class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="homepage">
                <div className="homepage-data">
                    <Link to="/data" className="homepage-data__title">Data</Link>
                </div>
                <div className="homepage-logo">
                    <img className="homepage-logo__svg" src={YinYang}  alt="YinYang" />   
                </div>                             
                <div className="homepage-web">
                    <Link to="/data" className="homepage-web__title">Web</Link>
                </div>
            </div>
        );
    }
}

export default HomePage;

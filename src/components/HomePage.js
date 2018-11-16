import React from 'react';
import { Link } from 'react-router-dom';
import YinYang from '../YinYang.svg';
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
                    <h2 className="homepage-web__title" >Web</h2>
                </div>
            </div>
        );
    }
}

export default HomePage;

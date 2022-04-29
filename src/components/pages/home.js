import React from 'react';

import Content from '../sections/home/content';
import Base from '../layouts/base';
import Footer from "../layouts/footer";
import MapModal from "../sections/home/mapModal";
import Login from "../layouts/authentication/login";
import Register from "../layouts/authentication/register";

import {appendScript} from '../../assets/js/rscripts/appendScript'
import {removeScript} from '../../assets/js/rscripts/removeScript'

class Home extends React.Component {
    componentDidMount () {
        appendScript("js/jquery.min.js");
        appendScript("js/plugins.js");
        appendScript("js/scripts.js");

        appendScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDagkUmxY8WQ5Th7zIf12QkqctyvDf6P8k&libraries=places&callback=initAutocomplete");

        appendScript("js/map-single.js");
    }
    componentWillUnmount () {
        removeScript("js/jquery.min.js");
        removeScript("js/plugins.js");
        removeScript("js/scripts.js");

        removeScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDagkUmxY8WQ5Th7zIf12QkqctyvDf6P8k&libraries=places&callback=initAutocomplete");

        removeScript("js/map-single.js");
    }
    render() {

        return (
            <>
                <Base>
                    <Content/>
                </Base>
                <Footer/>
                <MapModal/>

                {/*register form */}
                <div className="main-register-wrap modal">
                    <div className="reg-overlay"></div>
                    <div className="main-register-holder tabs-act">
                        <div className="main-register fl-wrap  modal_main">
                            <div className="main-register_title">Welcome to <span><strong>Town</strong>Hub<strong>.</strong></span></div>
                            <div className="close-reg"><i className="fal fa-times"></i></div>
                            <ul className="tabs-menu fl-wrap no-list-style">
                                <li className="current"><a href="#tab-1"><i className="fal fa-sign-in-alt"></i> Login</a></li>
                                <li><a href="#tab-2"><i className="fal fa-user-plus"></i> Register</a></li>
                            </ul>
                            {/*tabs */}
                            <div className="tabs-container">
                                <div className="tab">
                                    {/*tab */}
                                    <Login />
                                    {/*tab end */}
                                    {/*tab */}
                                    <Register />
                                    {/*tab end */}
                                </div>
                                {/*tabs end */}
                                <div className="log-separator fl-wrap"><span>or</span></div>
                                <div className="soc-log fl-wrap">
                                    <p>For faster login or register use your social account.</p>
                                    <a href="#" className="facebook-log"> Facebook</a>
                                </div>
                                <div className="wave-bg">
                                    <div className='wave -one'></div>
                                    <div className='wave -two'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*register form end */}

            </>
        );
    }
}

export default Home;
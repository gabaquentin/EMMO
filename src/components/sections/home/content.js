import React, { Component, Fragment } from 'react';
import { AuthProvider } from "../../../contexts/authContext"

import Hero from "./hero";
import Sec1 from "./sec1";
import Sec2 from "./sec2";
import Sec3 from "./sec3";
import Sec4 from "./sec4";
import Sec5 from "./sec5";
import Sec6 from "./sec6";
import Sec7 from "./sec7";
import Sec8 from "./sec8";
import Sec9 from "./sec9";

class Content extends Component {
    render() {
        return (
            <AuthProvider>
                <Fragment>
                    <Hero/>
                    <Sec1/>
                    <div className="sec-circle fl-wrap"/>
                    <Sec2/>
                    <Sec3/>
                    <Sec4/>
                    <Sec5/>
                    <Sec6/>
                    <Sec7/>
                    <Sec8/>
                    <Sec9/>
                </Fragment >
            </AuthProvider>
        );
    }
}

export default Content;
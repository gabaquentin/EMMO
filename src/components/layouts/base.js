import React, { Component, Fragment } from 'react';

class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "React",
                };
        }
    render() {
        return (
            <Fragment>

                <div id="wrapper">
                    <div className="content">
                        {React.cloneElement(this.props.children, this.state )}
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default Base;
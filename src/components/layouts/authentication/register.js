import { Component } from 'react';

class Register extends Component {

    render() {
        function inputClick(){
            console.log("click")
        }
        return (
            <div className="tab">
                <div id="tab-2" className="tab-content">
                    <div className="custom-form">
                        <form method="post" name="registerform" className="main-register-form" id="main-register-form2">
                            <label>Full Name <span>*</span> </label>
                            <input name="name" type="text" onClick={inputClick} defaultValue="" />
                            <label>Email Address <span>*</span></label>
                            <input name="email" type="text" onClick={inputClick} defaultValue="" />
                            <label>Password <span>*</span></label>
                            <input name="password" type="password" onClick={inputClick} defaultValue="" />
                            <div className="filter-tags ft-list">
                                <input id="check-a2" type="checkbox" name="check" />
                                <label htmlFor="check-a2">I agree to the <a href="#">Privacy Policy</a></label>
                            </div>
                            <div className="clearfix"></div>
                            <div className="filter-tags ft-list">
                                <input id="check-a" type="checkbox" name="check" />
                                    <label htmlFor="check-a">I agree to the <a href="#">Terms and Conditions</a></label>
                            </div>
                            <div className="clearfix"></div>
                            <button type="submit" className="btn float-btn color2-bg"> Register <i className="fas fa-caret-right"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
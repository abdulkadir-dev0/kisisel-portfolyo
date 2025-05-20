import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

// CLASS
class Footer extends Component {

    // display
    static displayName = "Footer"

    // constructor
    constructor(props) {
        super(props);
        // STATE
        this.state = {

        }
        //BIND
    }

    // CDM

    // Function
    firstNewDate = () => {
        return "2025"
    }

    secondNewDate() {
        return ` ${new Date().getFullYear()} `
    }

    // RENDER
    render() {
        return (
            <React.Fragment>
                {/* Footer */}
                <footer className="bg-dark text-white text-md-start" id="contact_id" >
                    {/* Grid container */}
                    <div className="container p-4" id='footer'>

                        {/*Grid row*/}
                        <div className="row">
                            {/*Grid column*/}
                            <div className="col-lg-6 col-md-12 mb-4 mt-4 mb-md-0">
                                <h5 className="text-uppercase mb-5">{this.props.t('contact_me')}</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        {/* MAİL */}
                                        <a
                                            data-mdb-ripple-init=""
                                            className="btn text-white btn-floating m-1"
                                            style={{ backgroundColor: "#0066CC" }}
                                            href="ucarabdulkadir25@gmail.com"
                                            target="_blank" rel="noopener noreferrer"
                                            role="button"
                                        >
                                            <i class="fa-solid fa-envelope"></i>
                                        </a>
                                        <a href="ucarabdulkadir25@gmail.com">
                                            ucarabdulkadir25@gmail.com
                                        </a>
                                    </li>
                                    <li>
                                        {/* Telefon */}
                                        <a
                                            data-mdb-ripple-init=""
                                            className="btn text-white btn-floating m-1"
                                            style={{ backgroundColor: "#5C8374" }}

                                            target="_blank" rel="noopener noreferrer"
                                            role="button"
                                        >
                                            <i class="fa-solid fa-mobile-screen"></i>
                                        </a>
                                        <a >
                                            +90 (555) 555 55 55
                                        </a>
                                    </li>
                                    <li>
                                        {/* Linkedin */}
                                        <a
                                            data-mdb-ripple-init=""
                                            className="btn text-white btn-floating m-1 mt-1"
                                            style={{ backgroundColor: "#0082ca" }}
                                            href="https://www.linkedin.com/in/abdulkadir-u%C3%A7ar-42a6a7254/"
                                            target="_blank" rel="noopener noreferrer"
                                            role="button"
                                        >
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/abdulkadir-u%C3%A7ar-42a6a7254/" target="_blank" rel="noopener noreferrer">
                                            https://www.linkedin.com/in/abdulkadir-u%C3%A7ar-42a6a7254/
                                        </a>
                                    </li>
                                    <li>
                                        {/* Github */}
                                        <a
                                            data-mdb-ripple-init=""
                                            className="btn text-white btn-floating m-1"
                                            style={{ backgroundColor: "#333333" }}
                                            href="https://github.com/abdulkadir-dev0"
                                            target="_blank" rel="noopener noreferrer"
                                            role="button"
                                        >
                                            <i className="fab fa-github" />
                                        </a>
                                        <a href="https://github.com/abdulkadir-dev0" target="_blank" rel="noopener noreferrer">
                                            https://github.com/abdulkadir-dev0
                                        </a>
                                    </li>


                                </ul>
                            </div>
                            {/*Grid column*/}
                            {/*Grid column*/}
                            <div className="col-lg-6 col-md-12 mb-4 mt-4 mb-md-0">
                                <h5 className="text-uppercase">{this.props.t('contact')}</h5>
                                {/* FORM */}
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xxl-6">
                                    <form action="#!" method="post" autoComplete='on'>
                                        {/* Username */}
                                        <div className="form-group mt-4 mb-4">
                                            <label htmlFor="uname">{this.props.t('username')}</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="uname"
                                                placeholder={this.props.t('username')}
                                                title='kullanıcı adınız'
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="form-group mb-4">
                                            <label htmlFor="uemail">{this.props.t('email_address')}</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="uemail"
                                                name="uemail"
                                                placeholder={this.props.t('email_address')}
                                                title="Email adresiniz"
                                            />
                                        </div>

                                        {/* Subject */}
                                        <div className="form-group mb-4">
                                            <label htmlFor="usubject">{this.props.t('subject')}</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="usubject"
                                                name="usubject"
                                                placeholder={this.props.t('subject')}
                                                title="Email Konusu"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="form-group mb-4">
                                            <label htmlFor="exampleFormControlTextarea1">{this.props.t('content')}</label>
                                            <textarea
                                                className="form-control"
                                                id="exampleFormControlTextarea1"
                                                rows={3}
                                                defaultValue={""}
                                                placeholder={this.props.t('content')}
                                            />
                                        </div>
                                        <div className="form-group mt-4 mb-4">
                                            <input type="reset" id="reset" name="Temizle" value={this.props.t('reset')} className="btn btn-danger me-3" />
                                            <button type="submit" id="submit" name="submit" className="btn btn-primary">{this.props.t('send')} </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/*Grid column*/}
                        </div>
                        {/*Grid row*/}
                    </div>
                    {/* Grid container */}
                </footer>
                {/* Footer */}
            </React.Fragment>
        ); //end retur
    } //end render
} //end class

// EXPORT HEADER (withTransaction)
export default withTranslation()(Footer);

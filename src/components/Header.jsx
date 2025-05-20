import React, { Component } from 'react';
// I18N
// Resuability
import OtherLanguageReusability from '../internationalization/OtherLanguageReusability';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// Dark Mode
import './DarkMode/dark.css';
import DarkMode from './DarkMode/DarkMode';

// CLASS
class Header extends Component {

    // display
    static displayName = "Header"

    // constructor
    constructor(props) {
        super(props);

        // STATE
        this.state = {}

        //BIND
    }

    // CDM

    // Function

    // RENDER
    render() {

        /* JS Codes */
        const { t } = this.props;

        /* Return */
        return (
            <React.Fragment>
                {/* start Modal login */}
                <div
                    className="modal fade"
                    id="modal_login"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-md  modal-dialog-centered text-end">
                        <div className="modal-content">
                            <div className="modal-header ">
                                <h5 className="modal-title " id="exampleModalLabel">
                                    {this.props.t('login')}
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">
                                <form>
                                    <input
                                        className="form-control me-2 mb-2"
                                        type="email"
                                        placeholder={this.props.t('email')}
                                    />
                                    <input
                                        className="form-control me-2 mb-2"
                                        type="password"
                                        placeholder={this.props.t('password')}
                                    />
                                    <hr className='mt-5' />
                                    <button className="btn btn-outline-danger mt-2 me-2" type="reset">
                                        {this.props.t('reset')}
                                    </button>
                                    <button className="btn btn-success mt-2" type="submit">
                                        {this.props.t('login')}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end Modal login */}
                {/* start Modal Register */}
                <div
                    className="modal fade"
                    id="modal_register"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-md  modal-dialog-centered text-end">
                        <div className="modal-content">
                            <div className="modal-header ">
                                <h5 className="modal-title " id="exampleModalLabel">
                                    {this.props.t('register')}
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">
                                <form>
                                    <input
                                        className="form-control me-2 mb-2"
                                        type="uname"
                                        id="uname"
                                        name="uname"
                                        title="username"
                                        placeholder={this.props.t('username')}
                                    />

                                    <input
                                        className="form-control me-2 mb-2"
                                        type="usurname"
                                        id="uname"
                                        name="uname"
                                        title="username"
                                        placeholder={this.props.t('surname')}
                                    />

                                    <input
                                        className="form-control me-2 mb-2"
                                        type="email"
                                        id="uemail"
                                        name="uemail"
                                        title="email"
                                        placeholder={this.props.t('email')}
                                    />
                                    <input
                                        className="form-control me-2 mb-2"
                                        type="password"
                                        id="upassword"
                                        name="upassword"
                                        title="password"
                                        placeholder={this.props.t('password')}
                                    />
                                    <hr className='mt-5' />
                                    <button className="btn btn-outline-danger mt-2 me-2" type="reset">
                                        {this.props.t('reset')}
                                    </button>
                                    <button className="btn btn-success mt-2" type="submit">
                                        {this.props.t('register')}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end Modal Register */}

                {/* start Navbar */}
                <nav
                    id="navbar_second_id"
                    className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <div className="container">

                        <button
                            className="navbar-toggler d-lg-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#" >
                                        <i className="fa-solid fa-robot"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#" aria-current="page">
                                        {this.props.t('home_page')} <span className="visually-hidden">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#services_id">
                                        {this.props.t('services')}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about_id">
                                        {this.props.t('about')}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#blog_id">
                                        {this.props.t('blog')}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact_id">
                                        {this.props.t('contact_header')}
                                    </a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <Link to="/register/list" className="dropdown-item" href="#">
                                            {t('register_list')}
                                        </Link>
                                    </a>
                                </li> */}
                            </ul>

                            {/* Dark Mode */}
                            <ul className="navbar-nav ms-auto me-3 mt-2 mt-lg-0">
                                <li className="nav-item mt-2">
                                    {/* dark mode */}
                                    <OtherLanguageReusability />
                                </li>
                                <li className="nav-item">
                                    {/* dark mode */}
                                    <DarkMode />
                                </li>
                            </ul>


                            <ul>
                                {/* <li>
                                    <a href="#"
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modal_login"
                                        aria-controls="modalNavbar" >
                                        <i className="fa-solid fa-key"></i>
                                    </a>

                                    <a href="#"
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modal_register"
                                        aria-controls="modalNavbar" >
                                        <i className="fa-solid fa-lock mx-3"></i>
                                    </a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* end Navbar */}
            </React.Fragment>
        ); //end return
    } //end render
} //end class

// EXPORT HEADER
export default withTranslation()(Header)


// Props Default Variables
Header.defaultProps = {
    url: "http://localhost:3000"
}


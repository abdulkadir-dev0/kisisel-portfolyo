import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

/* Main Css */
import './main.css'

/* Image */
import Design from '../image/img/design.jpg';
import Design2 from '../image/img/design2.jpg';
import Design3 from '../image/img/design3.jpg';
import BestDesign from '../image/img/bestdesign.jpg';

// CLASS
class Main extends Component {

    // display
    static displayName = "Main"

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

    // RENDER
    render() {
        let data = (this.props.t('about'))

        return (
            <React.Fragment >
                {/* start codes Header  */}
                <header id="header">
                    <div className="jumbotron text-white">
                        <div className="container">
                            <div className="home-content">
                                <h3>{this.props.t('hi')}, {this.props.t('i')}</h3>
                                <h1>Abdulkadir  UÇAR</h1>
                                <p>
                                    {this.props.t('computer_eng')}
                                </p>
                                <div className="social-media" id='header_icons'>
                                    {/* linkedin */}
                                    <a href="https://www.linkedin.com/in/abdulkadir-u%C3%A7ar-42a6a7254/" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                    {/* github */}
                                    <a href="https://github.com/abdulkadir-dev0" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-github "></i>
                                    </a>
                                    {/* mail */}
                                    <a href="ucarabdulkadir25@gmail.com" >
                                        <i class="fa-solid fa-envelope"></i>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="home" id="home">

                </section>
                {/* ends codes Header  */}

                {/* start codes Main  */}
                <main>
                    {/* start services_id */}
                    <section id="services_id">
                        <div className="icon_service">
                            <h2 className='text-center my-5'> {this.props.t('services')}</h2>
                            <div className="container">
                                <div className="row" id='services_card'>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <i class="fa-brands fa-react"></i>
                                        <h4>{this.props.t('web')}</h4>
                                        <p> {this.props.t('web_paragraph')}</p>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <i className="fa-brands fa-python" style={{ color: "skyblue" }}></i>
                                        <h4>{this.props.t('python')}</h4>
                                        <p>{this.props.t('python_paragraph')}</p>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <i className="fa-brands fa-java" style={{ color: "red" }}></i>
                                        <h4>{this.props.t('software_development')}</h4>
                                        <p>{this.props.t('software_development_paragraph')}</p>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <i className="fa-solid fa-database" style={{ color: "darkgoldenrod" }}></i>
                                        <h4>{this.props.t('ai')}</h4>
                                        <p>{this.props.t('ai_paragraph')}</p>
                                    </div>
                                </div> {/* end row */}
                            </div>{/* end container */}
                        </div>{/* end icon services */}
                    </section>
                    {/* end services */}

                    {/* start about_id */}
                    <section id="about_id">
                        <div className="about_service">
                            <h2 className='text-center text-white'>{this.props.t('about_me')}</h2>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12 pt-5">
                                        <p className='text-white'>{this.props.t('about_paragraph')}</p>
                                    </div>
                                </div> {/* end row */}
                            </div>{/* end container */}
                        </div>{/* end about services */}
                    </section>  {/* end about services */}

                    {/* start education */}
                    <section id="education_id">
                        <div className="education">
                            <h2 className='text-center my-5'> {this.props.t('education')}</h2>
                            <div className="container">
                                <div className="row" id='education_card'>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 ">
                                        <h4>{this.props.t('school_1')}</h4>
                                        <h6>
                                            <b>
                                                <i>
                                                    2017-2021
                                                    <hr />
                                                </i>
                                            </b>
                                        </h6>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                        <h4>{this.props.t('school_2')}</h4>
                                        <h6>
                                            <b>
                                                <i>
                                                    2022-
                                                    <hr />
                                                </i>
                                            </b>
                                        </h6>
                                    </div>
                                </div> {/* end row */}
                            </div>{/* end container */}
                        </div>{/* end education */}
                    </section>
                    {/* end education */}

                    {/* start skills */}
                    {/*Grid row*/}
                    <div className="container mt-4" id='skills_div'>
                        <h2 className='text-center my-5'> {this.props.t('skills')}</h2>
                        <div className="row">
                            {/*Grid column*/}
                            <div className="col-lg-6 col-md-12 mb-4 mt-4 mb-md-0">
                                <h4 className='mb-4 mx-4'>{this.props.t('software_skills')}</h4>
                                <ul className="list-unstyled mb-1 mx-4">
                                    <li><i className="fa-solid fa-circle-right fa-fade mb-3 mx-3" style={{ color: "#4B3FE4" }}></i> Html</li>
                                    <li><i className="fa-solid fa-circle-right fa-fade mb-3 mx-3" style={{ color: "#4B3FE4" }}></i> CSS</li>
                                    <li><i className="fa-solid fa-circle-right fa-fade mb-3 mx-3" style={{ color: "#4B3FE4" }}></i> JavaScript</li>
                                    <li><i className="fa-solid fa-circle-right fa-fade mb-3 mx-3" style={{ color: "#4B3FE4" }}></i> ReactJS</li>
                                    <li><i className="fa-solid fa-circle-right fa-fade mb-3 mx-3" style={{ color: "#4B3FE4" }}></i> Flutter</li>
                                    <li><i className="fa-solid fa-circle-right fa-fade mb-3 mx-3" style={{ color: "#4B3FE4" }}></i> Kotlin</li>
                                    <li><i className="fa-solid fa-circle-right fa-fade mb-3 mx-3" style={{ color: "#4B3FE4" }}></i> MSSQL</li>
                                    <li><i className="fa-solid fa-circle-right fa-fade mb-3 mx-3" style={{ color: "#4B3FE4" }}></i> Python</li>
                                    <li><i className="fa-solid fa-circle-right fa-fade mb-3 mx-3" style={{ color: "#4B3FE4" }}></i> C#</li>


                                </ul>
                            </div>
                            {/*Grid column*/}
                            {/*Grid column*/}
                            <div className="col-lg-6 col-md-12 mb-4 mt-4 mb-md-0">
                                <h4 className='mb-4 mx-4'>{this.props.t('personal_skills')}</h4>
                                {/* FORM */}
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xxl-6 mx-5">
                                    <ul className="list-unstyled mb-1">
                                        <li><i className="fa-solid fa-circle-right fa-fade mb-3 mx-3" style={{ color: "#4B3FE4" }}></i> {this.props.t('team_management')}</li>
                                        <li><i className="fa-solid fa-circle-right fa-fade mb-3 mx-3" style={{ color: "#4B3FE4" }}></i> {this.props.t('analytical_thinking')}</li>
                                        <li><i className="fa-solid fa-circle-right fa-fade mb-3 mx-3" style={{ color: "#4B3FE4" }}></i> {this.props.t('problem_solving')}</li>
                                        <li><i className="fa-solid fa-circle-right fa-fade mb-3 mx-3" style={{ color: "#4B3FE4" }}></i> {this.props.t('English')}</li>
                                    </ul>
                                </div>
                            </div>
                            {/*Grid column*/}
                        </div>
                    </div>{/* end skills */}

                    {/* start blog */}
                    <section id="blog_id">
                        <div className="blog_service">
                            <h2 className='text-center text-white'>{this.props.t('projects')}</h2>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card mb-4">
                                            <img class="card-img-top" src={Design} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">ToDoList</h4>
                                                <p class="card-text line-clamp5">
                                                    <br/></p><button className="btn btn-primary text-center"><a className="detay" target="_blank" href="https://github.com/abdulkadir-dev0/todolist">Detaylar</a></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card">
                                            <img class="card-img-top" src={BestDesign} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Rota Optimizasyon</h4>
                                                <p class="card-text line-clamp5">
                                                    <br/></p><button className="btn btn-primary text-center"><a className="detay" target="_blank" href="https://github.com/abdulkadir-dev0/Rota-Optimizasyonu">Detaylar</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card">
                                            <img class="card-img-top" src={Design2} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Linkedin Botu</h4>
                                                <p class="card-text line-clamp5">
                                                    <br/></p><button className="btn btn-primary text-center"><a className="detay" target="_blank" href="">Detaylar</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <div class="card">
                                            <img class="card-img-top" src={Design3} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Wallpaper Changer</h4>
                                                <p class="card-text line-clamp5">
                                                    <br/></p><button className="btn btn-primary text-center"><a className="detay" target="_blank" href="">Detaylar</a></button>
                                            </div>
                                        </div>
                                    </div>






                                </div> {/* end row */}
                            </div>{/* end container */}
                        </div>{/* end icon services */}
                    </section>
                    {/* end blog */}

                    {/* start backToTop */}
                    <a href="#header" id="backToTop" className="btn btn-outline-primary">
                        <i class="fa-solid fa-arrow-up"></i>
                    </a>

                </main>
                {/* end codes Main  */}

            </React.Fragment>
        ); //end retur
    } //end render
} //end class

// EXPORT HEADER
export default withTranslation()(Main);

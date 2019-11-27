import React from 'react'
// reactstrap components
import { Card, Container, Row, Col, Button } from "reactstrap";
import perfil from '../../assets/img/team-4-800x800.jpg'

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }

    render(){
        return(
            <main className="profile-page" ref="main">
                <section className="section-profile-cover section-shaped my-0">
                    {/* Circles background */}
                    <div className="shape shape-style-1 shape-default alpha-4">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    {/* SVG separator */}
                    <div className="separator separator-bottom separator-skew">
                        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0" >
                            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
                        </svg>
                    </div>
                </section>
                
                <section className="section">
                    <Container>
                        <Card className="card-profile shadow mt--300">
                            <div className="px-4">
                                <Row className="justify-content-center">
                                    <Col className="order-lg-2" lg="6">
                                        <div className="card-profile-image">
                                            <a href="#ssam" onClick={e => e.preventDefault()}>
                                                <img alt="perfil" className="rounded-circle" src={perfil} />
                                            </a>
                                        </div>
                                    </Col>
                                    <Col className="order-lg-3 text-lg-right align-self-lg-center" lg="10" >
                                        <div className="card-profile-actions py-5 mt-lg-0">
                                            <Button className="float-right"  href="#ssam" onClick={e => e.preventDefault()} size="sm" >
                                                Editar
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="text-center mt-5">
                                    <h3>
                                        Nombre Apellido{" "}
                                    </h3>
                                    <div className="h6 font-weight-300">
                                        <i className="ni location_pin mr-2" />
                                        Ciudad, Pais
                                    </div>
                                    <div className="h6 mt-4">
                                        <i className="ni business_briefcase-24 mr-2" />
                                        Email
                                    </div>
                                    <div>
                                        <i className="ni education_hat mr-2" />
                                        Institución
                                    </div>
                                </div>
                                <div className="mt-5 py-5 border-top text-center">
                                    <Row className="justify-content-center">
                                        <Col lg="9">
                                            <h6>Mediciones</h6>
                                            <p>
                                            DashBoard
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Card>
                    </Container>
                </section>
            </main>
        );
    }
}

export default Profile;
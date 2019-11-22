import React from 'react'
// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

class Profile extends React.Component{
    constructor(args){
        super(args);
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
                    <section className="section pt-4">
                        <Container>
                            <Card className="card-profile shadow mt--300">
                                <div className="px-4">
                                    <Row className="justify-content-center pt-3">
                                        <Col className="order-lg-2" lg="3">
                                        <div className="card-profile-image">
                                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                            <AccountCircleOutlinedIcon/>
                                            </a>
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
                                            Solution Manager - Creative Tim Officer
                                        </div>
                                        <div>
                                            <i className="ni education_hat mr-2" />
                                            Institución
                                        </div>
                                    </div>
                                    <div className="mt-5 py-5 border-top text-center">
                                    <Row className="justify-content-center">
                                    <Col lg="9">
                                        <p>
                                        An artist of considerable range, Ryan — the name taken
                                        by Melbourne-raised, Brooklyn-based Nick Murphy —
                                        writes, performs and records all of his own music,
                                        giving it a warm, intimate feel with a solid groove
                                        structure. An artist of considerable range.
                                        </p>
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                        Show more
                                        </a>
                                    </Col>
                                    </Row>
                                </div>
                                </div>
                            </Card>
                        </Container>
                    </section>
                <br/>
            </main>
        );
    }
}

export default Profile;
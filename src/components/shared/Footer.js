import React from "react";
import { Link } from "react-router-dom";
//import FacebookIcon from '@material-ui/icons/Facebook';
//import TwitterIcon from '@material-ui/icons/Twitter';
//import InstagramIcon from '@material-ui/icons/Instagram';

//reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Button,
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer has-cards">
        <Container>
          <Row className="align-items-center justify-content-md-between">
            <Col md="3" xs="3">
              <div className="copyright">
                © {new Date().getFullYear()}{" "}
                <a href="https://www.creative-tim.com?ref=adsr-footer">
                  CopyRight
                </a>
                .
              </div>
            </Col>
            
            <Col md="3" xs= "5" className="redesSociales">
              <Button className="btnFooter" color="twitter" href="https://twitter.com/creativetim" id="tooltip126536702" size="lg" target="_blank" >
                <i className="fa fa-twitter" aria-hidden="true"/>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip126536702">
                Follow us
              </UncontrolledTooltip>
              <Button className="btnFooter ml-1" color="facebook" href="https://www.facebook.com/creativetim" id="tooltip383967593" size="lg" target="_blank" >
                <i className=" fa fa-facebook-official" aria-hidden="true"/>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip383967593">
                Like us
              </UncontrolledTooltip>
            </Col>

            <Col md="6" xs="4">
              <Nav className="nav-footer justify-content-end">
                  <NavItem id="quienesSomosFooter">
                      <NavLink tag={Link} to="/nosotros/">Quienes somos?</NavLink>
                  </NavItem>
                  <NavItem id="desarrolladoresFooter">
                        <NavLink tag={Link} to="/desarrolladores/">Desarrolladores</NavLink>
                  </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
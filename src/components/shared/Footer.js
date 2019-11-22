import React from "react";
import { Link } from "react-router-dom";
//import FacebookIcon from '@material-ui/icons/Facebook';
//import TwitterIcon from '@material-ui/icons/Twitter';
//import InstagramIcon from '@material-ui/icons/Instagram';
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  //UncontrolledTooltip,
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
         <Container>
           <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="4">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <a href="https://www.creative-tim.com?ref=adsr-footer">
                    CopyRight
                  </a>
                  .
                </div>
              </Col>
              
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                    <NavItem>
                        <NavLink tag={Link} to="/nosotros/">Quienes somos?</NavLink>
                    </NavItem>
                    <NavItem>
                         <NavLink tag={Link} to="/Desarrolladores/">Desarrolladores</NavLink>
                    </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Footer;
/*
<Col md="2">
  <Nav className="nav-footer bg-dark container row">
      <NavItem className="bg-light col-lg-4 container">
          <NavLink
              className="nav-link-icon"
              href="https://www.facebook.com/creativetim"
              id="tooltip333589074"
              target="_blank"
            >
              <i className="fa fa-facebook-square" />
              <span className="nav-link-inner--text d-lg-none ml-2">
                  Facebook
              </span>
              <FacebookIcon/>
          </NavLink>
          <UncontrolledTooltip delay={0} target="tooltip333589074">
              Like us on Facebook
          </UncontrolledTooltip>
      </NavItem>
      <NavItem className="bg-light col-lg-4">
          <NavLink
              className="nav-link-icon"
              href="https://www.instagram.com/creativetimofficial"
              id="tooltip356693867"
              target="_blank"
              >
              <i className="fa fa-instagram" />
              <span className="nav-link-inner--text d-lg-none ml-2">
                  Instagram
              </span>
              <InstagramIcon/>
          </NavLink>
          <UncontrolledTooltip delay={0} target="tooltip356693867">
              Follow us on Instagram
          </UncontrolledTooltip>
      </NavItem>
      <NavItem className="bg-light col-lg-4">
          <NavLink
              className="nav-link-icon"
              href="https://twitter.com/creativetim"
              id="tooltip184698705"
              target="_blank"
              >
              <i className="fa fa-twitter-square" />
              <span className="nav-link-inner--text d-lg-none ml-2">
                  Twitter
              </span>
              <TwitterIcon/>
          </NavLink>
          <UncontrolledTooltip delay={0} target="tooltip184698705">
          Follow us on Twitter
          </UncontrolledTooltip>
      </NavItem>
  </Nav>
</Col>
*/
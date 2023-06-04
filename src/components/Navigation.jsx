import React, { useState, useEffect, useContext } from "react";
import classnames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import Headroom from "headroom.js";
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Modal,
} from "reactstrap";
import Login from "./Login";
import Register from "./Register";
import { UserContext } from "context/user";

const Navigations = () => {
  const [collapseClasses, setCollapseClasses] = useState("");
  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onExiting = () => {
    setCollapseClasses("collapsing-out");
  };

  const onExited = () => {
    setCollapseClasses("");
  };

  const toggleRegisterModal = () => {
    setRegisterModal(!registerModal);
  };

  const toggleLoginModal = () => {
    setLoginModal(!loginModal);
  };

  const logout = () => {
    clearUser();
    navigate("/", { replace: true });
    window.location.reload();
  }

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }, []);

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              <img
                alt="..."
                src={require("assets/img/brand/argon-react-white.png")}
              />
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("assets/img/brand/argon-react.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                <NavLink
                    className="nav-link-icon"
                    href="/"
                    target="_blank"
                  >
                    <span className="nav-link-inner--text ml-2">
                      Home
                   </span>
                  </NavLink>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-collection d-lg-none mr-1" />
                    <span className="nav-link-inner--text">Services</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/landing-page" tag={Link}>
                      Transcription
                    </DropdownItem>
                    <DropdownItem to="/profile-page" tag={Link}>
                      Speech to Text
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="/"
                    id="tooltip333589074"
                    target="_blank"
                  >
                    <i className="fa fa-facebook-square" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Facebook
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip333589074">
                    Like us on Facebook
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="/"
                    id="tooltip356693867"
                    target="_blank"
                  >
                    <i className="fa fa-instagram" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Instagram
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip356693867">
                    Follow us on Instagram
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="/"
                    id="tooltip184698705"
                    target="_blank"
                  >
                    <i className="fa fa-twitter-square" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Twitter
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip184698705">
                    Follow us on Twitter
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="/"
                    id="tooltip112445449"
                    target="_blank"
                  >
                    <i className="fa fa-github" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Github
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip112445449">
                    Star us on Github
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem className="d-none d-lg-block ml-lg-4">
                  {
                    user ? (
                    <Button
                    className="btn-icon"
                    color="danger"
                        type="button"
                        onClick={logout}
                      >
                        <span className="btn-inner--icon">
                              <i className="fa fa-sign-out mr-2" />
                            </span>
                    <span className="nav-link-inner--text ml-1">
                      Logout
                    </span>
                  </Button>
                    ): (
                      <>
                        <Button
                            className="btn-neutral btn-icon"
                            color="default"
                            type="button"
                            onClick={() => toggleRegisterModal("formModal")}
                          >
                            <span className="nav-link-inner--text ml-1">
                              Register
                            </span>
                          </Button>
                          <Button
                            className="btn-outline-success btn-icon"
                            type="button"
                            onClick={() => toggleLoginModal("formModal")}
                          >
                            <span className="btn-inner--icon">
                              <i className="fa fa-sign-in mr-2" />
                            </span>
                            <span className="nav-link-inner--text ml-1">
                              sign in
                            </span>
                        </Button>
                      </>
                    )
                  }
                  </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>

      <Modal
        className="modal-dialog-centered"
        size="sm"
        isOpen={registerModal}
        toggle={() => toggleRegisterModal("registerModal")}
      >
        <Register />
      </Modal>

      <Modal
        className="modal-dialog-centered"
        size="sm"
        isOpen={loginModal}
        toggle={() => toggleLoginModal("loginModal")}
      >
        <Login />
      </Modal>
    </>
  );
};

export default Navigations;
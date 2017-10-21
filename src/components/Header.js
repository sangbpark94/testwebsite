import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {
      isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="Navbar-Color">
        <Navbar color="faded" light expand="md">
          <NavbarBrand href='/'>Sangs</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/about">About</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/contactme">Contact Me</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/components">Components</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header

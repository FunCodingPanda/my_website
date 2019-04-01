import React from 'react';
import { Container } from 'styled-container-component';
import { Button } from 'styled-button-component';
import { Navbar, NavbarLink } from 'styled-navbar-component';
import { Nav } from 'styled-nav-component';
import { Link } from 'react-router-dom';
 
export class WhiteNavBar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      hidden: true,
    };
  }
 
  handleOpenCloseNav() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }
 
  render() {
    const { hidden } = this.state;
    return (
      <Container fluid>
        <Container fluid>
          <Navbar expandSm light>
            <Nav start>
              <Button
                light
                outline
                toggleCollapse
                expandSm
                onClick={() => this.handleOpenCloseNav()}
              >
                <span>&#9776;</span>
              </Button>
            </Nav>
            <Nav start collapse expandSm hidden={hidden}>
              <NavbarLink light ><Link to='/'>Home</Link></NavbarLink>
              <NavbarLink light active ><Link to='/about'>About</Link></NavbarLink>
              <NavbarLink light ><Link to='/design'>Design Portfolio</Link></NavbarLink>
            </Nav>
          </Navbar>
        </Container>
      </Container>
    );
  }
};

export default WhiteNavBar;
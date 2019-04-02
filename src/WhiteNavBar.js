import React from 'react';
import { Link } from 'react-router-dom';
import './WhiteNavBar.css';
 
export class WhiteNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };

    this.handleOpenCloseNav = this.handleOpenCloseNav.bind(this);
  }
 
  handleOpenCloseNav() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }
 
  render() {
    const { hidden } = this.state;
    return (
      <nav className="white-nav">
        <Link className={hidden ? 'hide' : 'show'} to='/'>Home</Link>
        <Link className={hidden ? 'hide' : 'show'} to='/about'>About</Link>
        <Link className={hidden ? 'hide' : 'show'} to='/design'>Design</Link>
        <button onClick={this.handleOpenCloseNav}>&#9776;</button>
      </nav>
    );
    // return (
    //   <Container fluid>
    //     <Container fluid>
    //       <Navbar expandSm light>
    //         <Nav start>
    //           <Button
    //             light
    //             outline
    //             toggleCollapse
    //             expandSm
    //             onClick={() => this.handleOpenCloseNav()}
    //           >
    //             <span>&#9776;</span>
    //           </Button>
    //         </Nav>
    //         <Nav start collapse expandSm hidden={hidden}>
    //           <NavbarLink light ><Link to='/'>Home</Link></NavbarLink>
    //           <NavbarLink light active ><Link to='/about'>About</Link></NavbarLink>
    //           <NavbarLink light ><Link to='/design'>Design Portfolio</Link></NavbarLink>
    //         </Nav>
    //       </Navbar>
    //     </Container>
    //   </Container>
    // );
  }
};

export default WhiteNavBar;
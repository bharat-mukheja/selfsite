import React from 'react';

import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

const AVATAR = 'https://media.licdn.com/dms/image/C5603AQE7jVylA8rlJg/profile-displayphoto-shrink_200_200/0?e=1546473600&v=beta&t=0yPE79zbpMjlnctJGaNr0_e97qaFizsH32bf9sCBPzU';

const Header = () => (
  <header>
    <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{ height: 80 }}>
    
      <Container>
        <Row noGutters className="position-relative w-100 align-items-center">
        
          <Col className="d-none d-lg-flex justify-content-start">
            <Nav className="mrx-auto" navbar>
            
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">
                  <img src={AVATAR} alt="avatar" className="img-fluid rounded-circle" style={{ width: 36 }} />
                </NavLink>
              </NavItem>
              
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" onClick={this.props.onHeaderClick("home")}>Home</NavLink>
              </NavItem>
              
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">About Me</NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">Portfolio</NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">Experience</NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">Skills</NavLink>
              </NavItem>

              <UncontrolledDropdown className="d-flex align-items-center" nav inNavbar>
                <DropdownToggle className="font-weight-bold" nav caret>Links</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="font-weight-bold text-secondary text-uppercase" header disabled>Get to know me</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="https://www.linkedin.com/in/bmukheja">LinkedIn</DropdownItem>
                  <DropdownItem href="https://www.github.com/bmukheja">Github</DropdownItem>
                  <DropdownItem href="https://facebook.com/bmukheja">Facebook</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="mailto:bharat.mukheja2017@gmail.com">Contact Me</NavLink>
              </NavItem>

            </Nav>
          </Col>
          
          
          
          
          
        </Row>
      </Container>
      
    </Navbar>
  </header>
);

export default Header;
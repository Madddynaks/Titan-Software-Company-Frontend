import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button,
    Container
} from 'reactstrap';

function IndexNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className='navbar' light expand="md"   >
                <NavbarBrand href="/"> <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/Panacee%20logo.png?updatedAt=1710924589184" alt="" className='navlogo' /> </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem className='navitem'>
                            <NavLink href="/components/">Home</NavLink>
                        </NavItem>
                        <NavItem className='navitem'>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                Company
                            </NavLink>
                        </NavItem>

                        <UncontrolledDropdown nav inNavbar className='navitem' >
                            <DropdownToggle nav caret className='navitem'>
                                Portfolio
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar className='navitem'>
                            <DropdownToggle nav caret>
                                Services
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '120px' }} >
                        <div style={{ display: 'flex' }} >
                            <p className='navcallus' >Call Us</p>
                            <img src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/navarrow.svg?updatedAt=1710930975141" alt="" className='calluslogo' />
                        </div>
                        <div>
                            <p className='navnum' >8409624333</p>

                        </div>
                    </div>

                    <hr />
                    <Button className='navbtn'>Contact Us</Button>
                    <hr />
                </Collapse>
            </Navbar>
        </div>
    );
}

export default IndexNavbar;
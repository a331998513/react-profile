import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
    Nav,
    NavContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <NavContainer>
                <NavLogo to ="home">Jay</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to ="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to ="skills">Skills</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to ="projects">Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to ="contact">Contact</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to ="/signin">Sign in</NavBtnLink>
                </NavBtn>
            </NavContainer>
        </Nav>
    )
}

export default Navbar


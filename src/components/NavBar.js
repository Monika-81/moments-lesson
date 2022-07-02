import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../assets/logo.png'
import { NavLink} from 'react-router-dom'
import styles from '../styles/NavBar.module.css'
import { useCurrentUser } from '../contexts/CurrentUserContext'

const NavBar = () => {
    const currentUser = useCurrentUser();
    const loggedInIcons = <>{currentUser?.username}</>
    const loggedOutIcons = 
        <> 
            <NavLink 
                className={styles.NavLink} 
                activeClassName={styles.Active} to="/signin">
                    <i className='fas fa-sign-in-alt'></i>Sign In!
            </NavLink>
            <NavLink 
                className={styles.NavLink} 
                activeClassName={styles.Active} to="/signup">
                    <i className='fas fa-user-plus'></i>Sign Up!
            </NavLink>
        </>

    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="logo" height="45"/>
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink exact 
                            className={styles.NavLink} 
                            activeClassName={styles.Active} to="/">
                                <i className='fas fa-home'></i>Home
                        </NavLink>
                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
import React from 'react'
import { Image } from '../Image'
import { Menu } from '../Menu'
import { NavBarContainer } from './styles'
import { URL_LOGO } from '../../constans'
import { Link } from '@reach/router'


export const NavBar = () => {
    return (
        <NavBarContainer>
            <Image 
                width={290} 
                render={ () => <Link to='/'><img src={URL_LOGO} alt='Logo App' /></Link> } 
            />
            <Menu />
        </NavBarContainer>
    )
}


NavBar.displayName = 'NavBar'
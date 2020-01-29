import React from 'react'
import { func } from 'prop-types'
import { LinksLi } from './styles'

export const MenuLink = ({ render }) => (
    <LinksLi>{render()}</LinksLi>
)

MenuLink.displayName = 'MenuLink'

MenuLink.propTypes = {
    render: func.isRequired,
}

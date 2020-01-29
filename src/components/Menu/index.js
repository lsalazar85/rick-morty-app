import React from 'react'
import { MenuLink } from '../MenuLink'
import { MenuList } from '../MenuList'
import { LinksUl, Link } from '../MenuLink/styles'

export const Menu = () => {
    return (
        <MenuList 
            render={ ({ list }) => (
                <LinksUl>
                    {
                        list.map(item => <MenuLink key={item.id} render={() => 
                            <Link to={item.path}>{item.name}</Link> 
                        }/>)
                    }
                </LinksUl>
            )}
        />
    )
}

Menu.displayName = 'Menu'
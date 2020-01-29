import React from 'react'
import { ListWrapper } from './styles'

export const ListOfAllContent = ({ render }) => {
    return (
        <ListWrapper>
            {  render() }
        </ListWrapper>
    )
}


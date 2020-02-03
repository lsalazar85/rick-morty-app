import React from 'react'
import { ListWrapper } from './styles'
import { uselazyLoader } from '../../hooks/useLazyLoader'

export const ListOfAllContent = ({ render }) => {
    const [show, element] = uselazyLoader()
    return (
        <ListWrapper ref={element}>
            { show && render() }
        </ListWrapper>
    )
}


 import styled from 'styled-components'

export const DivImage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${props => props.width}px;
    height: ${ props => props.height ? `${props.height}px` : 'auto'};
    & img {
        width: 100%;
    }
`
import { Link as LinkMenu } from "@reach/router"
import styled from "styled-components"

export const LinksUl =  styled.ul`
    display: flex;
    flex-direction: row;
`

export const LinksLi =  styled.li`
    & a, button {
        text-transform: uppercase;
        text-decoration: none;
        margin-left: 10px;
        color: #ffffff;
        font-weight: 700;
        background-color: #35c9dd;
        padding: 10px 20px;
        border-radius: 4px;
    }
`

export const Link = styled(LinkMenu)`
    &[aria-current]{
        border: 3px solid #4cb5c3;
    }
`

import styled from "styled-components";

export const ListWrapper = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 18px;

    & div {
        display: flex;
        flex-direction: column;
        margin: 0 10px 10px 0;
        border: 1px solid red;
        width: 200px;
        height: 300px;
        & img {
            width: 200px;
        }
    }
`
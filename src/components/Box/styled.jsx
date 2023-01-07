import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 50%;

    background-color: yellow;
`;

export const Figure = styled.div`
    width: 100%;
    height: 40%;

    & > :first-child{
        width: 100%;
    }
`;
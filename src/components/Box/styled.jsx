import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    height: auto;
`;

export const Figure = styled.div`
    height: 65%;

    & > :first-child{
        height: 100%;
        margin-bottom: 20px;
    }
`;
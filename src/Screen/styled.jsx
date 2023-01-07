import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 15px;
    flex-direction: column;
    width: 95%;
`;

export const Box = styled.div`
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
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    padding: 8%;
    height: 100%;
    width: 100%;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 40px;
    flex-direction: column;
    width: 95%;
`;

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`;

export const Figure = styled.div`
    height: 65%;

    & > :first-child{
        height: 100%;
        margin-bottom: 20px;
    }
`;
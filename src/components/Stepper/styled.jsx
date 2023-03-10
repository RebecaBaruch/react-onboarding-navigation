import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items:center;

    ${(props) =>
        `& :nth-child(${props.mark + 1}){
            border: none;
            background-color: #92E3A9;

        }`
    }
`;

export const StepIcon = styled.div`
    width: 15px;
    height: 15px;
    margin: 8px;
    border-radius: 50%;
    border: 1px solid black;
`;

// ${(props) =>{
//     props.step-mark=='marked' 
//     && `background: '#92E3A9';
//         border: none;`
// }}
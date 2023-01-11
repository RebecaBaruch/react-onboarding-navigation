import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    padding: 1.2rem;
    border: none;
    font-size: 1.5rem;
    font-weight: bold;

    ${(props) => 
            props.type == 'next' ?
            'background-color: #92E3A9; color: #ffffff;' :
            'background-color: transparent; color: #92E3A9;'
    }
`;

export default Button;

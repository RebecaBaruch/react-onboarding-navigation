import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    padding: 20px 20px;
    border: none;
    font-size: 0.8rem;

    ${(props) => 
            props.type == 'next' ?
            'background-color: #92E3A9; color: #ffffff;' :
            'background-color: transparent; color: #92E3A9;' 
    }
`;

export default Button;
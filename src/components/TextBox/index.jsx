import {TextWrapper, Title, Text} from './styled';

function TextBox(props) {
    return(
        <TextWrapper>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
        </TextWrapper>
    );
}

export default TextBox;
import {TextWrapper, Title, Text} from './styled';

function TextBox({title, text}) {
    return(
        <TextWrapper>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </TextWrapper>
    );
}

export default TextBox;
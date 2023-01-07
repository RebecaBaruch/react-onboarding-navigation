import {Wrapper, ButtonContainer} from './styled';
import Box from '../components/Box';
import NavButton from '../components/NavButton';

function Screen(){
    return(
        <Wrapper>
            <Box />
            
            <ButtonContainer>
                <NavButton type={'next'} label={'Continue'}/>
                <NavButton type={'skip'} label={'Skip'}/>
            </ButtonContainer>
        </Wrapper>
    );
}

export default Screen;
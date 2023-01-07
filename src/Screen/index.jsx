import {Wrapper, ButtonContainer, Box, Figure} from './styled';
import TextBox from '../components/TextBox';
import Stepper from '../components/Stepper';
import NavButton from '../components/NavButton';

import img01 from '../assets/img01.svg';

function Screen(){
    return(

        <Wrapper>
            <Box>
                <Figure>
                    <img src={img01} />
                </Figure>
                <TextBox
                    title={'Plant lover Community'}
                    text={'Find gardening enthusiasts from all over the world'}
                />
                <Stepper />
            </Box>
            
            <ButtonContainer>
                <NavButton type={'next'} label={'Continue'}/>
                <NavButton type={'skip'} label={'Skip'}/>
            </ButtonContainer>
        </Wrapper>
    );
}

export default Screen;
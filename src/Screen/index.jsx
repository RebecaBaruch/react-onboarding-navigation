import {Wrapper, ButtonContainer, Box, Figure} from './styled';
import TextBox from '../components/TextBox';
import Stepper from '../components/Stepper';
import NavButton from '../components/NavButton';

import img01 from '../assets/img01.svg';
import img02 from '../assets/img02.svg';
import img03 from '../assets/img03.svg';

function Screen(){
    let screenContent = [
        {
            key: 1,
            src: img01
        },

        {
            key: 2,
            src: img02
        },

        {
            key: 3,
            src: img03
        }
    ];

    return(
        <Wrapper>
            <Box>
                <Figure>
                    <img src={screenContent[0].src} />
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
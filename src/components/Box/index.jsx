import  {Wrapper, Figure} from './styled';
import TextBox from '../TextBox';
import Stepper from '../Stepper';
import img01 from '../../assets/img01.svg';

function Box() {
    return(
        <Wrapper>
            <Figure>
                <img src={img01} />
            </Figure>
            <TextBox
                title={'Plant lover Community'}
                text={'Find gardening enthusiasts from all over the world'}
            />
            <Stepper step-mark='marked'/>
        </Wrapper>
    );
}

export default Box;
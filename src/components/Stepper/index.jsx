import {Container, StepIcon} from './styled';

function Stepper(props){
    return(
        <Container mark={props.mark}>
            {/* <StepIcon step-mark={props.step-mark}/> */}
            <StepIcon />
            <StepIcon />
            <StepIcon />
        </Container>
    );
}

export default Stepper;
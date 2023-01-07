import Button from './styled';

function NavButton(props){
    return(
        <Button type={props.type}>
            <h1>{ props.label }</h1>
        </Button>
    );
}

export default NavButton;
import Button from './styled';

function NavButton({type, onClick, children}){
    return(
        <Button type={type} onClick={onClick}>
            { children }
        </Button>
    );
}

export default NavButton;
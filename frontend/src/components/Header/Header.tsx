import { HeaderContainer, Logo } from "./Header.style";

const Header = () =>{
    return ( 
    
    <div>
        <HeaderContainer>
            <div>
                <Logo src="/imagens/myteacher.png"></Logo>
            </div>
            <p>Encontre o professor perfeito!</p>
        </HeaderContainer>
    </div>
    
    )
}

export default Header;
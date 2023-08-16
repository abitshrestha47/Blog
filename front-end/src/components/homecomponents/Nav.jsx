import { PrimaryNav, MenuLink, Menu} from './NavElement'


const Nav=()=>{
    return(
        <>
            <PrimaryNav>
                <Menu>
                    <MenuLink to="/">
                        Home
                    </MenuLink>
                    <MenuLink to='/about'>About</MenuLink>
                    <MenuLink to='/contact'>Contact</MenuLink>
                </Menu>
            </PrimaryNav>
        </>
    );
}
export default Nav;
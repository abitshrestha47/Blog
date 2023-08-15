import { PrimaryNav, MenuLink, Menu} from './NavElement'


const Nav=()=>{
    return(
        <>
            <PrimaryNav>
                <Menu>
                    <MenuLink to="/">
                        Home
                    </MenuLink>
                </Menu>
            </PrimaryNav>
        </>
    );
}
export default Nav;
import Nav from './homecomponents/Nav'
import { Outlet } from 'react-router-dom';


const Container=()=>{
    return(
        <>
        <Nav/>
        <Outlet />
        </>
    );
}

export default Container;
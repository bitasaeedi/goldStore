import React from 'react';
import {Background, GlobalStyle, Menu_container} from "@/styled components/mobile_menu-style";
import Link from "next/link";
import { useRouter } from 'next/router';
function MobileMenu(props) {
    const router = useRouter();
    console.log(router.pathname)
    return (
        <>
            <GlobalStyle showmenu={props.showmenu}/>
            <Background showmenu={props.showmenu} onClick={props.handleShowMenu}></Background>
            <Menu_container showmenu={props.showmenu}>
                <Link href={'/'} className={router.pathname === '/' ? 'active' : ''} onClick={props.handleShowMenu}>صحفه اصلی</Link>
                <Link href={'/login'} className={router.pathname === '/login' ? 'active' : ''} onClick={props.handleShowMenu}>ورود به حساب</Link>
                <Link href={'/category/categories'} className={router.pathname === '/category/categories' ? 'active' : ''} onClick={props.handleShowMenu}>محصولات</Link>
            </Menu_container>
        </>
    );
}

export default MobileMenu;
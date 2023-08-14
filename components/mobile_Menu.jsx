import React from 'react';
import {Background, GlobalStyle, Menu_container} from "@/styled components/mobile_menu-style";
import Link from "next/link";

function MobileMenu(props) {
    return (
        <>
            <GlobalStyle showmenu={props.showmenu}/>
            <Background showmenu={props.showmenu} onClick={props.handleShowMenu}></Background>
            <Menu_container showmenu={props.showmenu}>
                <Link href={'/'} onClick={props.handleShowMenu}>صحفه اصلی</Link>
                <Link href={'/login'} onClick={props.handleShowMenu}>ورود</Link>
                <Link href={'/signup'} onClick={props.handleShowMenu}>ثبت نام</Link>
                <Link href={'/verification'} onClick={props.handleShowMenu}>کد تاییدیه</Link>
                <Link href={'/category/categories'} onClick={props.handleShowMenu}>کتگوری</Link>
                <Link href={'/product'} onClick={props.handleShowMenu}>محصول</Link>
            </Menu_container>
        </>
    );
}

export default MobileMenu;
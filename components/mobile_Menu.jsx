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
                <Link href={'/user/login'} onClick={props.handleShowMenu}>ورود</Link>
                <Link href={'/user/signup'} onClick={props.handleShowMenu}>ثبت نام</Link>
                <Link href={'/user/verification'} onClick={props.handleShowMenu}>کد تاییدیه</Link>
                <Link href={'/category'} onClick={props.handleShowMenu}>کتگوری</Link>
                <Link href={'/product'} onClick={props.handleShowMenu}>محصول</Link>
                <Link href={'/profile/info'} onClick={props.handleShowMenu}>پروقایل</Link>
            </Menu_container>
        </>
    );
}

export default MobileMenu;
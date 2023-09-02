import React from 'react';
import {Background, GlobalStyle, Menu_container} from "@/styled components/mobile_menu-style";
import Link from "next/link";
import { useRouter } from 'next/router';
import {useAppContext} from "@/components/context";
function MobileMenu(props) {
    const { isLogged } = useAppContext();

    const router = useRouter();
    return (
        <>
            <GlobalStyle showmenu={props.showmenu}/>
            <Background showmenu={props.showmenu} onClick={props.handleShowMenu}></Background>
            <Menu_container showmenu={props.showmenu}>
                <div className={router.pathname === '/' ? 'active' : ''}
                     onClick={()=>{
                         router.push({
                             pathname: '/',
                         }, '/');
                     }}>صفحه اصلی</div>

                {isLogged?<Link href={{ pathname: 'http://user.talayto.com', query: { accessToken:localStorage.getItem("access-token") } }}  onClick={props.handleShowMenu}>ورود به پروفایل</Link>:
                    <Link href={'http://talayto.com/login'} className={router.pathname === '/login' ? 'active' : ''} onClick={props.handleShowMenu}>ورود به حساب</Link>}
                <div className={router.pathname === '/category' ? 'active' : ''}
                     onClick={()=>{
                         router.push({
                             pathname: '/category/categories',
                         }, '/category/categories');
                     }}>محصولات</div>

                {/*<Link href={'http://talayto.com'} className={router.pathname === '/' ? 'active' : ''} onClick={props.handleShowMenu}>صحفه اصلی</Link>*/}
                {/*{isLogged?<Link href={'http://user.talayto.com'} className={router.pathname === '/login' ? 'active' : ''} onClick={props.handleShowMenu}>ورود به پروفایل</Link>:*/}
                {/*    <Link href={'http://talayto.com/login'} className={router.pathname === '/login' ? 'active' : ''} onClick={props.handleShowMenu}>ورود به حساب</Link>}*/}
                {/*<Link href={'http://talayto.com/category/categories'} className={router.pathname === '/category/categories' ? 'active' : ''} onClick={props.handleShowMenu}>محصولات</Link>*/}
            </Menu_container>
        </>
    );
}

export default MobileMenu;
import {Header_icon, Mobile_header_container, Search_bar} from "@/styled components/header-style";
import Link from "next/link";
import Image from "next/image";
import 'material-icons/iconfont/material-icons.css';
import {useState} from "react";
import MobileMenu from "@/components/mobile_Menu";
import {useRouter} from "next/router";
function MobileHeader() {
    let [showSearchBar,setShowSearchBar]=useState(false);
    let [showMenu,setShowMenu]=useState(false);
    function handleShowMenu(){
        setShowMenu(!showMenu)
    }
    const router = useRouter();
    let [text,setText]=useState();

    function handleText(event){
        setText(event.target.value)
    }

    function handleEnter(event){
        if(event.code==='Enter'){
            router.push({
                pathname: '/category/categories',
                query: {
                    searchItem:text
                }
            }, '/category/categories');
            setShowSearchBar(false);
        }
    }
    return (
        <>
            <Mobile_header_container >
                <div className='right_side' >
                    <span className={"material-icons"} onClick={handleShowMenu}>menu</span>
                    <Image src={require('@/public/header-icon.svg')} alt="logo" width="" height=""/>
                </div>
                <div className={'left_side'}>
                    <Header_icon margin={'left'}><Link href={''} onClick={()=>{setShowSearchBar(true)}}>
                    <Image src={require('@/public/header-Search-icon.svg')} alt="buy" width=""
                        height=""/></Link>
                        <Search_bar showSearchBar={showSearchBar}>
                            <input type='text' placeholder='جستجو...'
                                   onKeyDown={handleEnter}
                                   onChange={handleText}
                                   value={text}/>/>
                            <span className="material-icons-outlined" onClick={()=>{setShowSearchBar(false)}}>close</span>
                        </Search_bar>
                    </Header_icon>
                    <Header_icon margin={'right'}><Link href={'/checkout'} >
                        <Image src={require('@/public/header-Buy-icon.svg')} alt="buy" width="" height=""/></Link></Header_icon>
                </div>

            </Mobile_header_container>
            <MobileMenu showmenu={showMenu} handleShowMenu={handleShowMenu}/>
        </>
    );
}

export default MobileHeader;
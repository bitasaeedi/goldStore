import {Header_icon, Mobile_header_container, Search_bar} from "@/styled components/header-style";
import Link from "next/link";
import Image from "next/image";
import 'material-icons/iconfont/material-icons.css';
import {useState} from "react";
function MobileHeader() {
    let [showSearchBar,setShowSearchBar]=useState(false);
    return (
        <>
            <Mobile_header_container >
                <div className='right_side' >
                    <span className={"material-icons"} >menu</span>
                    <Image src={require('@/public/header-icon.svg')} alt="logo" width="" height=""/>
                </div>
                <div className={'left_side'}>
                    <Header_icon margin={'left'}><Link href={''} onClick={()=>{setShowSearchBar(true)}}>
                    <Image src={require('@/public/header-Search-icon.svg')} alt="buy" width=""
                        height=""/></Link>
                        <Search_bar showSearchBar={showSearchBar}>
                            <input type='text' placeholder='جستجو...'/>
                            <span className="material-icons-outlined" onClick={()=>{setShowSearchBar(false)}}>close</span>
                        </Search_bar>
                    </Header_icon>
                    <Header_icon margin={'right'}><Link href={'/checkout'} >
                        <Image src={require('@/public/header-Buy-icon.svg')} alt="buy" width="" height=""/></Link></Header_icon>
                </div>

            </Mobile_header_container>
        </>
    );
}

export default MobileHeader;
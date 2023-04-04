import Image from "next/image";
import {Header_container, Header_icon, Header_items, Wrapper} from '@/styled components/header-style'
import Link from "next/link";

function Header() {
    return (
        <>
                <Wrapper>
                    <Header_container>
                        <Header_icon margin={'left'}><Image src={require('@/public/header-Search-icon.svg')} alt="buy" width="24" height="24"/></Header_icon>
                        <Header_items><Link href={'/product'}>ایتم اول</Link></Header_items>
                        <Header_items><Link href={'/user/login'}>ایتم دوم</Link></Header_items>
                        <Header_items><Link href={'/user/signup'}>ایتم سوم</Link></Header_items>
                        <Header_items><Link href={'/user/verification'}>ایتم چهارم</Link></Header_items>

                        <Image src={require('@/public/header-icon.svg')} alt="logo" width="178" height="65"/>

                        <Header_items><Link href={'/'}>ایتم اول</Link></Header_items>
                        <Header_items>ایتم دوم</Header_items>
                        <Header_items>خرید طلای آب شده </Header_items>
                        <Header_items>ایتم چهارم</Header_items>

                        <Header_icon margin={'right'}><Image src={require('@/public/header-Buy-icon.svg')} alt="buy" width="27" height="27"/></Header_icon>

                    </Header_container>
                </Wrapper>
        </>
    );
}

export default Header;
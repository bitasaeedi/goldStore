import Image from "next/image";
import {Header_container, Header_icon, Header_items} from '@/styled components/header-style'
import Link from "next/link";

function Header() {
    return (
        <>
            <Header_container>
                <Header_icon margin={'left'}><Link href={'/category'}><Image
                    src={require('@/public/header-Search-icon.svg')} alt="buy" width="24"
                    height="24"/></Link></Header_icon>
                <Header_items><Link href={'/product'}>ایتم اول</Link></Header_items>
                <Header_items><Link href={'/user/login'}>ایتم دوم</Link></Header_items>
                <Header_items><Link href={'/user/signup'}>ایتم سوم</Link></Header_items>
                <Header_items><Link href={'/user/verification'}>ایتم چهارم</Link></Header_items>

                <Image src={require('@/public/header-icon.svg')} alt="logo" width="178" height="65"/>

                <Header_items><Link href={'/profile/info'}>ایتم اول</Link></Header_items>
                <Header_items><Link href={'/'}>ایتم دوم</Link></Header_items>
                <Header_items><Link href={'/swiper'}>خرید طلای آب شده</Link> </Header_items>
                <Header_items>ایتم چهارم</Header_items>

                <Header_icon margin={'right'}><Link href={'/checkout'}><Image
                    src={require('@/public/header-Buy-icon.svg')} alt="buy" width="" height=""/></Link></Header_icon>

            </Header_container>
        </>
    );
}

export default Header;
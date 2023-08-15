import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Wrapper} from "@/styled components/Home-style";
import MobileHeader from "@/components/mobile_header";
import MobileMenu from "@/components/mobile_Menu";
import {ToastContainer} from "react-toastify";
import {useState} from "react";

function Layout({children}) {
    let [isLoggedin,setIsLoggedin]=useState();
    return (
        <>
            <Wrapper>
            <Header isLoggedin={isLoggedin}/>
            <MobileHeader isLoggedin/>
            {children}
            <Footer/>
        </Wrapper>
        </>
    );
}

export default Layout;
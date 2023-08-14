import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Wrapper} from "@/styled components/Home-style";
import MobileHeader from "@/components/mobile_header";
import MobileMenu from "@/components/mobile_Menu";
import {ToastContainer} from "react-toastify";

function Layout({children}) {
    return (
        <>
            <Wrapper>
            <Header/>
            <MobileHeader/>
            {children}
            <Footer/>
        </Wrapper>
        </>
    );
}

export default Layout;
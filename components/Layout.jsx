import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Wrapper} from "@/styled components/Home-style";
import MobileHeader from "@/components/mobile_header";

function Layout({children}) {
    return (
        <><Wrapper>
            <Header/>
            <MobileHeader/>
            {children}
            <Footer/>
        </Wrapper>
        </>
    );
}

export default Layout;
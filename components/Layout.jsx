import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Wrapper} from "@/styled components/Home-style";

function Layout({children}) {
    return (
        <>
            <Header/>
            <Wrapper>{children}</Wrapper>
            <Footer/>
        </>
    );
}

export default Layout;
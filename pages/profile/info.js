import {
    ProFile,
    Profile_container,
    Profile_input_list,
    Profile_input_list_container,
} from "@/styled components/profile-style";
import ProfileNavbar from "@/components/profile_navbar";
import 'material-icons/iconfont/material-icons.css';
import ProfileInfo from "@/components/Profile_info";
import {useState} from "react";

function Info(props) {
    let [navbarClicked, setNavbarClicked] = useState(false);

    function handleNavbar() {
        setNavbarClicked(!navbarClicked);
    }

    return (
        <>
            <ProFile>
                <h4>پروفایل</h4>
                <Profile_container>

                    {/* sidebar*/}
                    <ProfileNavbar navbarClicked={navbarClicked} handleNavbar={handleNavbar}/>

                    {/* input list*/}
                    <Profile_input_list_container  navbarClicked={navbarClicked}>
                       <span className='material-icons' onClick={()=>{setNavbarClicked(false)}}>close</span>
                        <Profile_input_list navbarClicked={navbarClicked}>
                            <ProfileInfo/>
                        </Profile_input_list>
                    </Profile_input_list_container>
                </Profile_container>
            </ProFile>
        </>
    );
}

export default Info;
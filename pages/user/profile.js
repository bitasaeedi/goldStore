import {
    ProFile,
    Profile_container, Profile_input,
    Profile_input_list, Profile_Navbar, Profile_Navbar_top,
    Profile_sidebar, Profile_sidebar_bottom, Profile_sidebar_top,
} from "@/styled components/profile-style";
import Image from "next/image";
import ProfileNavbar from "@/components/profile_navbar";
import ProfileInfo from "@/components/Profile_info";

function Profile(props) {
    return (
        <>
           <ProFile>
               <h4>پروفایل</h4>
            <Profile_container>

                {/* sidebar*/}
                <ProfileNavbar/>

                {/* input list*/}
              <ProfileInfo/>

            </Profile_container>
           </ProFile>
        </>
    );
}

export default Profile;
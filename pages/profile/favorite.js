import ProfileNavbar from "@/components/profile_navbar";
import {ProFile, Profile_container, Profile_favorite_list} from "@/styled components/profile-style";
import ProfileInfo from "@/components/Profile_info";
import CategoryItem from "@/components/Category_Item";
import {favorite_list} from "@/pages/api/lists";
import {useState} from "react";

function Favorite(){
    let [navbarClicked,setNavbarClicked]=useState(false);
    function handleNavbar(){
        setNavbarClicked(!navbarClicked);
    }
    return (
        <>
            <ProFile>
                <h4>پروفایل</h4>
                <Profile_container>

                    {/* sidebar*/}
                    <ProfileNavbar navbarClicked={navbarClicked} handleNavbar={handleNavbar}/>

                    {/* favorite list*/}
                    <Profile_favorite_list navbarClicked={navbarClicked}>
                        <CategoryItem list={favorite_list}/>
                    </Profile_favorite_list>

                </Profile_container>
            </ProFile>
        </>
    );
}

export default Favorite;
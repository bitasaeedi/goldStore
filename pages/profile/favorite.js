import ProfileNavbar from "@/components/profile_navbar";
import {ProFile, Profile_container, Profile_favorite_list} from "@/styled components/profile-style";
import ProfileInfo from "@/components/Profile_info";
import CategoryItem from "@/components/Category_Item";
import {favorite_list} from "@/pages/api/lists";

function Favorite(props) {
    return (
        <>
            <ProFile>
                <h4>پروفایل</h4>
                <Profile_container>

                    {/* sidebar*/}
                    <ProfileNavbar/>

                    {/* favorite list*/}
                    <Profile_favorite_list>
                        <CategoryItem list={favorite_list}/>
                    </Profile_favorite_list>

                </Profile_container>
            </ProFile>
        </>
    );
}

export default Favorite;
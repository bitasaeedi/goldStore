import {
    Category_container,
    Category_items,
    Category_main, Category_main_filters,
    Category_menu,
    Category_menu_bottom,
    Category_menu_top,
    Path,
    Search_items
} from "@/styled components/category-style";
import Image from "next/image";
import CategoryFilter from "@/components/category_filter";
import CategoryItem from "@/components/Category_Item";
import ReactPaginate from 'react-paginate';
import style from '@/styles/paginate.module.css'
function Category() {
    function handlePaginate(){

    }
    return <>
        <Path>
            <span>فروشگاه دایموند {' > '}</span>
            <span>دسته بندی {' > '}</span>
            <span className={'white2'}>گوشواره</span>
        </Path>
        <Category_container>

            <Category_menu>

                <Category_menu_top>
                    <h4>جستجوهای مرتبط</h4>
                    <Search_items>
                        <Image src={require('@/public/Search.svg')} alt={'search'} width='' height=''/>
                        <div>دستبند طرح پروانه</div>
                        <span>{'>'}</span>
                    </Search_items>
                    <Search_items>
                        <Image src={require('@/public/Search.svg')} alt={'search'} width='' height=''/>
                        <div>انگشتر طرح گل</div>
                        <span>{'>'}</span>
                    </Search_items>
                    <Search_items>
                        <Image src={require('@/public/Search.svg')} alt={'search'} width='' height=''/>
                        <div>دستبند طلا</div>
                        <span>{'>'}</span>
                    </Search_items>
                    <Search_items>
                        <Image src={require('@/public/Search.svg')} alt={'search'} width='' height=''/>
                        <div>گردنبند</div>
                        <span>{'>'}</span>
                    </Search_items>
                </Category_menu_top>

                <Category_menu_bottom>
                    <h4>فیلتر ها</h4>
                    <CategoryFilter/>
                </Category_menu_bottom>

            </Category_menu>

            <Category_main>
                <Category_main_filters>
                    <div>برترین ها</div>
                    <div>برترین ها</div>
                    <div>برترین ها</div>
                    <div>برترین ها</div>
                    <div>برترین ها</div>
                </Category_main_filters>
                <Category_items>
                    <CategoryItem/>
                </Category_items>
                <ReactPaginate
                    nextLabel=">"
                    onPageChange={handlePaginate}
                    pageRangeDisplayed='3'
                    marginPagesDisplayed='1'
                    pageCount={9}
                    previousLabel="<"
                    containerClassName={style.paginationContainer}
                    pageClassName={style.pageItem}
                    previousClassName={style.pageItem}
                    previousLinkClassName="page-link"
                    nextClassName={style.pageItem}
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName={style.pageItem}
                    breakLinkClassName="page-link"
                    activeClassName={style.active}
                    renderOnZeroPageCount={null}
                />
            </Category_main>

        </Category_container>


    </>
}

export default Category;
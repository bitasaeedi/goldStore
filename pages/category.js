import {
    Category_container,
    Category_items,
    Category_main, Category_main_filters,
    Category_menu,
    Category_menu_bottom, Category_menu_bottom_container,
    Category_menu_top, Category_responsive_menu, GlobalStyle,
    Path,
    Search_items
} from "@/styled components/category-style";
import 'material-icons/iconfont/material-icons.css';
import Image from "next/image";
import CategoryFilter from "@/components/category_filter";
import CategoryItem from "@/components/Category_Item";
import ReactPaginate from 'react-paginate';
import style from '@/styles/paginate.module.css'
import {category_items} from "@/pages/api/lists";
import {useState} from "react";
import {log} from "next/dist/server/typescript/utils";
function Category() {
    let [showFilters,setShowFilters]=useState(false);
    let [showRelated,setShowRelated]=useState(false);

    function handlePaginate(){

    }
    function handleFilters(){
        setShowFilters(!showFilters);
        setShowRelated(false);
        console.log('now')
    }
    function handleRelated(){
        setShowRelated(!showRelated)
        setShowFilters(false);
    }

    return <>

        <GlobalStyle Display={showFilters}/>
        <Category_menu_bottom_container isopen={showFilters}  onClick={()=>{
            console.log('clicked')}}>
        </Category_menu_bottom_container>
        <Path>
            <span>فروشگاه دایموند {' > '}</span>
            <span>دسته بندی {' > '}</span>
            <span className={'white2'}>گوشواره</span>
        </Path>
        <Category_container>

            <Category_responsive_menu >
                <div onClick={handleFilters}>فیلترها
                    <span className="material-icons-outlined">expand_more</span>
                </div>
                <div onClick={handleRelated}>مرتبط ها
                    <span className="material-icons-outlined">expand_more</span>
                </div>
            </Category_responsive_menu>

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

                <Category_menu_bottom Display={showFilters} >

                    <h4 onClick={()=>{
                        console.log('now')}}>فیلتر ها</h4>
                    <CategoryFilter/>
                </Category_menu_bottom>

            </Category_menu>

            <Category_main dis={showFilters===true?".3":"1"}>
                <Category_main_filters Display={showRelated===false?'none':'flex'}>
                    <div>برترین ها</div>
                    <div>برترین ها</div>
                    <div>برترین ها</div>
                    <div>برترین ها</div>
                    <div>برترین ها</div>
                </Category_main_filters>
                <Category_items>
                    <CategoryItem list={category_items}/>
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
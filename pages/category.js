import {Category_container, Category_items, Category_main, Category_main_filters, Category_menu, Category_menu_bottom, Category_menu_bottom_container,
    Category_menu_top, Category_responsive_menu, GlobalStyle, Path, Search_items} from "@/styled components/category-style";
import 'material-icons/iconfont/material-icons.css';
import Image from "next/image";
import CategoryFilter from "@/components/category_filter";
import CategoryItem from "@/components/Category_Item";
import ReactPaginate from 'react-paginate';
import style from '@/styles/paginate.module.css'
import {useEffect, useState} from "react";
import axios from "axios";

function Category() {
    let [showFilters,setShowFilters]=useState(false);
    let [showRelated,setShowRelated]=useState(false);
    const [products,setProducts]=useState();
    let[currentPrice,setCurrentPrice]=useState();
    let[currentPage,setCurrentPage]=useState(1);
    let [pageCount,setPageCount]=useState()
    let [cat,setCat]=useState('');
    let[assortmentType,setAssortmentType]=useState('');


    useEffect(()=>{
        //get all product
        try {
            const response =  axios.get(`http://91.107.160.88:3001/v1/filter?size=20&page=${currentPage}${cat}${assortmentType}`
                ,{
                    headers: {
                        'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmY5M2RjNDlmM2FjNDMwODdkMmY3N' +
                            'iIsImlhdCI6MTY5MDI3NzQzOSwiZXhwIjoxNjkzODc3NDM5fQ.1x1GjSsc5-mOXMbZ2suHf04-_0N31wATGUasoB3qs-M',
                        'Content-Type': 'application/json'
                        ,'Access-Control-Expose-Headers': 'count'
                    }
                }
            ).then(function (response) {
                    console.log(response.headers['count'])
                    setProducts(response.data)
                }
            );
        } catch (error) {
            console.error('Error:', error.message);
        }
         //current price of gold
        try {
            const response =  axios.get(`http://91.107.160.88:3001/v1/goldPriceInfo`
                ,{
                    headers: {
                        'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmY5M2RjNDlmM2FjNDMwODdkMmY3N' +
                            'iIsImlhdCI6MTY5MDI3NzQzOSwiZXhwIjoxNjkzODc3NDM5fQ.1x1GjSsc5-mOXMbZ2suHf04-_0N31wATGUasoB3qs-M'
                    }
                }
            ).then(function (response) {
                    console.log(response.data.buyQuotation)
                    setCurrentPrice(response.data.buyQuotation)
                }
            );
        } catch (error) {
            console.error('Error:', error.message);
        }
    },[currentPage,cat,assortmentType])

    function handlePaginate({selected}){
        console.log(selected)
        setCurrentPage(selected+1)
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

//handle filter by category
    async function handleCategory(type){
        setCat(`&cat=${type}`)
        console.log(`&cat=${type}`)
    }

    return <>

        <GlobalStyle Display={showFilters}/>

        <Category_menu_bottom_container isopen={showFilters}  onClick={()=>{setShowFilters(false)}}>
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
                    <Search_items onClick={()=>handleCategory('bracelet')}>
                        <Image src={require('@/public/Search.svg')} alt={'search'} width='' height=''/>
                        <div>دستبند طرح پروانه</div>
                        <span>{'>'}</span>
                    </Search_items>
                    <Search_items onClick={()=>handleCategory('ring')}>
                        <Image src={require('@/public/Search.svg')} alt={'search'} width='' height=''/>
                        <div>انگشتر طرح گل</div>
                        <span>{'>'}</span>
                    </Search_items>
                    <Search_items onClick={()=>handleCategory('earrings')}>
                        <Image src={require('@/public/Search.svg')} alt={'search'} width='' height=''/>
                        <div>دستبند طلا</div>
                        <span>{'>'}</span>
                    </Search_items>
                    <Search_items onClick={()=>handleCategory('Necklaces')}>
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
                    <div onClick={()=>setAssortmentType('&sort=cheapest')}>ارزان ترین ها</div>
                    <div onClick={()=>setAssortmentType('&sort=newest')}>جدیدترین ها</div>
                    <div onClick={()=>setAssortmentType('&sort=sell')}>پرفروش ترین ها</div>
                </Category_main_filters>
                <Category_items>
                    {products?<CategoryItem list={products} price={currentPrice}/>:null}
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





// export async function getServerSideProps() {
//     let products=[];
//
//         try {
//             const response = axios.get(`/product?size=20&page=1`
//                 ,{
//                     headers: {
//                         'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmY5M2RjNDlmM2FjNDMwODdkMmY3N' +
//                             'iIsImlhdCI6MTY5MDI3NzQzOSwiZXhwIjoxNjkzODc3NDM5fQ.1x1GjSsc5-mOXMbZ2suHf04-_0N31wATGUasoB3qs-M'
//                     }
//                 }
//             ).then(function (response) {
//                     console.log(response.data)
//                     products=response.data;
//                 return {
//                     props: { items: products},
//                 };
//                 }
//             );
//         } catch (error) {
//             console.error('Error:', error.message);
//         }
//
//     return {
//         props: { items: products},
//     };
// }
// async function getAllProduct() {
//     try {
//         const response = await axios.get(`http://91.107.160.88:3001/v1/product?size=20&page=1`
//             ,{
//                 headers: {
//                     'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmY5M2RjNDlmM2FjNDMwODdkMmY3N' +
//                         'iIsImlhdCI6MTY5MDI3NzQzOSwiZXhwIjoxNjkzODc3NDM5fQ.1x1GjSsc5-mOXMbZ2suHf04-_0N31wATGUasoB3qs-M'
//                 }
//             }
//         ).then(function (response) {
//                 console.log(response.data)
//                 setProducts(response.data)
//             }
//         );
//     } catch (error) {
//         console.error('Error:', error.message);
//     }
// }
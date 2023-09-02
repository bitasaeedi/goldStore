import {Category_container, Category_filters_item, Category_items, Category_main,
    Category_main_filters, Category_menu, Category_menu_bottom,
    Category_menu_bottom_container, Category_menu_top, Category_responsive_menu, GlobalStyle, Path, Search_items
} from "@/styled components/category-style";
import 'material-icons/iconfont/material-icons.css';
import styles from '@/styles/toggle.module.css'
import Image from "next/image";
import CategoryItem from "@/components/Category_Item";
import ReactPaginate from 'react-paginate';
import style from '@/styles/paginate.module.css'
import React, {useEffect, useState} from "react";
import axios from "@/pages/api/axios";
import {useRouter} from "next/router";
import 'react-toggle/style.css'
import Toggle from "react-toggle";
import InputRange from "react-input-range";
import 'react-input-range/lib/css/index.css'

function Category() {
    const router = useRouter();
    let {query}=useRouter()
    let [showFilters, setShowFilters] = useState(false);
    let [showRelated, setShowRelated] = useState(false);
    let [products, setProducts] = useState();
    let [currentPage, setCurrentPage] = useState(1);
    let [pageCount, setPageCount] = useState(0)
    let [cat, setCat] = useState(query.category&&query.category!=='categories'?`&cat=${query.category}`:'');
    let [assortmentType, setAssortmentType] = useState('');
    let [rangeValue,setRangeValue]=useState({value:{min:1 , max:5},text:''});
    let [finalRangeValue,setFinalRangeValue]=useState({value:{min:1 , max:5},text:''});
    let [installment, setInstallment] = useState('')
    let [color, setColor] = useState('');
    let [white,setWhite]=useState(false);
    let [golden,setGolden]=useState(false);
    let [url, setUrl] = useState(`/filter/?size=20&page=${currentPage}${cat}${assortmentType}${installment}${finalRangeValue.text}${color}`);
    let[change,setchange]=useState('');
    let [isFetched,setIsFetched]=useState(false)


    useEffect(() => {
        console.log(query.category)
        // setCat(router.query.category&&router.query.category!=='categories'?`&cat=${router.query.category}`:'');
        if (router.query.searchItem) {
            setUrl(`/search/${router.query.searchItem}?size=20&page=${currentPage}`)
        }
        else {
            setUrl(`/filter/?size=20&page=${currentPage}${query.category&&query.category!=='categories'?`&cat=${query.category}`:''}${assortmentType}${query.installment?'&installment=true':installment}${finalRangeValue.text}${color}`)
        }
        //get all product
        try {
            console.log('cat :',cat,url)
             axios.get(url
            ).then(function (response) {
                    setProducts(response.data)
                 console.log(response.data)
                    setPageCount(response.headers.count)
                 setIsFetched(true)
                }
            );
        } catch (error) {
            console.error('Error:', error.message);
        }
    }, [currentPage,cat ,url, assortmentType, installment,finalRangeValue,query])

    function handlePaginate({selected}) {
        console.log(selected)
        setCurrentPage(selected + 1)
    }

    function handleFilters() {
        setShowFilters(!showFilters);
        setShowRelated(false);
        console.log('now')
    }

    function handleRelated() {
        setShowRelated(!showRelated)
        setShowFilters(false);
    }

    function handleCheckbox(target) {
        if(target.target.id==='golden'){
            setGolden(true);
        }
        else if(target.target.id==='white'){
            setWhite(true)
        }

        if(white===golden){
            setColor('')
        }
        else if(white&&!golden){
            setColor('&color=white')
        }
        else if(golden&&!white){
            setColor('&color=golden')
        }

    }

//handle filter by category
    async function handleCategory(type) {
        router.push({
            pathname: `${type}`
        },  `${type}`);

    }

    return <>

        <GlobalStyle Display={showFilters}/>

        <Category_menu_bottom_container isopen={showFilters} onClick={() => {
            setShowFilters(false)
        }}>
        </Category_menu_bottom_container>
        <Path>
            <span onClick={()=>{
                router.push({
                    pathname: '/',
                }, '/');
            }}>فروشگاه دایموند {' > '}</span>
            <span>دسته بندی {' > '}</span>
            <span className={'white2'}>گوشواره</span>
        </Path>
        <Category_container>

            <Category_responsive_menu>
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
                    <Search_items onClick={() => handleCategory('wristband')}>
                        <Image src={require('@/public/Search.svg')} alt={'search'} width='' height=''/>
                        <div>دستبند</div>
                        <span>{'>'}</span>
                    </Search_items>
                    <Search_items onClick={() => handleCategory('ring')}>
                        <Image src={require('@/public/Search.svg')} alt={'search'} width='' height=''/>
                        <div>انگشتر</div>
                        <span>{'>'}</span>
                    </Search_items>
                    <Search_items onClick={() => handleCategory('earring')}>
                        <Image src={require('@/public/Search.svg')} alt={'search'} width='' height=''/>
                        <div>گوشواره</div>
                        <span>{'>'}</span>
                    </Search_items>
                    <Search_items onClick={() => handleCategory('Necklace')}>
                        <Image src={require('@/public/Search.svg')} alt={'search'} width='' height=''/>
                        <div>گردنبند</div>
                        <span>{'>'}</span>
                    </Search_items>
                </Category_menu_top>

                <Category_menu_bottom Display={showFilters}>
                    <h4>فیلتر ها</h4>

                    <Category_filters_item display>
                        <div>وزن
                            <div className={'range'}>
                                <InputRange
                                    draggableTrack
                                    maxValue={10}
                                    minValue={0}
                                    onChange={(Value)=>{setRangeValue({value:Value ,text:`&weight=${Value.min},${Value.max}`})}}
                                    onChangeComplete={()=>{
                                        setFinalRangeValue(rangeValue)}}
                                    value={rangeValue.value}
                                    formatLabel={value => value.toFixed(2)}
                                    step={.01}/>
                            </div>
                        </div>
                    </Category_filters_item>

                    <Category_filters_item>
                        <div>خرید قسطی</div>
                        <Toggle
                            className={styles.customtoggle}
                            icons={false}
                            onChange={() => setInstallment(`&installment=${!installment}`)}/>
                    </Category_filters_item>

                    <Category_filters_item>
                        <div>رنگ</div>
                        <div className={"checkboxs"}>
                            <span>سفید</span><input type={"checkbox"} id='golden' onChange={handleCheckbox}/>
                            <span>زرد</span><input type={"checkbox"} id='white'/>
                        </div>
                    </Category_filters_item>

                </Category_menu_bottom>

            </Category_menu>

            <Category_main dis={showFilters === true ? ".3" : "1"}>
                <Category_main_filters Display={showRelated === false ? 'none' : 'flex'}>
                    <div onClick={() => setAssortmentType('&cheapest=true')}
                    className={assortmentType==='&cheapest=true'?'active':''}>ارزان ترین ها</div>
                    <div onClick={() => setAssortmentType('&newest=true')}
                         className={assortmentType==='&newest=true'?'active':''}>جدیدترین ها</div>
                    <div onClick={() => setAssortmentType('&sell=true')}
                         className={assortmentType==='&sell=true'?'active':''}>پرفروش ترین ها</div>
                </Category_main_filters>
                <Category_items>
                    {isFetched?(products ? <CategoryItem list={products}/> :
                        <div className={"empty"}>
                            <Image src={require('@/public/no-product.svg')} width='' height='' />
                           کالایی پیدا نشد</div>):null}
                </Category_items>
                <ReactPaginate
                    nextLabel=">"
                    onPageChange={handlePaginate}
                    pageRangeDisplayed='2'
                    marginPagesDisplayed='1'
                    pageCount={pageCount / 20}
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
// Category.getInitialProps = async ({ query }) => {
//     const {category} = query
//     const {name}=query
//
//     return {category,name}
// }
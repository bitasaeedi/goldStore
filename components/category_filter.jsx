import {Category_filters_item} from "@/styled components/category-style";
import 'material-icons/iconfont/material-icons.css';
import Toggle from 'react-toggle';
import 'react-toggle/style.css'
import style from '@/styles/toggle.module.css'
function CategoryFilter() {
    let Filters = [
        {title: 'دسته بندی', toggle: false},
        {title: 'وزن', toggle: false},
        {title: 'نوع طلا', toggle: false},
        {title: 'فقط قسطی', toggle: true},
        {title: 'خرید قسطی', toggle: true},
        {title: 'محدوده قیمت', toggle: false},
        {title: 'نوع خرید', toggle: false},
        {title: 'رنگ', toggle: false},
        {title: 'نگین دار یا بی نگین', toggle: false},
    ]

    function handleToggle() {

    }

    return (
        <>
            {Filters.map((filter, index) => {
                return <Category_filters_item key={index}>
                    <div>{filter.title}</div>
                    {filter.toggle ?
                        <Toggle
                            className={style.customtoggle}
                            icons={false}
                            onChange={handleToggle}/>:
                        <span className="material-icons-outlined">expand_more</span>}
                </Category_filters_item>
            })}
        </>
    );
}

export default CategoryFilter;
import {Category_filters_item} from "@/styled components/category-style";
import 'material-icons/iconfont/material-icons.css';
import Toggle from 'react-toggle';
import 'react-toggle/style.css'
import style from '@/styles/toggle.module.css'
function CategoryFilter() {
    let Filters = [
        {title: 'وزن', toggle: false},
        {title: 'خرید قسطی', toggle: true},
        {title: 'محدوده قیمت', toggle: false},
        {title: 'رنگ', toggle: false},
    ]

    function handleToggle() {
        console.log(4)
    }

    return (
        <>

        </>
    );
}

export default CategoryFilter;
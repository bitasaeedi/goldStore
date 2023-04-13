import {Category_item} from "@/styled components/category-style";
import Image from "next/image";


function CategoryItem({list}) {
    let items = [
        {
            image: require('@/public/c1.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c2.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c3.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c4.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c5.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c6.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c7.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c8.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c1.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c2.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c3.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c4.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c5.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c6.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c7.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c8.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c1.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c2.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c3.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c4.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
    ]
    return (
        <>
            {list.map((item, index) => {
                return <Category_item key={index}>
                    <Image src={item.image} alt='item' width='' height=''/>
                    <h6 className='title'>{item.title}</h6>
                    <s className='price1'>{item.price1}</s>
                    <div className='price2'>{item.price2}</div>
                    <div className='info'><span className='material-icons'>star</span>
                    <div>3.2</div> <div>(222نظر)</div>
                    </div>
                </Category_item>
            })}

        </>
    );
}

export default CategoryItem;
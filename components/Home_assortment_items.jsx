import {Assortment_item} from '@/styled components/Home-style'
import Image from "next/image";
function HomeAssortmentItems(props) {
    let images=[
        {img:require('@/public/b5.png')},
        {img:require('@/public/b4.png')},
        {img:require('@/public/b3.png')},
        {img:require('@/public/b2.png')},
        {img:require('@/public/b1.png')},
        {img:require('@/public/b1.png')},
        {img:require('@/public/b2.png')},
        {img:require('@/public/b3.png')},
        {img:require('@/public/b4.png')},
        {img:require('@/public/b5.png')},

    ]
    return <>
        {images.map((url,index)=>{
            return <Assortment_item key={index}>
                <Image src={url.img} width='' height='184' alt='انگشتر'/>
                <div>انگشتر طلا مدل آیینه ای</div>
                <s>2,345,260</s>
                <div className='price'>2,200,000 تومان</div>
              <div className='buy_icon'><Image src={require('@/public/Buyicon.svg')} width='' height='15' alt='Buy'/></div>
            </Assortment_item>
        })}

    </>
}

export default HomeAssortmentItems;
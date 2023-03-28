import {Worthiness_item} from "@/styled components/Home-style";
import Image from "next/image";

function HomeWorthinessItem(props) {
    let icon=require('@/public/worthiness-icon.svg');
    let icon2=require('@/public/worthiness-icon2.svg');
    let infos=['لورم اپیسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
       'لورم اپیسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
       'لورم اپیسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
      'لورم اپیسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'];
    let side=['top-right','bottom-left','top-left','bottom-right']

    return<>
            {infos.map((text,index)=>{

                return <Worthiness_item key={index} side={side[index]}>
                    <Image src={index%2===0?icon2:icon} alt={'icon'} width='' height=''/>
                    <div>{text}</div>
                </Worthiness_item>
            })}

    </>
}

export default HomeWorthinessItem;
import {Comment_profile, Comment_user_info, Comments} from "@/styled components/Home-style";
import Image from "next/image";

function Home_Comments(props) {
    let comments=[
        {
            img:require('@/public/pro1.jpg'),
            user_name:'مریم',
            post:'توسعه دهنده فرانت',
            text:"لورم اپیسوم متن ساختگی  با تولید سادگی نامفهوم از صنعت  چاپلورم اپیسوم متن ساختگی  با تولید سادگی نامفهوم.",
            date:"29 اردیبهشت 1400"
        },
        {
            img:require('@/public/pro2.jpg'),
            user_name:'محمد',
            post:'گرافیست',
            text:"لورم اپیسوم متن ساختگی  با تولید سادگی نامفهوم از صنعت  چاپلورم اپیسوم متن ساختگی  با تولید سادگی نامفهوم.",
            date:"29 اردیبهشت 1400"
        },
        {
            img:require('@/public/pro2.jpg'),
            user_name:'پرهام',
            post:'دیزاینر',
            text:"لورم اپیسوم متن ساختگی  با تولید سادگی نامفهوم از صنعت  چاپلورم اپیسوم متن ساختگی  با تولید سادگی نامفهوم.",
            date:"29 اردیبهشت 1400"
        },
    ]
    return<>
        {comments.map((comment,index)=>{
            return <Comments key={index} border={index===1?'true':'false'}>
                <Comment_user_info>
                    <Comment_profile >
                    <Image src={comment.img} alt={'play'} width="" height=""/>
                    </Comment_profile>
                    <div className='info'>
                        <h6>{comment.user_name}</h6>
                        <span>{comment.post}</span>
                    </div>
                </Comment_user_info>
                <div>{comment.text}</div>
                <div className='date'>{comment.date}</div>
            </Comments>
        })}


    </>
}

export default Home_Comments;
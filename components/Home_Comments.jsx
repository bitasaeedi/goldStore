import {Comments} from "@/styled components/Home-style";

function Home_Comments(props) {
    let comments=[
        {
            user_name:'مریم',
            post:'توسعه دهنده فرانت',
            text:"لورم اپیسوم متن ساختگی  با تولید سادگی نامفهوم از صنعت  چاپلورم اپیسوم متن ساختگی  با تولید سادگی نامفهوم.",
            date:"29 اردیبهشت 1401"
        },
        {
            user_name:'مریم',
            post:'توسعه دهنده فرانت',
            text:"لورم اپیسوم متن ساختگی  با تولید سادگی نامفهوم از صنعت  چاپلورم اپیسوم متن ساختگی  با تولید سادگی نامفهوم.",
            date:"29 اردیبهشت 1401"
        },
        {
            user_name:'مریم',
            post:'توسعه دهنده فرانت',
            text:"لورم اپیسوم متن ساختگی  با تولید سادگی نامفهوم از صنعت  چاپلورم اپیسوم متن ساختگی  با تولید سادگی نامفهوم.",
            date:"29 اردیبهشت 1401"
        },
    ]
    return<>
        {comments.map((comment,index)=>{
            return <Comments key={index} classname={index===1?'center':''}>

            </Comments>
        })}


    </>
}

export default Home_Comments;
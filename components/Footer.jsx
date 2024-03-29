import {
    Footer_container,
    Footer_item,
    Footer_section,
    Footer_title,
    Social_media,
    Trust_symble
} from "@/styled components/footer_style";
import Image from "next/image";

let items = [
    [{title: 'اتاق خبر دایموند', link: ''},
        {title: 'فروش در دایموند', link: ''},
        {title: 'فرصت های شغلی', link: ''},
        {title: 'گرارش تخلف در طلای تو', link: ''},
        {title: 'تماس با طلای تو', link: ''},
        {title: 'درباره طلای تو', link: ''}
    ],
    [{title: 'پاسخ به سوالات متداول', link: ''},
        {title: 'رویه های بازگرداندن کالا', link: ''},
        {title: 'شرایط استغاده', link: ''},
        {title: 'حریم خصوصی', link: ''},
        {title: 'گزارش باگ', link: ''},
    ],
    [{title: 'نحوه ی ثبت سفارش', link: ''},
        {title: 'رویه ارسال سفارش', link: ''},
        {title: 'شیوه های پرداخت', link: ''},
    ]

]

function Footer() {
    return (
        <>
            <Footer_container>
                <Footer_section side='first' to={'1/2'}>
                    <Footer_title>با دایموند</Footer_title>
                    {items[0].map((item, index) => {
                        return <Footer_item key={index}>{item.title}</Footer_item>
                    })}
                </Footer_section>

                <Footer_section side='first' to={'2/3'}>
                    <Footer_title>خدمات مشتریان</Footer_title>
                    {items[1].map((item, index) => {
                        return <Footer_item key={index}>{item.title}</Footer_item>
                    })}
                </Footer_section>

                <Footer_section side='second'>
                    <Footer_title>راهنمای خرید از دایموند</Footer_title>
                    {items[2].map((item, index) => {
                        return <Footer_item key={index}>{item.title}</Footer_item>
                    })}
                </Footer_section>

                <Footer_section side='second'>
                    <Footer_title>نماد های اعتماد</Footer_title>
                    <Trust_symble>
                        <Image src={require('@/public/footer_1.png')} alt='icon' width='' height=''/>
                        <Image src={require('@/public/footer_2.png')} alt='icon' width='' height=''/>
                        <Image src={require('@/public/footer_3.png')} alt='icon' width='' height=''/>
                    </Trust_symble>
                    {/*<Email_section>*/}
                    {/*    <Footer_title>ثبت ایمیل</Footer_title>*/}
                    {/*    <Email_input></Email_input>*/}
                    {/*    <Submit_btn>ثبت</Submit_btn>*/}
                    {/*</Email_section>*/}
                    <Social_media>
                        <Footer_title>همراه ما باشید</Footer_title>
                        <div>
                            <Image src={require('@/public/insta.svg')} alt='icon' width='' height=''/>
                            <Image src={require('@/public/whatsapp.svg')} alt='icon' width='' height=''/>
                            <Image src={require('@/public/Vector.svg')} alt='icon' width='' height=''/>
                        </div>
                    </Social_media>
                </Footer_section>
            </Footer_container>

        </>
    );
}

export default Footer;
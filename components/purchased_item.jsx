import {Amount, Purchased_item} from "@/styled components/checkout-style";
import Image from "next/image";
import {useState} from "react";
import axios from "@/pages/api/axios";

function PurchasedItem({products,handleChanges}) {
    console.log("p",products)
   async function handleDeleteProduct(item){

          await axios.put(`/removeFromCart`,
               {
                   productId:item.productId,
                   variantId: item.variantId,
                   count: item.count
               }
           ).then(function (response) {
                   console.log(response.data)
                   handleChanges();
               }
           ).catch(function (error) {
              console.error('Error:', error.message);
              alert(error.response.message)
          });
   }

    console.log('p',products)
    return <>
        {products?products.products.map((item, index) => {
            return <Purchased_item key={index}>
                <Image src={item.image} alt={'image'} width='1000' height='1000'/>
                <div className='info'>
                    <div className="title">{item.title}</div>
                    <div className='price'>{item.totalPrice} تومان</div>
                    <div className='delete_btn' onClick={()=>handleDeleteProduct(item)}>حذف از سبد خرید</div>
                </div>
                <AMOUNT item={item} changes={handleChanges}/>
            </Purchased_item>
        }):null}

    </>
}

export default PurchasedItem;

function AMOUNT({item,changes}) {

    let [amount, setAmount] = useState(item.count);

    async function addToCart() {
           await axios.put(`/addToCart`,
                {
                    productId:item.productId,
                    variantId: item.variantId,
                    count: 1
                }
            ).then(function (response) {
                    changes();
                setAmount(amount +1)
                }
            ).catch(function (error) {
               console.error('Error:', error);
               if (error.response.data.code===400) {
                   alert('تعداد محصول کافی نیست')
               }
           });
    }

    async function removeFromCart() {

            await axios.put(`/removeFromCart`,
                {
                    productId:item.productId,
                    variantId: item.variantId,
                    count: 1
                }
            ).then(function (response) {
                    console.log(response.data)
                     changes();
                    setAmount(amount - 1)
                }
            ).catch(function (error) {
                console.error('Error:', error);
            });
    }

    return <Amount>
        <div onClick={addToCart}>+</div>
        <div className='number'>{amount}</div>
        <div onClick={amount>1?removeFromCart:null}>-</div>
    </Amount>
}
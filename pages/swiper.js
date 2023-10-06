import React, {useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'react-input-range/lib/css/index.css'
import {checkPattern} from "@/components/checkPatern";
import axios from "axios";
import {Toast} from "@/components/toast";
function Swiper(props) {

    const [image, setImage] = useState("")
    let formData = new FormData()



    function handleImage(e) {
        console.log(e.target. files [0])
        setImage (e.target. files [0])
        formData.append('image',e.target. files [0])
        formData.append('a','b')
    }
    return (
      <>

      </>
    );
}

export default Swiper;
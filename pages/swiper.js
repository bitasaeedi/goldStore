import React, {useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'react-input-range/lib/css/index.css'
import {checkPattern} from "@/components/checkPatern";
import axios from "@/pages/api/axios";
import {Toast} from "@/components/toast";
function Swiper(props) {
    const [image, setImage] = useState("")

    async function sendPic() {
        console.log(2)
       const formData = new FormData ()
        formData. append (' image', image)
        console.log(formData)
       axios.post(`/upload`
            ,formData
        ).then(function (response) {
            console.log(1)
                console.log(response.data)
            }
        ).catch(function (error) {
            Toast(error, false)
        });
    }

    function handleImage(e) {
        console. log(e.target .files)
        setImage (e.target. files [0])
    }
    return (
      <>
      <div>

    <input type="file" name= 'file' onChange={handleImage}/>
          <button onClick={sendPic}>Submit</button>
      </div>
      </>
    );
}

export default Swiper;
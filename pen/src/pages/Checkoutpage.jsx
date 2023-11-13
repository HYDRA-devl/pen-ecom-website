
import { useEffect, useState } from 'react';

import MyHeader from "../components/header"
 const Checkout=()=>{
  const [cart, setCart] = useState([]);



  useEffect(() => {
    // Retrieve cart data from local storage when the component mounts
    const storedCart = localStorage.getItem('cart');
    console.log(storedCart);
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  

return(
<div className="w-screen h-screen bg-[#f4f1ea] flex flex-col justify-start items-start overflow-y-auto overflow-x-hidden ">
<MyHeader/>
<div className="h-full w-full bg-[#f4f1ea] flex flex-col justify-start sm:flex-row sm:justify-start  ">
<div className="h-1/2 w-full sm:w-1/2 flex flex-col justify-center items-center">
{cart.map((product, index) => (
      <div  key={index} className="w-full h-[16%] border-[0.1px] border-gray-400 flex justify-around  p-2 ">
      <img src={product.imageUrl} alt="" className="rounded-full "/>
      <div className="flex flex-col justify-around items-center h-full w-1/2">
      <p className="text-base font-bold ">{product.title}</p>
      <p className="font-bold text-gray-700  ">{product.selectedOption}</p>
      
      </div>
      </div>
     ))}
</div>
<div className=" w-full h-1/2 sm:w-1/2 sm:h-full flex flex-col justify-center items-center ">
  <form action="" className="flex flex-col justify-center items-center gap-7 w-full h-full sm:w-[70%] sm:h-[80%] bg-slate-950 rounded-lg shadow-2xl ">
    <p className="text-xl text-white font-bold">FILL THE FORM </p>
    <input type="text"  className="w-[60%] sm:h-8 h-10  rounded-sm p-1 " placeholder="Full name"/>
    <input type="email" name="" id="" className="w-[60%] sm:h-8 h-10 rounded-sm p-1" placeholder="Email Adress" />
    <input type="tel" name="" id="" className="w-[60%] sm:h-8 h-10  rounded-sm p-1" placeholder="Phone number"/>
    <button className="w-[60%] h-8 bg-[rgb(2,136,88)]  rounded-sm text-white font-bold">SUBMIT</button>
  </form>
</div>


</div>

</div>



)

}
export default Checkout
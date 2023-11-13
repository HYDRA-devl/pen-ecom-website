import Plusminus from "./plusminbutton";
import { Link } from "react-router-dom";


const Cart=({display,displayprim,carts,removefromCart})=>{
  


return(
<div className={` absolute z-20 w-full h-full bg-black bg-opacity-50 flex justify-end items-center ${display}  `} onClick={displayprim}>
    <div className=" lg:w-1/3 lg:h-[80%] z-50 h-full w-full  bg-[#f4f1ea] flex flex-col justify-between items-center lg:mr-6 rounded-2xl "        onClick={(e) => e.stopPropagation()} // Prevent the click from propagating to the background overlay
>
     <div className="w-full flex justify-end  " >
        <button className="font-bold text-5xl mr-4 mt-4 " onClick={displayprim} >x</button>
     </div>
     <h3 className="font-bold ">YOUR CART</h3>
     {carts.map((product, index) => (
      <div  key={index} className="w-full h-[16%] border-[0.1px] border-gray-400 flex justify-around  p-2 ">
      <img src={product.imageUrl} alt="" className="rounded-full "/>
      <div className="flex flex-col justify-around items-center h-full w-1/2">
      <p className="text-base font-bold ">{product.title}</p>
      <p className="font-bold text-gray-700  ">{product.selectedOption}</p>
      <Plusminus/>
      </div>
      <img key={product.id} onClick={() => removefromCart(product.id)}   src="https://cdn-icons-png.flaticon.com/512/2891/2891491.png" className="sm:p-6 p-10 cursor-pointer" alt="" />
      </div>
     ))}
      <Link to="/Checkout">
      <button className=" bg-[rgb(2,136,88)] h-10 w-64 text-white rounded-md font-bold mb-2 "  >CHECKOUT</button>
      </Link>

    </div>
</div>



)



}
export default Cart
const Product=({ title, description, imageUrl})=>{

    




return(
<div className="flex flex-col justify-around items-center">
<a href="http://localhost:5173/product">
<div className="w-full h-full border border-8 border-[#dfdcd6]  rounded-full ">
    <img src={imageUrl} alt="" className="w-full h-full rounded-full object-cover"/>
</div>
</a>
<h2 className="font-bold text-3xl ">{title}</h2>
<p className="text-center text-black ">_____</p>
<p className="font-semibold">
{description}</p>
</div>



);

};
export default Product
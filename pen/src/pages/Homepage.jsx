import MyHeader from "../components/header"
import Myslide from "../components/myslide"
import Productdiv from "../components/productsdiv"
 const Home=()=>{
return(
<div className="w-auto h-auto bg-[#f4f1ea] flex flex-col justify-start items-center overflow-y-auto overflow-x-hidden ">
<MyHeader/>
<Myslide/>
<Productdiv/>
<div className="h-36"></div>
</div>



)

}
export default Home
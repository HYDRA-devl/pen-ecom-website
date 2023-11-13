import { useState } from "react";
const Plusminus=()=>{

    const [request,setrequest]=useState(1)
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        width: "1,25rem",
        height: "1,25rem",
        border: "2px solid black",
       
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isHovered ? "grey" : "transparent", // Change color on hover
        transition: "background-color 0.3s",
      };

    function add(){
        setrequest(request+1)
    }

    function remove(){
        if(request>0)
        setrequest(request-1)
    }
return(


<div className="flex flex-col justify-center items-center w-full h-screen">
   <div className="flex justify-between items-center font-bold">
    <button  style={buttonStyle} className="w-5 h-5 border-2 border-black text-base flex justify-center items-center" onClick={add}  onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on mouse enter
          onMouseLeave={() => setIsHovered(false)} // Set isHovered to false on mouse leave
         >+</button>
     <div className="w-5 h-5 border-2 border-x-0  border-black flex justify-center items-center">{request}</div>
    <button  style={buttonStyle} className="w-5 h-5 border-2 border-black text-base flex justify-center items-center"onClick={remove}  onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on mouse enter
          onMouseLeave={() => setIsHovered(false)} // Set isHovered to false on mouse leave
           >-</button>
    </div>
</div>





);


};
export default Plusminus

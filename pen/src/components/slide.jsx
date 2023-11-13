import blackg from '../assets/black-g.jpeg'
import blackng from '../assets/black-ng.jpeg'
import whiteng from '../assets/white-ng.jpeg'
import whiteg from '../assets/white-g.jpeg'


const Slide=({pen,defaultimage})=>{
    let penImage = defaultimage;

    switch (pen) {
      case "Black-WithClip":
        penImage = "https://www.studioneat.com/cdn/shop/files/MK2-BB-CLOverview_1024x1024.jpg?v=1693687476";
        break;
      case "Black-NoClip":
        penImage ="https://www.studioneat.com/cdn/shop/files/MK2-BB-NCOverview_1024x1024.jpg?v=1693687476";
        break;
      case "Silver-WithClip":
        penImage ="https://www.studioneat.com/cdn/shop/files/MK2-BS-CLOverview_1024x1024.jpg?v=1693687476";
        break;
      case "Silver-NoClip":
        penImage = "https://www.studioneat.com/cdn/shop/files/MK2-BS-NCOverview_1024x1024.jpg?v=1693687476" ;
        break;
        case "Black+nickel":
        penImage = "https://www.studioneat.com/cdn/shop/products/MK1DetailBS_1024x1024.jpg?v=1698854985";
        break;
        case "Black+copper":
        penImage = "https://www.studioneat.com/cdn/shop/products/MK1DetailBC_1024x1024.jpg?v=1698854985" ;
        break;
        case "White+copper":
        penImage = "https://www.studioneat.com/cdn/shop/products/MK1DetailWC_1024x1024.jpg?v=1698854985" ;
        break;
        case "black+black":
        penImage = "https://www.studioneat.com/cdn/shop/files/MK1DetailKnock_1024x1024.jpg?v=1698854985" ;
        break;
        case "White+nickel":
          penImage = "https://www.studioneat.com/cdn/shop/products/MK1DetailWS_1024x1024.jpg?v=1698854985";
          break;
      default:
        // Handle cases where the fruit name doesn't match an image
        break;
    }


return(
<div className=" h-60 w-60 rounded-full bg-gray-800 sm:(w-96 h-96)">
<img src={penImage} alt="" className="w-full h-full rounded-full object-cover" />

</div>




)

}
export default Slide
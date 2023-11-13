import MyHeader from "../components/header"
import Productbuy from "../components/productbuy"
import { Link } from "react-router-dom";
 const Productpage=()=>{


    const productData = [
        {
          id: 1,
          title: 'MARK ONE',
          description: 'A Minimal, Durable, Retractable Pen',
          imageUrl: 'https://www.studioneat.com/cdn/shop/products/MarkOneOverview_large.jpg?v=1569188568',
          detail:'Panopad is a low profile, large format sticky pad for your desk. Made of quality paper and a thoughtful dot grid, use it as a scratch pad or to stick your ideas to the wall. Comes as a 2-pack.'
        },
        {
          id: 2,
          title: 'MARK TWO',
          description: 'A Minimal and Durable Pocket Pen',
          imageUrl: 'https://www.studioneat.com/cdn/shop/files/MK2-BS-CLOverview_large.jpg?v=1693687476',
          detail:'Panopad is a low profile, large format sticky pad for your desk. Made of quality paper and a thoughtful dot grid, use it as a scratch pad or to stick your ideas to the wall. Comes as a 2-pack.'
        },
        // Add more products as needed
        {
            id: 3,
            title: 'MATERIAL DOCK',
            description: 'Wood Docks for MagSafe',
            imageUrl: 'https://www.studioneat.com/cdn/shop/products/TDOCKOverviewEmpty_7c59d0dc-3f35-41de-82e4-1fa542d17232_large.jpg?v=1660230912',
            detail:'Panopad is a low profile, large format sticky pad for your desk. Made of quality paper and a thoughtful dot grid, use it as a scratch pad or to stick your ideas to the wall. Comes as a 2-pack.'
          },
        {
            id: 4,
            title: 'PANOBOOK',
            description: 'A Notebook for Your Desk',
            imageUrl: 'https://www.studioneat.com/cdn/shop/products/Top-CoverDetail_grande_6d0c6393-0006-43d8-983c-88c4a9008f02_large.jpg?v=1511283111',
            detail:'Panopad is a low profile, large format sticky pad for your desk. Made of quality paper and a thoughtful dot grid, use it as a scratch pad or to stick your ideas to the wall. Comes as a 2-pack.'
        },
          {
            id: 5,
            title: 'TOTEBOOK',
            description: 'A Notebook to Take With You',
            imageUrl: 'https://www.studioneat.com/cdn/shop/t/6/assets/Overview_Front%20sm.jpg?v=113060019566633222741627318759',
            detail: 'Panopad is a low profile, large format sticky pad for your desk. Made of quality paper and a thoughtful dot grid, use it as a scratch pad or to stick your ideas to the wall. Comes as a 2-pack.'
        },
          {
            id: 6,
            title: 'APPLE TV REMOTE STAND',
            description: 'Walnut Stand for the Apple TV Remote',
            imageUrl: 'https://www.studioneat.com/cdn/shop/products/ATVS02WhiteFrontRemoteOrtho_SM_large.jpg?v=1619761653',
            detail:'Panopad is a low profile, large format sticky pad for your desk. Made of quality paper and a thoughtful dot grid, use it as a scratch pad or to stick your ideas to the wall. Comes as a 2-pack.'  
        },
          {
            id: 7,
            title: 'CANOPY',
            description: 'Keyboard Case and iPad Stand',
            imageUrl: 'https://www.studioneat.com/cdn/shop/products/Canopy_Proped_Angle_iPad_lg_large.jpg?v=1478548469',
            detail:'Panopad is a low profile, large format sticky pad for your desk. Made of quality paper and a thoughtful dot grid, use it as a scratch pad or to stick your ideas to the wall. Comes as a 2-pack.'
        },
      
      
        ];






return(
<div className="w-screen h-auto flex flex-col justify-start items-center overflow-y-auto  ">
<MyHeader/>
{productData.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <Product
        title={product.title}
        description={product.description}
        imageUrl={product.imageUrl}
  />
        </Link>
      ))}

</div>



)

}
export default Productpage
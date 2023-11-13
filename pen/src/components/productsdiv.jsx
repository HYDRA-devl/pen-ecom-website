import React from 'react';
import Product from "./productcircle";
import { Link } from 'react-router-dom';

const Productdiv=()=>{
   
   
   
    const productData = [
        {
          id: 1,
          title: 'MARK ONE',
          description: 'A Minimal, Durable, Retractable Pen',
          imageUrl: 'https://www.studioneat.com/cdn/shop/products/MarkOneOverview_large.jpg?v=1569188568',
        },
        {
          id: 2,
          title: 'MARK TWO',
          description: 'A Minimal and Durable Pocket Pen',
          imageUrl: 'https://www.studioneat.com/cdn/shop/files/MK2-BS-CLOverview_large.jpg?v=1693687476',
        },
        // Add more products as needed
        {
            id: 3,
            title: 'MATERIAL DOCK',
            description: 'Wood Docks for MagSafe',
            imageUrl: 'https://www.studioneat.com/cdn/shop/products/TDOCKOverviewEmpty_7c59d0dc-3f35-41de-82e4-1fa542d17232_large.jpg?v=1660230912',
          },
        {
            id: 4,
            title: 'PANOBOOK',
            description: 'A Notebook for Your Desk',
            imageUrl: 'https://www.studioneat.com/cdn/shop/products/Top-CoverDetail_grande_6d0c6393-0006-43d8-983c-88c4a9008f02_large.jpg?v=1511283111',
          },
          {
            id: 5,
            title: 'TOTEBOOK',
            description: 'A Notebook to Take With You',
            imageUrl: 'https://www.studioneat.com/cdn/shop/t/6/assets/Overview_Front%20sm.jpg?v=113060019566633222741627318759',
          },
          {
            id: 6,
            title: 'APPLE TV REMOTE STAND',
            description: 'Walnut Stand for the Apple TV Remote',
            imageUrl: 'https://www.studioneat.com/cdn/shop/products/ATVS02WhiteFrontRemoteOrtho_SM_large.jpg?v=1619761653',
          },
          {
            id: 7,
            title: 'CANOPY',
            description: 'Keyboard Case and iPad Stand',
            imageUrl: 'https://www.studioneat.com/cdn/shop/products/Canopy_Proped_Angle_iPad_lg_large.jpg?v=1478548469',
          },
      
      
        ];



   
   
   
   
   
   
   
   
    return(
   
   
   <div className="w-screen h-auto flex-grow  bg-[#f4f1ea] flex  flex-col justify-center items-center  gap-8">
        <p className="text-[#41404c] text-lg px-2  italic font-serif font-medium pt-3  text-center lg:px-96 text-2xl ">Here at Studio Neat, we design tools for people. See everything we make below.</p>
        <p className="text-center text-[#41404c] font-bold">____________________</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-40    ">
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
        
  
  
    </div>
    
    
    
    
    
    );
    
    };
    export default Productdiv
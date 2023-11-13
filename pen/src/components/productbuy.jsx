import { useParams } from 'react-router-dom';
import MyHeader from './header';
import Cart from './Cartlayout';
import { useState } from 'react';
import { useEffect } from 'react';
import Dropdown from './dropdown';
import Slide from './slide';
const options=["Black-NoClip", "Silver-NoClip", "Black-WithClip", "Silver-WithClip"]
const productData = [
  {
    id: 1,
    title: 'MARK ONE',
    description: 'A Minimal, Durable, Retractable Pen',
    imageUrl: 'https://www.studioneat.com/cdn/shop/products/MarkOneOverview_large.jpg?v=1569188568',
    detail:'Panopad is a low profile, large format sticky pad for your desk. Made of quality paper and a thoughtful dot grid, use it as a scratch pad or to stick your ideas to the wall. Comes as a 2-pack.',
      request:0,
      options:["Black+nickel", "Black+copper", "White+copper", "White+nickel" ,"black+black"],
      selectedOption: null, 

  },
  {
    id: 2,
    title: 'MARK TWO',
    description: 'A Minimal and Durable Pocket Pen',
    imageUrl: 'https://www.studioneat.com/cdn/shop/files/MK2-BS-CLOverview_large.jpg?v=1693687476',
    detail:'Panopad is a low profile, large format sticky pad for your desk. Made of quality paper and a thoughtful dot grid, use it as a scratch pad or to stick your ideas to the wall. Comes as a 2-pack.',
      request:0,
      options:["Black-NoClip", "Silver-NoClip", "Black-WithClip", "Silver-WithClip"],
      selectedOption: null, 
  },
  // Add more products as needed
  {
      id: 3,
      title: 'MATERIAL DOCK',
      description: 'Wood Docks for MagSafe',
      imageUrl: 'https://www.studioneat.com/cdn/shop/products/TDOCKOverviewEmpty_7c59d0dc-3f35-41de-82e4-1fa542d17232_large.jpg?v=1660230912',
      detail:'Panopad is a low profile, large format sticky pad for your desk. Made of quality paper and a thoughtful dot grid, use it as a scratch pad or to stick your ideas to the wall. Comes as a 2-pack.',
       request:0,
       options:["Trio", "Duo", "Solo" ],
       selectedOption: null, 

    },
  {
      id: 4,
      title: 'PANOBOOK',
      description: 'A Notebook for Your Desk',
      imageUrl: 'https://www.studioneat.com/cdn/shop/products/Top-CoverDetail_grande_6d0c6393-0006-43d8-983c-88c4a9008f02_large.jpg?v=1511283111',
      detail:'Panopad is a low profile, large format sticky pad for your desk. Made of quality paper and a thoughtful dot grid, use it as a scratch pad or to stick your ideas to the wall. Comes as a 2-pack.',
      request:0,
      options:["white", "black", "Grey" ],
      selectedOption: null, 
    },
    {
      id: 5,
      title: 'TOTEBOOK',
      description: 'A Notebook to Take With You',
      imageUrl: 'https://www.studioneat.com/cdn/shop/t/6/assets/Overview_Front%20sm.jpg?v=113060019566633222741627318759',
      detail: 'Panopad is a low profile, large format sticky pad for your desk. Made of quality paper and a thoughtful dot grid, use it as a scratch pad or to stick your ideas to the wall. Comes as a 2-pack.',
     request:0,
     options:["Standart", "Mini" ],
     selectedOption: null, 

    },
    {
      id: 6,
      title: 'APPLE TV REMOTE STAND',
      description: 'Walnut Stand for the Apple TV Remote',
      imageUrl: 'https://www.studioneat.com/cdn/shop/products/ATVS02WhiteFrontRemoteOrtho_SM_large.jpg?v=1619761653',
      detail:'Panopad is a low profile, large format sticky pad for your desk. Made of quality paper and a thoughtful dot grid, use it as a scratch pad or to stick your ideas to the wall. Comes as a 2-pack.'  ,
      request:0,
      options:["1st gen", "2nd gen"],
      selectedOption: null, 

    },
    {
      id: 7,
      title: 'CANOPY',
      description: 'Keyboard Case and iPad Stand',
      imageUrl: 'https://www.studioneat.com/cdn/shop/products/Canopy_Proped_Angle_iPad_lg_large.jpg?v=1478548469',
      detail:'Panopad is a low profile, large format sticky pad for your desk. Made of quality paper and a thoughtful dot grid, use it as a scratch pad or to stick your ideas to the wall. Comes as a 2-pack.',
     request:0,
     options:["1st gen", "2nd gen"],
     selectedOption: null, 
    },


  ];

const Productbuy=({ title, description, imageUrl,detail})=>{
  const { id } = useParams();
  const productDetail = productData.find((product) => product.id === parseInt(id));

  console.log('Product Detail:', productDetail);


  const [state,SetState]=useState("hidden")
  const [cart, setCart] = useState([]);
  const [ClickedIndex, setClickedIndex] = useState(null);
  
  function ShowCart() {
    SetState("visible")
} 
   function HideCart() {
  SetState("hidden")}
 
 
  const addToCart = () => {
  
  const productInCart = cart.find((item) => item.id === productDetail.id);

  if (productInCart) {
    // If the product is already in the cart, update its quantity
    const updatedCart = cart.map((item) => {
      if (item.id === productDetail.id) {
        // Increment the quantity property
        return { ...item, 
          request: item.request + 1 ,
          selectedOption: productDetail.options[ClickedIndex]}

        };
      return item;
    });
    setCart(updatedCart);
  } else {
    // If it's not in the cart, add it with a quantity of 1
    productDetail.quantity = 1;
    productDetail.selectedOption = productDetail.options[ClickedIndex];

    setCart([...cart, productDetail]);
  }

  // Save the updated cart data to local storage
  localStorage.setItem('cart', JSON.stringify([...cart, productDetail]));
};

const removefromCart = (productId) => {
 const newcart=cart.filter((item) => item.id !== productId);
  setCart(newcart);
  localStorage.setItem('cart', JSON.stringify(newcart));
  console.log(newcart);

}


  useEffect(() => {
    // When the component mounts, check local storage for cart items
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
 
  

  const [item,setItem] = useState({})
  
  return(
    <div className='relative'>
    <Cart display={state} displayprim={HideCart} carts={cart} removefromCart={removefromCart} productdetails={productDetail} clickedIndex={ClickedIndex} />
    <MyHeader/>
    <div className="w-full h-full z-20 bg-[#f4f1ea] flex flex-col justify-around items-center  sm:flex-row sm:justify-start sm:items-center ">
     <div className="rounded-full h-[100%] w-[100%] flex justify-center items-center  p-4 mt-4 ">
     <Slide pen={productDetail.options[item]} defaultimage={productDetail.imageUrl}  />
   
   
    </div>  
      <div className="h-full w-full  flex flex-col justify-center items-center p-16 gap-8 sm:w-1/2">
        <h2 className="text-3xl font-bold">{productDetail.title}</h2>
        <p className="font-semibold">{productDetail.description}</p>
        <p className="text-center">{productDetail.detail}</p>
        <Dropdown options={productDetail.options} setItem={setItem}  setClickedIndex={setClickedIndex} />
        <button className=" bg-[rgb(2,136,88)] h-10 w-64 text-white rounded-md font-bold mt-3 " onClick={() => { ShowCart(); addToCart(); }} >BUY NOW</button>

        </div>  

  
    </div>
   
   </div> 
    
    
    
    
    );
    
    };
    export default Productbuy
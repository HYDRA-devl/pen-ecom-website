import { useState } from "react";

const Dropdown = ({ options,setItem ,setClickedIndex }) => {
  const [isopen, setisopen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  

  function Toggledropdown() {
    setisopen(!isopen);
  }

  function Hover(index) {
    setHoveredIndex(index);
  }

  function Unhover() {
    setHoveredIndex(null);
  }
function Clicked(index){
  setClickedIndex(index);
  setItem(index)
  localStorage.setItem('clickedIndex', index);

}
  return (
    <div className="flex flex-col justify-between items-center gap-0 shadow-2xl">
      <button
        className="w-40 h-10 bg-black text-white flex justify-around items-center"
        onClick={Toggledropdown}
      >
        choose a style <span>{isopen==false? "+":"-" }</span>
      </button>
      <ul className={`font-bold ${isopen ? "visible" : "hidden"} cursor-pointer `}>
        {options.map((option, index) => (
          <li
            key={index}
            className={`w-40 text-center ${
              hoveredIndex === index ? "bg-blue-600" : "bg-white"
            }`}
            onMouseEnter={() => Hover(index)}
            onClick={() => {Clicked(index);Toggledropdown()}}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Dropdown;

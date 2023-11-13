import { create } from 'zustand'

const useStore = create((set) => ({
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 })),
  }))




const Test=()=>{
    const { count, inc } = useStore()      
    return (
        <div className='w-40 h-40 bg-slate-500 flex justify-center items-center'>
          <span>{count}</span>
          <button onClick={inc} className='bg-slate-900 text-white rounded-sm'>one up</button>
        </div>
      )
    }
export default Test
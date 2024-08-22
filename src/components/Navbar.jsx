import React from 'react'

const Navbar = () => {
  return (
 <nav className='bg-slate-800   '>
    <div className="mycontainer flex 
 justify-between items-center text-white px-4 py-5 h-14">
    <div className="logo font-bold text-white text-2xl">
        
    <span className='text-green-500'>&lt;</span>
        Pass
        <span className='text-green-500'>OP/&gt;</span>
        </div>
    <ul>
        {/* <li className='flex  gap-4'>
            <a className='hover:font-bold' href="#">Home</a>
            <a className='hover:font-bold' href="#">About</a>
            <a className='hover:font-bold' href="#">Contact</a>
        </li> */}
        </ul>
        <div>
        <button className=' flex text-black bg-gray-200 rounded-md justify-between items-center '> 
        <img src="data:image/png;base64,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" 
        alt="" 
        className='w-10 rounded-3xl '
        />
        <span className='font-bold px-1'>GitHub</span>
        </button>

       </div>
    
    </div>
 </nav>
  )
}

export default Navbar
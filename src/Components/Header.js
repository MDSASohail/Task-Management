import React, { useRef } from 'react'
function Header({setAddNote,searchFunction}) {
  const searchRef=useRef();
  return (
    <div className=' py-4 bg-blueBG  text-white flex justify-end'>
        <div className='w-[60%] flex justify-between px-4  headInnerDiv' >
            <select ref={searchRef} name="" id="" className='bg-blueBG outline-none text-white'>
              <option value="content">Content</option>
              <option value="title">Title</option>
            </select>
            <input onChange={(e)=>searchFunction(e,searchRef.current.value)} type="text" placeholder='Search notes' className='text-xl outline-none px-2 py-1 bg-transparent w-full' />
            <button className=' py-2 hover:border-white transition-colors w-32 font-medium hover:bg-white rounded-md border-2 border-slate-400 hover:text-blueBG' onClick={()=>setAddNote(true)}>Add Note</button>
        </div>

    </div>
  )
}

export default Header
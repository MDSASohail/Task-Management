import { Save, Close, Edit } from "../Icons/Icon";
import {format} from 'timeago.js'

function AllNotes() {
  return (
     <div className='w-full pb pb-10 border-2 min-h-screen box-border text-xl dark:bg-gray-800 dark:text-white bg-blue-800 flex justify-center items-center'>
      
      <div className='h-[90%] sm:w-[60%] mx-2  w-full'>
        <div className=' h-[20%]'>
          <h1 className='text-center text-2xl mb-5 text-white'>List of Notes</h1>
          <div className='w-full rounded-md overflow-hidden'>
            {/* <input type="text" ref={todoRef} className='w-[80%] p-2 outline-none   bg-blue-300' placeholder='Write note' /> */}
            <input type="text" className='w-[80%] p-2 outline-none   bg-blue-300' placeholder='Search' onChange={searchFunction} />
            <button className='bg-green-400 w-[20%] p-2' onClick={save}>Add</button>
          </div>
        </div>
        <div className='w-full    '>
          {!filteredNotes && allNotes.slice((page - 1) * 10, page * 10).map((item, index) => <div key={index} className={`w-full flex items-center justify-between hover:bg-gray-500   bg-gray-400 p-2 my-2 rounded-md `}>
            <button className="border-2 px-3  mx-1 ">
                {(page - 1) * 10 + index + 1}
              </button>
            <div className='w-full border-2'>
              <p>Title</p>
              <div>
              {editenable !== index && <span className='w-[90%] text-justify  '>{item.todo}</span>}
              {editenable === index && <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} className='bg-transparent w-[97%] border-2 rounded-md p-1 ml-3  outline-none' />}
              </div>
              <p className="text-end">{format(time)}</p>
            </div>
            <div className='  border-2 flex items-center justify-end'>
              <div className={`mx-2  pt-1 `} >

                {editenable !== index && <button disabled={item.completed} onClick={() => { setEditEnable(index); setEditText(item.todo) }}><Edit /></button>}
                {editenable === index && <button onClick={() => { setEditEnable(-1); updateTOdo((page - 1) * 10 + index, { todo: editText, completed: item.completed }); setEditText('') }}><Save /></button>}
              </div>
              <button onClick={() => { deleteList((page - 1) * 10 + index) }} className='mx-2 '>
                <Close />
              </button>
            </div>
          </div>)}
          {/* Filtered */}
          {filteredNotes && filteredNotes.map((item, index) => <div key={index} className={`w-full flex items-center justify-between hover:bg-gray-500   bg-gray-400 p-2 my-2 rounded-md `}>
            <button className="border-2 px-3  mx-1 flex-[1]">
                {(page - 1) * 10 + index + 1}
              </button>
            <div className='flex-[7] border-2'>
              <p>Title</p>
              <div>
              {editenable !== index && <span className='w-[90%]  ml-3 '>{item.todo}</span>}
              {editenable === index && <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} className='bg-transparent w-[97%] border-2 rounded-md p-1 ml-3  outline-none' />}
              </div>
              <p>{format(time)}</p>
            </div>
            <div className=' flex-[2] border-2 flex items-center justify-end'>
              <div className={`mx-2  pt-1 `} >

                {editenable !== index && <button disabled={item.completed} onClick={() => { setEditEnable(index); setEditText(item.todo) }}><Edit /></button>}
                {editenable === index && <button onClick={() => { setEditEnable(-1); updateTOdo((page - 1) * 10 + index, { todo: editText, completed: item.completed }); setEditText('') }}><Save /></button>}
              </div>
              <button onClick={() => { deleteList((page - 1) * 10 + index) }} className='mx-2 '>
                <Close />
              </button>
            </div>
          </div>)}
        </div>
        <div className="text-center">
          {page !== 1 && <button onClick={() => setPage(page - 1)} className=" px-3 py-2 mx-2">⬅️</button>}
          {
            [...Array(Math.ceil(allNotes.length / 10))].map((_, index) => (
              <button onClick={() => setPage(index + 1)} key={index} className="border-2 px-3 py-2 mx-2">
                {index + 1}
              </button>
            ))
          }


          {page < totalPages && <button onClick={() => setPage(page + 1)} className=" px-3 py-2 mx-2">➡️</button>}
        </div>
      </div>

    </div>
  )
}

export default AllNotes
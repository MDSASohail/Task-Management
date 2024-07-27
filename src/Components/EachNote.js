import { Save, Close, Edit } from "../Icons/Icon";
import {format} from 'timeago.js'

function EachNote({editenable,page,index,item,editText,setEditEnable,setEditText,updateTOdo,deleteList,filterComponent}) {
  return (
    <div  className={`w-full flex items-center eachNodeDiv justify-between relative  pb-6  bg-white p-2 my-2 rounded-md `}>
            <div className="flex">
            <button className=" px-3  mx-1 ">
                {filterComponent?index+1:(page - 1) * 10 + index + 1}
              </button>
            <div className='w-full '>
              <p className="text-titleColor">{item.title}</p>
              <div>
              {editenable !== item.id && <span className='w-[90%] text-justify  '>{item.content}</span>}
              {editenable === item.id && <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} className='bg-transparent w-[97%] border-2 rounded-md p-1 ml-0  text-black outline-none' />}
              </div>
              
            </div>
            </div>
            <div className='   flex items-center justify-end'>
              <div className={`mx-2  pt-1 `} >

                {editenable !== item.id && <button  disabled={item.completed} onClick={() => { setEditEnable(item.id); setEditText(item.content) }}><Edit /></button>}
                {editenable === item.id && <button   onClick={() => { setEditEnable(-1); updateTOdo(item.id, { content: editText, id:item.id,title:item.title,time:item.time }); setEditText('') }}><Save /></button>}
              </div>
              <button onClick={() => { deleteList(item.id) }} className='mx-2 '>
                <Close />
              </button>
              
            </div>
            <p className="text-end absolute bottom-0 right-2 text-blueBG">{format(item.time)}</p>
          </div>
  )
}

export default EachNote
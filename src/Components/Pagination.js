
function Pagination({page,length,setPage,totalPages}) {

  return (
    
        <div className="  text-end pb-3 pr-10 bg-blueBG text-white ">
           <button onClick={() => setPage(page - 1)} className={`px-3 cursor-pointer py-2 mx-2 transition-transform hover:scale-125 ${page !== 1 ?"visible":"invisible"}`}>⬅️</button>
           {
             [...Array(Math.ceil(length / 10))].map((_, index) => (
               <button onClick={() => setPage(index + 1)} key={index} className={`border-slate-400 rounded-md border-2 px-3 py-2 mx-2 hover:text-blueBG hover:bg-white hover:border-white transition-colors ${page===index+1?"bg-white text-blueBG border-none":""}`}>
                 {index + 1}
               </button>
             ))
           }


           <button  onClick={() => setPage(page + 1)} className={`px-3 cursor-pointer py-2 mx-2 transition-transform hover:scale-125 ${page <totalPages?'visible':'invisible'}`}>➡️</button>
         </div>
   
  )
}

export default Pagination
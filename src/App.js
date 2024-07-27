
import { useState } from "react";
import {note} from './Data/Default-Values'
import Header from "./Components/Header";
import './App.css'
import Pagination from "./Components/Pagination";
import Note from "./Components/AddNote";
import EachNote from "./Components/EachNote";
import useLocalStorege from "./Custom-Hook/useLocalStorege";
function App() {
 
  
  const [allNotes,setAllNotes]=useLocalStorege("allNotes",note);
  const [editenable, setEditEnable] = useState(-1);
  const [editText, setEditText] = useState('');
  const [addNote, setAddNote] = useState(false);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(allNotes.length / 10);
  const [filteredNotes, setFilteredNotes] = useState(null);
 //Function to search the notes.
  const searchFunction = (e,title) => {
    
    if (e.target.value === "") {
      setFilteredNotes(null);
    }
    else {
      const notes = allNotes.filter(item => item[title].toLowerCase().includes(e.target.value.toLowerCase()));
      setFilteredNotes(notes);

    }
  }

  //Update notes if it edit.
  const updateTOdo = (id, to) => {
    console.log("To update ",id)
    const notes=allNotes.map((item) => {
      if (item.id === id)
        return to;
      return item;
    })
    const filterNo=filteredNotes?.map((item) => {
      if (item.id === id)
        return to;
      return item;
    })
    setAllNotes(notes)
    setFilteredNotes(filterNo)

  }

  //To delete
  const deleteList = (id) => {
   console.log("To delete ",id)
    const rest = allNotes.filter((item) =>item.id !== id);
    setAllNotes(rest);
    const filterNo=filteredNotes?.filter((item) => item.id!==id)
    setFilteredNotes(filterNo);
  }


  return (
    <>
    <div>
      <Header setAddNote={setAddNote} searchFunction={searchFunction}/>
      <Pagination page={page} length={allNotes.length} setPage={setPage} totalPages={totalPages}/>
      {addNote && <Note setAddNote={setAddNote}  setAllNotes={setAllNotes} allNotes={allNotes}/>}
    </div>
    <div className='w-full pb pb-10 border-2 min-h-[80vh] box-border text-xl linearGradient dark:bg-gray-800  bg-wholeBG   flex justify-center'>
      
        <div className=' sm:w-[60%] mx-2  w-full '>
          {!filteredNotes && allNotes.slice((page - 1) * 10, page * 10).map((item, index) => <EachNote key={item.id} editenable={editenable} page={page} index={index} item={item} editText={editText} setEditEnable={setEditEnable} setEditText={setEditText} updateTOdo={updateTOdo} deleteList={deleteList}/>)}
          {/* Filtered */}
          {filteredNotes && filteredNotes.map((item, index) => <EachNote key={item.id} filterComponent={true} editenable={editenable} page={page} index={index} item={item} editText={editText} setEditEnable={setEditEnable} setEditText={setEditText} updateTOdo={updateTOdo} deleteList={deleteList}/>)}
        </div>
      

    </div>
    </>
  )
}

export default App;

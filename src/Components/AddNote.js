import { useRef } from 'react'
import { v1 as generateID } from 'uuid'
function Note({ setAddNote, setAllNotes, allNotes }) {
    const noteRef = useRef();

    const titleRef = useRef();

    const save = (event) => {
        event.preventDefault()
        const currentNote = noteRef.current.value;
        if (currentNote.trim() === '') {
            alert("Please enter a note")
            return;
        }
        noteRef.current.value = "";
        setAllNotes([{ content: currentNote, id: generateID(), title: titleRef.current.value ,time:new Date()}, ...allNotes,]);

    }
    return (
        <div className='addNot w-full z-50 text-xl  h-screen absolute flex justify-center items-center top-0 '>

            <form action="" onSubmit={save}>
                <div className=' bg-blueBG text-white relative  px-8  py-6 rounded-lg'>
                    <p className='text-2xl font-bold absolute top-2 right-3 border-2 px-3 py-2 rounded-xl cursor-pointer hover:border-white transition-colors hover:bg-white hover:text-blueBG' onClick={() => setAddNote(false)}>X</p>
                    <h1 className='text-2xl font-medium text-center mb-4 '>Add Note</h1>
                    <div className=' my-2 flex justify-between'>
                        <span>Select Title</span>
                        <select ref={titleRef} name="" id="" className='bg-blueBG'>
                            <option value="Personal" className='bg-selectBG text-blueBG'>Personal</option>
                            <option value="Office" className='bg-selectBG text-blueBG'>Office</option>
                            <option value="Thought" className='bg-selectBG text-blueBG'>Thought</option>

                        </select>
                    </div>
                    <div className=''>
                        <textarea cols={30} ref={noteRef} name="" className='px-2 bg-transparent py-3 outline-none w-full' id="" placeholder='Enter note'></textarea>
                    </div>
                    <div className='hover:bg-white hover:text-blueBG rounded-lg transition-colors text-center py-2 cursor-pointer'>
                        <button className='text-2xl font-medium' >Add</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Note
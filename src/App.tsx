import { useState , useMemo } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import NewNote from './components/NewNote'
import { useLocalStorage } from './useLocalStorage'
import {  v4 as uuidv4 } from 'uuid'


export  type Note ={
    id: string 
  } & NoteData
  
export type NoteData = {
  title: string
  markdown: string
  tags: Tag[] 
}

export type Tag = {
     id: string
     label: string
}

export type RawNote = {
  id:string
} & RawNoteData


export type RawNoteData = {
  title: string
  markdown: string
  tagIds: string[]
}



function App() {


  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", [])

  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])

  // const notesWithTags = useMemo(()=> {
  //   return notes.map(note => {
  //     return {...note, tags: tags.filter(tag => note.tagIds.includes(tag.id)) }
  //   })
  // }, [notes, tags])


  function onCreateNote(data: NoteData) {

      setNotes(prevNotes => {
        return [
          ...prevNotes,
          {...data, id: uuidv4() , tagIds: tags.map( tag => tag.id) }
        ]
      })

  }

  return ( 
      <div className='container'>
      <Routes>
      <Route path="/" element={<h1>Home</h1>} />
       <Route path="/new" element={<NewNote onSubmit = {onCreateNote} />} />
      <Route path="/:id">
      <Route index element={<h1>Show</h1>} />
      <Route path="edit" element={<h1>Edit</h1>} />
      </Route>
      
      <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      </div>
       
    
  )
}

export default App

import React from 'react'
import { NoteData } from '../App'
import {NoteForm } from './NoteForm'

type NewNoteProps = {

onSubmit : (data: NoteData) => void


}

const NewNote = ( {onSubmit}: NewNoteProps) => {
  return (
    <div className='container m-[5%]'>
        
        <h1 className='my-10'>New Note</h1>


          <NoteForm onSubmit={onSubmit} />
        
        
        </div>
  )
}

export default NewNote
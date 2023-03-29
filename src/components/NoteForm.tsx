import React, { FormEvent, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CreatableReactSelect from 'react-select/creatable'
import { NoteData, Tag } from '../App'


type NoteFormProps = {
  onSubmit: (data: NoteData) => void
}

export function NoteForm({ onSubmit }: NoteFormProps )  {

const titleRef = useRef<HTMLInputElement>(null);
const markdownRef = useRef<HTMLTextAreaElement>(null);
const [selectedTags, setSelectedTags] = useState<Tag[]>([])


const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

onSubmit({
  title: titleRef.current!.value,
  markdown: markdownRef.current!.value,
  tags: []
})

  }
  return (
    <div>
   
    <form onSubmit={handleSubmit}>
      
    {/* <input type="email" /> */}
     <div className='form-group' id="title" >
     <label >Title</label>
     <input className='flex' type="text" required ref={titleRef} />
     </div>


     <div className='form-group' id='tags' >
      <label>Tags </label>
    <CreatableReactSelect
     value={ selectedTags.map((tag)=> {
      return { label: tag.label, value: tag.id}
    })} 
    onChange={ tags => {
      setSelectedTags(
        tags.map((tag)=> {
          return { label: tag.label, id: tag.value }
        })
      )
    }
    }
      
    
    
    isMulti />
     
     </div>


   <div className='form-group' id='markdown'>
    <label>Body</label>
     
     <textarea className='flex' required ref={markdownRef} rows={15}> </textarea>


   </div>

   <div className='flex items-center justify-end gap-5 rounded'>
    <button 
    type='submit'
    className='py-2 px-8 bg-green-400'>save</button>
    <Link to="..">
    <button className='py-2 px-8 bg-blue-400 rounded' type='button'>cancel</button>
    </Link>
    
   </div>

    </form>



    </div>
  )
}


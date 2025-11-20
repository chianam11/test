import React from 'react'
import { useState } from 'react'

const Searching = ( {handleSearchByUserId}) => {
const [id,setId] = useState();
  return (
    <div>
        <form action="" className='flex flex-col p-3' onSubmit={(e)=>{
            e.preventDefault()
            handleSearchByUserId(id)

        }}>
            <label htmlFor="">Tìm kiếm User bằng id</label>
            <input type="search" maxLength={10} min={1} id="search-query" name="query" className='p-2 border' placeholder='id...' onChange={(e)=>{
             setId(e.target.value)
            }}/>
            <button type='submit'>submit</button>
        </form>
        
    </div>
  )
}

export default Searching
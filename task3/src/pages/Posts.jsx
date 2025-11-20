
import ListPosts from '../components/ListPosts';
import Pagination from '../components/pagination/Pagination';
import Searching from '../components/searching/Searching';
import { useState } from 'react';


function Posts() {
    const [userId,setUserId] = useState(0);
    console.log(userId);
    
  const handleSearchByUserId = (id)=>{
    setUserId(id);
  }
  
 return <div className='p-5'>
 
 <Searching  handleSearchByUserId={handleSearchByUserId}/>
 {userId > 0&& <button onClick={
           ()=>{
            handleSearchByUserId(0)
            
           }
            
        }>quay lại</button>}
       
 {/* <Pagination/> */}
 <ListPosts userId={userId}/>
 </div>
}

export default Posts

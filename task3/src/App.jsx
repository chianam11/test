import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { fetchPosts } from './redux/thunk/fetchposts';
import './App.css'

function App() {
  const { items, status, error } = useSelector(state=>state.posts);
  const dispatch = useDispatch();
  useEffect(()=>{
dispatch(fetchPosts());
  },[dispatch])
  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;
  return (
    <>
    {items?items.map(({id,useId,title,body},index)=>{
      
      return<>
      <hr />
      <div key={index}>
          <p>posts id :{id}</p> 
          <p>user id: {useId}</p>
          <p>title: {title}</p>
          <p>body: {body}</p>
        </div>
       <hr /> 
        </>
    }):<>
    <p>không có bài post nào</p>
    </>}
        
    </>
  )
}

export default App

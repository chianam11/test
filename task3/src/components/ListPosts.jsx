import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { fetchPosts } from '../redux/thunk/fetchposts';
import Loading from '../components/Loading';
function ListPosts() {
  const { items, status, error } = useSelector(state=>state.posts);
  const dispatch = useDispatch();
  useEffect(()=>{
dispatch(fetchPosts());
  },[dispatch])
  if (status === 'loading') return <Loading/>;
  if (status === 'failed') return <p>Error: {error}</p>;
  return (
    <>
    {items?items.map(({useId,title,body},index)=>{
      
      return<div key={index}>
      
      <hr />
      <div  className="p-4 border rounded-md mb-4">
  <p>User ID: {useId}</p>
  <p className="font-semibold">Title: {title}</p>
  <p className="text-gray-700">{body}</p>
</div>
       <hr /> 
        </div>
    }):<>
    <p>không có bài post nào</p>
    </>}
        
    </>
  )
}

export default ListPosts

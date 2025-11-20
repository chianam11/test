import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { fetchPosts } from '../redux/thunk/fetchposts';
import Loading from '../components/Loading';
function ListPosts({userId}) {
  const { items:posts, status, error } = useSelector(state=>state.posts);
  const dispatch = useDispatch();
  useEffect(()=>{
dispatch(fetchPosts(userId));
  },[dispatch,userId])
  if (status === 'loading') return <Loading/>;
  if (status === 'failed') return <p>Error: {error}</p>;
  return (
    <>
    <option value=""></option>
    {posts.length>0?posts.map(({id,userId,title,body},index)=>{
      
      return<div key={index}>
      
      <hr />
      <div  className="p-4 border rounded-md mb-4">
  <p>Post ID: {id}</p>
  <p>User ID: {userId}</p>
  <p className="font-semibold">Title: {title}</p>
  <p className="text-gray-700">Body:{body}</p>
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

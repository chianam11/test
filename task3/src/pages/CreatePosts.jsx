import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { createPosts } from "../redux/thunk/createPosts";
import Loading from "../components/Loading";
const CreatePosts = () => {
  const [newPostsData, setNewPost] = useState({
    userId: "",
    id: "",
    title: "",
    body: "",
  });
  const { loading, error,items } = useSelector((state) => state.newPosts);

  const dispatch = useDispatch();
  const handleInput = (e) => {
    setNewPost({
      ...newPostsData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createPosts(newPostsData));
  };
  if(loading){
    return <Loading/>
  }
  
  return (
    <div className="p-2">
      <h1 className="text-xl font-semibold mb-4">Tạo mới bài post</h1>
<div className="flex justify-between">
 <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col">
          <label className="text-sm mb-1">Nhập user ID</label>
          <input
            type="text"
            id="userId"
            name="userId"
            onChange={handleInput}
            className="border rounded-md px-3 py-2 text-sm"
          />
        </div>

       

        <div className="flex flex-col">
          <label className="text-sm mb-1">Nhập tên title</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleInput}
            className="border rounded-md px-3 py-2 text-sm"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Nhập body</label>
          <input
            type="text"
            name="body"
            onChange={handleInput}
            className="border rounded-md px-3 py-2 text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red  py-2 rounded-md text-sm m-2"
        >
          Đăng
        </button>
      </form>
      <div> {items.length>0&&<>
      {items.map(({userId,title,body},index)=>{
        return <div key={index}> 
      <div  className="p-4 border rounded-md mb-4">
  <p>User ID: {userId}</p>
  <p className="font-semibold">Title: {title}</p>
  <p className="text-gray-700">Body:{body}</p>
</div></div>
      })}
      </>}</div>
      
</div>
     
     
    </div>
  );
};

export default CreatePosts;

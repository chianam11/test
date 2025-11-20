import React from 'react'
import { Link } from 'react-router-dom';
const Nav = () => {
  
  return (
     <nav className='relative top-0'>
        <Link to="/posts">Bài Posts</Link> |
        <Link to="/posts/create">Tạo Bài Posts</Link>
      </nav>
  )
}

export default Nav
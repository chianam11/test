import React from 'react'
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
     <nav className='relative top-0'>
        <Link to="/">Bài Posts</Link> |
        <Link to="/create">Tạo Bài Posts</Link>
      </nav>
  )
}

export default Nav
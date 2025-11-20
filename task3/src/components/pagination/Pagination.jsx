import React from 'react'
import { Link } from 'react-router-dom';
import "./index.css"
const Pagination = () => {
  return (
    <div>
<ul className="pagination">
  <li><Link href="#">&laquo;</Link></li>
  <li><Link href="#">1</Link></li>
  <li><Link href="#">2</Link></li>
  <li><Link href="#">3</Link></li>
  <li><Link href="#">4</Link></li>
  <li><Link href="#">5</Link></li>
  <li><Link href="#">&raquo;</Link></li>
</ul>
    </div>
  )
}

export default Pagination
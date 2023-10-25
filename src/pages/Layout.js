import React from 'react'
import {Link,Outlet} from "react-router-dom"
import Home from './Home'

export default function Layout() {
  return (
    <>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/blogs">Blogs</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <Outlet/>
    </nav>
    </>
  )
}

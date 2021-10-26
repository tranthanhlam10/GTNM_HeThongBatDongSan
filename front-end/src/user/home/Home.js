import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div>
            <Link to="/wishlist">wishlist</Link>
            <br />
            Day la trang home
        </div>
    )
}

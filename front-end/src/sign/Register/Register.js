import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
export default function Register() {
    return (
        <div>
            Trang đăng kí
            <Link to="/login">Đăng nhập</Link>
        </div>
    )
}
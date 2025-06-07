import { useDispatch } from 'react-redux'

import { login } from '../features/authSlice'

import { useState } from 'react'


const Login = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('')

    const handleLogin = () => {
        if (username.trim()) {
            dispatch(login({ name: username }))
        }
    }

    return (
        <div>
            <h2>LOGIN</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter username' />

            <button onClick={handleLogin}>
                Login
            </button>
        </div>
    );

}

export default Login
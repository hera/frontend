import React from 'react'


export default function Login(props) {
    return (
        <div>
            <div>
                <img src='http://placekitten.com/200/300' alt='Secret Family Recipe Logo' />
            </div>
            <form onSubmit=''>
                <h2>Login</h2>
                <label>Email:
                    <input name='email' type='text' />
                </label>
                <label>
                    <input name='password' type='text' />
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}
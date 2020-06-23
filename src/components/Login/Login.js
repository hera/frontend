import React, { useEffect, useState } from 'react'
import './Login.scss';
import * as yup from 'yup'
import {loginSchema} from '../../schema/formSchema'


export default function Login(props) {
    const initialErrors = {
        username: '',
        password: ''
    }

    const [errors, setErrors] = useState(initialErrors)
    const [submitButton, setSubmitButton] = useState(true)
    const [formValue, setFormValue] = useState() 




    const onChange = event => {
        const name = event.target.name
        const fieldValue = event.target.value
        
        // console.log(`${name}: ${value}`)

        yup.reach(loginSchema, name)
            .validate(formValue)
            .then(valid => {
                setErrors({...errors, [name]: ''})
            })
            .catch(err => {
                setErrors({...errors, [name]: err.errors[0]})
            })


        setFormValue({...formValue, [name]: fieldValue})
    }

    useEffect(() => {
        loginSchema.isValid(formValue)
        .then(valid => {
            setSubmitButton(!valid)
        })
    },)

    const submitLogin = event => {
        event.preventDefault()
        
        console.log(`username: ${formValue.username}, password: ${formValue.password}`)
    }


    return (
        <div className='Login'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <a href='/' className='Login__logo'>Home</a>
                    </div>
                    <div className='col-md-6'>
                        <div className='box'>
                            <form onSubmit={submitLogin}>
                                <h4>Log In:</h4>

                                <label htmlFor='username'>Username:</label>
                                <input name='username' type='text' id='username' onChange={onChange} />
                                {errors.username.length > 0 ? (<p className="error">{errors.username}</p>) : null}

                                <label htmlFor='password'>Password:</label>
                                <input name='password' type='password' id='password' onChange={onChange} />
                                {errors.password.length > 0 ? (<p className="error">{errors.password}</p>) : null}

                                <button disabled={submitButton} className='button button-green'>Log In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
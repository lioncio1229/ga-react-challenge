import styles from './registration-form.module.css';
import { useState, useEffect, useRef } from 'react';

export default function RegistrationForm(){
    const isInitialized = useRef(false);
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        username: {message: '', valid: false},
        email: {message: '', valid: false},
        password: {message: '', valid: false},
        confirmPassword: {message: '', valid: false},
    });

    const isSubmitDisabled = !!Object.values(errors).find(err => !err.valid);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({...prev, [name]: value}));
    };

    //Validate Username
    useEffect(() => {
        if(!isInitialized.current) return;
        const {username} = data;

        let error = { message: '', valid: true };
        if(!username.trim())
        {
            error = {
                message: 'Username is required.',
                valid: false
            };
        }
        else if(!/^[a-zA-Z0-9_]+$/.test(username)){
            error = {
                message: 'Invalid character',
                valid: false
            };
        }
        else if(!/^[a-zA-Z0-9_]{3,20}$/.test(username)){
            error = {
                message: '3 to 20 occurence only',
                valid: false
            };
        }
        setErrors((prev) => ({...prev, username: error}));
    }, [data.username]);

    //Validate Email
    useEffect(() => {
        if(!isInitialized.current) return;

        let error = { message: '', valid: true };
        const {email} = data;

        if (!email.trim()) {
            error = {
                message: 'Email is required.',
                valid: false,
            }
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            error = {
                message: 'Invalid email format.',
                valid: false,
            }
        }

        setErrors((prev) => ({...prev, email: error}));
    }, [data.email]);

    //Validate Password and Confirm Password
    useEffect(() => {
        if(!isInitialized.current) return;

        let passwordError = { message: '', valid: true };
        let confirmPasswordError = { message: '', valid: true };
        const {password, confirmPassword} = data;

        if (!password) {
            passwordError = {
                message: 'Password is required.',
                valid: false,
            }
        } else if (password.length < 6) {
            passwordError = {
                message: 'Password must be at least 6 characters long.',
                valid: false,
            }
        }

        if (!confirmPassword) {
            confirmPasswordError = {
                message: 'Confirm password is required.',
                valid: false,
            }
        }
        else if (confirmPassword !== password) {
            confirmPasswordError = {
                message: 'Passwords do not match.',
                valid: false,
            }
        }

        setErrors((prev) => ({...prev, password: passwordError, confirmPassword: confirmPasswordError}));

    }, [data.password, data.confirmPassword]);

    useEffect(() => {
        isInitialized.current = true;
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!isSubmitDisabled)
        {
            console.log(data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Signup</h1>
            <div className={styles.field}>
                <h4>Username</h4>
                <input type="text" name="username" value={data.username} onChange={handleChange}/>
                <small className={styles.error}>{errors.username.message}</small>
            </div>        
            <div className={styles.field}>
                <h4>Email</h4>
                <input type="email" name="email" value={data.email} onChange={handleChange}/>
                <small className={styles.error}>{errors.email.message}</small>
            </div>
            <div className={styles.field}>
                <h4>Password</h4>
                <input type="password" name="password" value={data.password} onChange={handleChange}/>
                <small className={styles.error}>{errors.password.message}</small>
            </div>
            <div className={styles.field}>
                <h4>Confirm Password</h4>
                <input type="password" name="confirmPassword" value={data.confirmPassword} onChange={handleChange}/>
                <small className={styles.error}>{errors.confirmPassword.message}</small>
            </div>
            <div className={styles.field}>
                <button type='submit' disabled={isSubmitDisabled}>Signup</button>
            </div>   
        </form>
    )
}
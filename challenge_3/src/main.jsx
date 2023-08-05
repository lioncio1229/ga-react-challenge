import React from 'react'
import ReactDOM from 'react-dom/client'
import RegistrationForm from './components/RegistrationForm';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container'>
    <div className='reg-form'>
      <RegistrationForm />
    </div>
  </div>,
)

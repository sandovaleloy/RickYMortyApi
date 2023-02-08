import React from 'react'
import './styles/ResidentForm.css'

const ResidentForm = ({ hanleSubmit }) => {
  return (
    <form className='residentForm active' onSubmit={hanleSubmit}>
        <input className='residentForm__input active' type="text"  id="name" placeholder='Name'/>
        <button className='residentForm__btn'>Search</button>
    </form>
  )
}

export default ResidentForm
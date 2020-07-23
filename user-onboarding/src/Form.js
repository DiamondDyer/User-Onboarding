import React from 'react'

export default function Form(props) {
  const {
    values,
    submit,
    inputChange,
    checkboxChange,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onCheckboxChange = evt => {
    const { name, checked } = evt.target
    checkboxChange(name, checked)
  }

  const onInputChange = evt => {
    const { name, value } = evt.target
    inputChange(name, value)
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a User</h2>

      
        <button disabled={disabled}>submit</button>

        <div className='errors'>
        
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.role}</div>
          <div>{errors.password}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>Enter information</h4>

       
        <label>Name&nbsp;
          <input
            value={values.name}
            onChange={onInputChange}
            name='name'
            type='text'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={onInputChange}
            name='email'
            type='text'
          />
        </label>

        <label>Password
          <input
            value={values.password}
            onChange={onInputChange}
            name='password'
            type='password'
          />
        </label>

        
        <label>Role
          <select
            onChange={onInputChange}
            value={values.role}
            name='role'
          >
            <option value=''>- Select an option -</option>
            <option value='frontend'>Frontend</option>
            <option value='backend'>Backend</option>
            <option value='designer'>Designer</option>
            
          </select>
        </label>

       
      </div>

      <div className='form-group checkbox'>
        
        <label>Terms of Service
          <input
            type="checkbox"
            name='terms'
            checked={values.terms === true}
            onChange={onCheckboxChange}
          />
        </label>

        
      </div>
    </form>
  )
}

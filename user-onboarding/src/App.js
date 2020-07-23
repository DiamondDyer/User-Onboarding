import React, { useState, useEffect } from 'react'
import Team from './Team'
import Form from './Form'

import formSchema from './validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'


const initialFormValues = {
 
  name: '',
  email: '',
  password: '',
  role: '',
  terms: false
    
  ,
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  role: '',

}
const initialTeam= []
const initialDisabled = true


export default function App() {
  
  const [team, setTeam] = useState(initialTeam)       
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)       

 

  const postNewTeamMember = newTeamMember => {
    
    axios.post('https://reqres.in/api/users', newTeamMember)
      .then(res => {
        
        setTeam([...team, res.data ])
        setFormValues(initialFormValues)
       
      })
      .catch(err => {
        debugger
      })
  }

  
  const inputChange = (name, value) => {
   
    yup
      .reach(formSchema, name)
     
      .validate(value)
      
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
     
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const checkboxChange = (name, isChecked) => {
   
    setFormValues({
      ...formValues,
      terms: isChecked, }
    )
  }

  const submit = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      role: formValues.role.trim(),
      terms: formValues.terms,
    }
   
    postNewTeamMember(newTeamMember)
  }


  useEffect(() => {
    
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div className='container'>
      <header><h1>Add New User</h1></header>

      <Form
        values={formValues}
        inputChange={inputChange}
        checkboxChange={checkboxChange}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        team.map(team => {
          return (
            <Team key={team.id} details={team} />
          )
        })
      }
    </div>
  )
}

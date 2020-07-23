import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is Required"),
    email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
    password: yup
    .string()
    .min(6,"Password must be at least 6 characters")
    .required("Password is Required"),
 
    role: yup
    .string()
    .oneOf(['backend', 'frontend', 'designer'], "Role is required"),
  
})

export default formSchema

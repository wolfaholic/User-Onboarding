import axios from 'axios';
import React, { useState, useEffect} from 'react'
import './App.css';
import './components/Form.js';
import FormSchema from '../validation/formSchema';
import * as Yup from 'yup';
 
/// Initial States ///
const initFormData = {
  //Text Inputs //
  username: '',
  email: '',
  password: '',
  // Checkboxes //
  terms: '',
}

const initFormErr = {
  username: '',
  email: '',
  password: '',
  terms: '',
}
const initUsers = []
const initDisabled = true

//// States ////
const [user, setUser] = useState(initUsers)
const [formValues, setFormValues] = useState(initFormData)
const [formErrors, setFormErrors] = useState(initFormErr)
const [disabled, setDisabled] = useState(initDisabled)

////Helpers////
const getUser = () => {
  axios.get("https://reqres.in/api/users")
    .then(res => {
      console.log(res.data)
      setFriends(res.data)
    })
    .catch(err => console.log(err))
}

const postNewUser = newUser => {
  axios.post("https://reqres.in/api/users", newUser)
    .then(res => {
      console.log(res.data)
      setFriends([...friends, res.data])
      setFormValues(initialFormValues)
    })
}

//// Event Handlers ////
export default App (){
  
}


//// Side Effects ////
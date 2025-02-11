import React,{ useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Box, Typography, useTheme, useMediaQuery, TextField, Button, Alert, Collapse} from '@mui/material'
import toast from 'react-hot-toast'
import axios from 'axios'

const Login = () => {
  const theme = useTheme()

  const navigate = useNavigate()

  //media
  const isNotMobile = useMediaQuery("(min-width: 1000px)")

  //states
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  //register
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      await axios.post('/api/v1/auth/login', {email,password})
      localStorage.setItem("authToken",true)
      toast.success("User Logged in succesfully")
      navigate('/')
      
    } catch (err) {
      console.log(error)
      if(err.response && err.response.data && err.response.data.error){
        setError(err.response.data.error)
      }
      else if(err.message){
        setError(err.message)
      }
      setTimeout(()=>{setError("")},5000)
    }
  }


  return (
    <Box width={isNotMobile ? '40%':'80%'} padding={'2rem'} margin={'2rem auto'} borderRadius={5} sx={{boxShadow:5}} backgroundColor={theme.palette.background.alt}>

      <Collapse in={error}>
        <Alert severity='error' sx={{mb:2}}>{error}</Alert>
      </Collapse>

      <form onSubmit={handleSubmit}>
       
       <Typography variant='h3'>
        Sign In
       </Typography>

       <TextField label='email' required margin='normal' fullWidth value={email} onChange={(e)=> {setEmail(e.target.value)}}/>
       <TextField label='password' type='password' required margin='normal' fullWidth value={password} onChange={(e)=> {setPassword(e.target.value)}}/>
       <Button type='submit' fullWidth variant='contained' size='large' sx={{color:'white', mt:2}}>Log In</Button>

        <Typography mt={2}>
          Don't have an account?<Link to="/register">Register here</Link>
        </Typography>
      </form>
    </Box>

  )
}

export default Login

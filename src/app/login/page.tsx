import { Box, TextField, Button, FormLabel } from '@mui/material'
import React, { use, useEffect, useState } from 'react'
import { useStyles } from './styles'

const Login = () => {
  const { root, textField, button } = useStyles
  const [username, grabUsername] = useState('')
  const [password, grabPassword] = useState('')

  useEffect(() => {
    console.log('username', username)
    console.log('password', password)
  }
  , [username,password])
    return (
    <Box component="form" style={root} >
    <FormLabel sx={{fontSize: '24px', textAlign: 'center'}}>Login</FormLabel>
    <TextField label="Username"  style={textField}/>
    <TextField label="Password" type="password" style={textField}/>
    <Button style={button}>Login</Button>
    </Box>
  )
}

export default Login
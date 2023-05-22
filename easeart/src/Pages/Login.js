import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, CardContent, Button, TextField } from '@mui/material';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import '../Global.css';


export default function Login() {
  return (
    <Box sx={{ flexGrow: 1 ,alignItems : 'center'}}>
      <Grid container  columns={12}  
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh' }}>
      <Grid item xs={8} md={3}>
      <Card>
        <CardContent>
          <div className='login-box'>
          <TextField
          label="User name"
          size="small"
        />
        <div className='divider'>

        </div>
         <TextField
          label="Password"
          size="small"
          type="password"
        />
        <div className='divider'>

        </div>
        <Button variant="contained" endIcon={<LockOpenRoundedIcon/>}>Login</Button>
          </div>
        </CardContent>
      </Card>
      </Grid>
      </Grid>
    </Box>
  )
}

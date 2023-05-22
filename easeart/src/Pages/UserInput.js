import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, CardContent, Button, TextField } from '@mui/material';
import DrawRoundedIcon from '@mui/icons-material/DrawRounded';
import '../Global.css';


export default function UserInput() {
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
          label="Title"
          size="small"
        />
        <div className='divider'>

        </div>
         <TextField
          label="Description"
          size="small"
          multiline
          rows={4}
          maxRows={10}
        />
        <div className='divider'>

        </div>
        <div className='button-box'>
        <Button variant="contained" endIcon={<DrawRoundedIcon/>}>Genrate</Button>
            
        </div>
          </div>
        </CardContent>
      </Card>
      </Grid>
      </Grid>
    </Box>
  )
}

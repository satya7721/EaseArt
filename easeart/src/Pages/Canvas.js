import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import '../Global.css'

import getData from '../Api/getData'
import { List,ListItem,ListItemText } from '@mui/material';


export default function Canvas() {
const [rows , setRows] = useState([]);

    useEffect(()=>{
        const res = getData();
        const data = res.data.split(/\r?\n/);
        setRows(data);
    },[])

  return (
    <div className='main-canvas'>
        <Grid container columns={12}
        alignItems="center"
        justifyContent="center"
        >
            <Grid item md={6} xs={8}>
                <List dense>
                {
                    rows.map((item,key)=>{
                        return <ListItem
                        sx={{
                            backgroundColor:"#B799FF",
                            margin : "10px",
                            borderRadius : '5px'
                        }}>
                        <ListItemText
                          primary={item}
                        />
                      </ListItem>
                    })
                }
                </List>
            </Grid>
        </Grid>
    </div>
  )
}

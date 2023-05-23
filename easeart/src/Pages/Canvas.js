import React, { useEffect, useState,useRef } from 'react'

import Grid from '@mui/material/Grid';
import '../Global.css'
import DraggableList from "react-draggable-list";

import getData from '../Api/getData'
import { Card, IconButton, List,ListItem,ListItemText,Button, Chip } from '@mui/material';
import NotInterestedRoundedIcon from '@mui/icons-material/NotInterestedRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import DragIndicatorRoundedIcon from '@mui/icons-material/DragIndicatorRounded';


const Item = ({ item, itemSelected, dragHandleProps }) => {
  const { onMouseDown, onTouchStart } = dragHandleProps;

  return (
    <div className="disable-select">

 
    <ListItem
                        sx={{
                            backgroundColor:"#FFFFFF",
                            margin : "10px",
                            borderRadius : '5px',
                            padding:'20px'
                        }}>
                        <ListItemText
                          primary={
                            <div>
                              <div className='card-text'>
                              {item.text}
                            </div>
                            <div className='card-box-tools disable-select dragHandle'>
                            <div>
                            <IconButton
                                    onTouchStart={(e) => {
                                      e.preventDefault();
                                      console.log("touchStart");
                                      e.target.style.backgroundColor = "blue";
                                      document.body.style.overflow = "hidden";
                                      onTouchStart(e);
                                    }}
                                    onMouseDown={(e) => {
                                      console.log("mouseDown");
                                      document.body.style.overflow = "hidden";
                                      onMouseDown(e);
                                    }}
                                    onTouchEnd={(e) => {
                                      e.target.style.backgroundColor = "black";
                                      document.body.style.overflow = "visible";
                                    }}
                                    onMouseUp={() => {
                                      document.body.style.overflow = "visible";
                                    }}
                            >
                                <DragIndicatorRoundedIcon color='grey'/>
                              </IconButton>
                            </div>
                              <div>
                              <IconButton>
                                <NotInterestedRoundedIcon color='grey'/>
                              </IconButton>
                              <IconButton>
                                <DeleteOutlineRoundedIcon color='grey'/>
                              </IconButton>
                              </div>
                            </div>
                            </div>
                          }
                        />
                      </ListItem>
                      </div>
  );
};

function WordCount(str) {
  var count = 0;
  for(var i=0;i<str.length;i++){
    count += str[i].text.split(' ')
    .filter(function(n) { return n != '' })
    .length;
  }
  return count;
}

export default function Canvas() {
const [rows , setRows] = useState([]);
const [noOFWords,setNoOfWords] = useState(0);
const containerRef = useRef();

const _onListChange = (newList) => {
  setRows(newList);
};
    useEffect(()=>{
        const res = getData();
        const data = res.data.split(/\r?\n/);
        const resData = data.map((elm,index)=>{
          return {
            text : elm,
            id : index
          }
        })
        setRows(resData);
        setNoOfWords(WordCount(resData))
    },[])

  return (
    <div className='main-canvas'>
      <div className='header-dash'></div>
      <div className='stats'>
        <div className='stats-each'>
          <div className='text'>
            No of Words
          </div>
          <div>
          <Chip label={noOFWords} />
          </div>
        </div>

        <div className='stats-each bgRed'>
          <div className='text'>
            No of Paragraphs
          </div>
          <div>
          <Chip label={rows.length} />
          </div>
        </div>

        <div className='stats-each title'>
          <div className='text'>
            Title :
          </div>
          <div>
          <Chip label="Python and its Advantages" />
          </div>
        </div>
        
      </div>
        <Grid container columns={10}
        alignItems="center"
        justifyContent="center"
        >
            <Grid item md={6} xs={5}>
                <List dense>
               
                <div
        ref={containerRef}
        style={{ touchAction: "pan-y", background: "beige" }}
      >
        <DraggableList
          itemKey="id"
          template={Item}
          list={rows}
          onMoveEnd={(newList) => _onListChange(newList)}
          container={() => containerRef ? containerRef.current : document.body }
        />
        {/* {list.map((item) => (
          <Item item={item} />
        ))} */}
      </div>

                </List>
            </Grid>
        </Grid>
        <div className='controls'>
        <Button variant="outlined" startIcon={<DeleteOutlineRoundedIcon />}>
        Genrate 
        </Button>
        </div>
    </div>
  )
}

import React, { useState,useEffect } from 'react'
import Detail from './detail.jsx';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import axios from 'axios';
import moment from "moment"



const Call = props => {
    const style = {
        green:{
          backgroundColor: '#4CAF50',/* Green */
          border: 'none',
          color: 'white',
          padding: '2px 2px',
          textAlign:'center',
          textDecoration: 'none',
          display: 'inlineBlock',
          fontSize: '15px',
          margin: '1px 1px',
          transitionDuration: '0.4s',
          cursor: 'pointer',
          borderRadius: '5px',
        },
        brown:{
          backgroundColor: '#8B4513',/* Green */
          border: 'none',
          color: 'white',
          padding: '2px 2px',
          textAlign:'center',
          textDecoration: 'none',
          display: 'inlineBlock',
          fontSize: '15px',
          margin: '1px 1px',
          transitionDuration: '0.4s',
          cursor: 'pointer',
          borderRadius: '5px',
      
        },

        round :{
          border: '2px solid grey',
          borderRadius: '12px',
          padding: '5px'
        },
        light_text:{
          opacity: 0.8
        }
        
      }

    
    const { single , handleshowlist} = props;
     
    // const handleDetail = (event) => {
    //     setshowDetail("visible");
    //     setshowList("hidden")
        
    //   };

    const handleArchive = (single)=>{
        const data = {
            "is_archived": true
          }
          console.log(single.created_at)
          axios.post(`https://aircall-job.herokuapp.com/activities/${single.single.id}`, data);

    }
    var time_converted = moment(single.created_at).fromNow()
    return (
        // check if the call is archived or did not clicked detail, 
        // if not then add to the activity list
     <div >
        {single.is_archived ? <h1></h1> :

           <div style={style.round}> <span>from: {single.from} </span>    <span style ={{float:"right"}}> {time_converted}</span>

         
                  <h1 style={style.light_text}>tried to call: {single.to} </h1>

                  <button style={style.green} onClick={()=>handleshowlist({single})} >detail</button>  

                <button style={style.brown}onClick={()=>handleArchive({single})} >Archive</button>  <br />
          

       <br/>


       </div>
            
            }

   
        </div>
    )
}



export default Call


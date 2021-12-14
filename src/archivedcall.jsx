import React, { useState,useEffect } from 'react'
import Detail from './detail.jsx';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import axios from 'axios';
import moment from "moment"

const ArchivedCall = (props) => {

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
        red:{
          backgroundColor: '#FF0000',/* Green */
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
        }
      }
    const { single , handleshowlist} = props;
     
    // const handleDetail = (event) => {
    //     setshowDetail("visible");
    //     setshowList("hidden")
        
    //   };


    const handleUnarchive = (single)=>{
        const data = {
            "is_archived": false
          }
  
          axios.post(`https://aircall-job.herokuapp.com/activities/${single.single.id}`, data);

    }
    var time_converted = moment(single.created_at).fromNow()
    return (
        // check if the call is archived or did not clicked detail, 
        // if not then add to the activity list
     <div >
        {single.is_archived ?  
        <div style={style.round}> <h1>from: {single.from}</h1> <span style ={{float:"right"}}>{time_converted}</span>
            <h1>tried to call: {single.to} </h1>

      <button style={style.green} onClick={()=>handleshowlist({single})} >detail</button>   
      <button style={style.red}onClick={()=>handleUnarchive({single})} >Unarchive</button>  <br/>


       </div> :
       <h1></h1>


            
            }

         

   
        </div>
    )
}


export default ArchivedCall

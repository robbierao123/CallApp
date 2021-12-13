import React, { useState,useEffect } from 'react'
import axios from 'axios';
import ArchivedCall  from './archivedcall.jsx'
import Detail from './detail.jsx'

const Archived = () => {
  

    const style ={
        backbutton:{
          backgroundColor: '#708090',
          border: 'none',
          color: 'white',
          padding: '16px 32px',
          textAlign:'center',
          textDecoration: 'none',
          display: 'inlineBlock',
          fontSize: '16px',
          margin: '4px 2px',
          transitionDuration: '0.4s',
          cursor: 'pointer',
            margin: "0",
            position:"absolute",
            top: "40%",
            left:"50%"
     
        }
    }
    const [call_list, setCall] = useState([]);

    const [showDetail, setshowDetail] = useState("hidden");

    const [showList, setshowList] = useState("visible")


    const [callDetail, setcallDetail] = useState({ });


    const handleBacktohome =()=>{
      setshowDetail('hidden');
      setshowList('visible');
     
    }

    const handleshowList = (single)=>{

      setshowList('hidden');
      setshowDetail('visible')
      setcallDetail(
          single.single
      );
    
    }


    useEffect(() => {
      axios.get('https://aircall-job.herokuapp.com/activities').then((res) =>{
            setCall((res.data))
            
        })    

       
      });
       
    return (
      <div>
        <div style= {{visibility:showList}}>
   
             {call_list.map((single, i) =>{
                 
                {/* return <li single={i}>{JSON.stringify(single)}</li> */}
                return <ArchivedCall key ={i}single={single} handleshowlist={handleshowList}/>
             })}
  
        </div>

        {showDetail == "visible"? <button  style ={style.backbutton} onClick = {()=>{handleBacktohome()}}>back</button> :<h1></h1>}

        {showDetail == "visible"?<Detail callDetail={callDetail}/>:<h1></h1>}


 
        </div>
    )
}
export default Archived

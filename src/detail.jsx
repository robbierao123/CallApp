import React from 'react'
import Table from 'react-bootstrap/Table'

const detail ={
    margin: "0",
    position: "absolute",
    top: "50%",
    right:"40%"
}

const Detail = props => {
     const { callDetail } = props;

 
    return (
        <div style={detail}>
            {/* <h2>time: {callDetail.created_at}</h2> 
            <h2>call type: {callDetail.direction} call</h2> 
            <h2>from: {callDetail.from} call</h2> 
            <h2>tried to call: {callDetail.to} call</h2> 
            <h2>air call number: {callDetail.via} call</h2> 
            <h2>call status: {callDetail.call_type} call</h2>  */}

 <Table striped bordered hover>
  
  <tbody>
    <tr>
      <th>time:</th>
      <td>{callDetail.created_at}</td>
 
    </tr>
    <tr>
      <th>call type:</th>
      <td>{callDetail.direction}</td>

    </tr>
    <tr>
      <th>from:</th>
      <td >{callDetail.from} call</td>

    </tr>
    <tr>
      <th>tried to call</th>
      <td >{callDetail.to} call</td>

    </tr>
    <tr>
      <th> call number:</th>
      <td >{callDetail.via} </td>

    </tr>
    <tr>
      <th>status:</th>
      <td > {callDetail.call_type}</td>

    </tr>
  </tbody>
</Table>

            

       
        </div>
    )
}

export default Detail

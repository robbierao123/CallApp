import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Activity_list from './activity_list.jsx';
import Archived from './archived.jsx';
import Detail from './detail.jsx';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import Button from 'react-bootstrap/Button';


const style = {
  green:{
    backgroundColor: '#4CAF50',/* Green */
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
    borderRadius: '5px',
  },
  blue:{
    backgroundColor: '#8B4513',/* Green */
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
    borderRadius: '5px',

  }
}

const App = () => {

  const handlelist = ()=>{

  }
  return (
    <Router>
    <div className='container'>
      <Header/>

      <Link to="/" onClick={handlelist}><button style={style.green}>Call List</button></Link>
      {/* <Link to="/archived"><span style={{marginLeft:'17rem'}}>archived</span></Link><br/> */}
      <Link to="/archived"><button style={style.blue}>Archived</button></Link><br/> <br/>


      <Route exact path="/"  > <Activity_list /> </Route>
      <Route exact path='/archived' component={Archived} />
      <Route exact path='/detail' component={Detail} />
   </div>
 
    </Router>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;

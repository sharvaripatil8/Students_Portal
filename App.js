//import logo from './logo.svg';
import './App.css';
import SearchTable2 from './filterTable2.js';
import Table1 from './table1.js'

import Navbar  from './navbar.js';
import Addstudent from './addstudent.js';
// import Addstudent1 from './Addstudent1.js';
import React, { useEffect, useState } from 'react';
import image from './image.jpeg'

function App() {
  const [newdata, setdata] = useState([]);
  const [count, setState] = useState(0);
  const [count1, setCount] = useState(0);


useEffect(() => {},[newdata.length]);

  const addStudent = () => {
    // debugger
    let newStudent = [...newdata];
    debugger;
    newStudent.push({'name':'sdc',
    'phoneNumber':'8383838388',
    'address':'skdjcskjvhdvh'});
    setdata(newStudent);
    setState(count+1);
  }
  const addStudent1=()=>{
    setCount(count1+1);
  }


  return (
    // <div className="App">
    //  <SearchTable2/>
    // </div>

<div className="abc" >

<Navbar/>
<h1></h1>
<div style={{overflowY:'auto',height:'100vh' }}> 
  {/* <div style={{height:'100vh' }}> */}
<button class="btn btn-primary" style={{ marginLeft: "38%", marginTop: "50px" }} type="button" onClick={addStudent}>Add Student </button>
{/* { count%2===0 &&
 <button class="btn btn-primary" style={{ marginLeft: "53%", marginTop:"-67px",paddingTop: "5px"}} type="button" onClick={addStudent1}>Show Student </button>
   } */}
   
{count%2===1 && <Addstudent count={count1}  userAdded={(num)=>{debugger;setCount(num)}}/>}
{/* {count1%2===1 && <SearchTable2/> }  */}
{ count%2===0 && <SearchTable2  count={count1} userAdded={(num)=>{debugger;setCount(num)}}/> }
{/* <Table/> */}
{/* {count%2===0 && <Addstudent1/>} */}
{/* </div> */}
</div> 

</div>




  );
}

export default App;
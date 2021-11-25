import React,{useState} from 'react';
import './App.css';
import Table from './table.js';
import axios from 'axios'

// import React, {useState} from 'react';
function Addstudent(props){
  const [user,setuser]=useState({
    name:"",
    address:"",
    phoneNo:"",
    course:"MSCIT",
    fee:"",
    paid:"",
    remaining:"",
  });
 /* const [user1,setnewdata]=useState({
    name:"",
    address:"",
    phoneNo:"",
    course:"",
    fee:"",
    paid:"",
    remaining:"",
  })*/
  let name,value,value1,value2,value3=0;
  const getDataUser=(event)=>{
    name=event.target.name;
    value=event.target.value;
    if(name=="fee")
    {
      value1=parseInt(value,10);
      //alert(value1);
    }

    if(name=="paid")
    {
      value2=isNaN(parseInt(value,10))?0:parseInt(value,10);
      //alert(value2);
      //alert(value);
      //debugger
      value3=parseInt(user.fee)-value2;
      setuser({...user,remaining:value3,[name]:value})
    }
    else{
      setuser({...user,[name]:value})
    }
  }

  const postData=async(e)=>{
   e.preventDefault();
   const { name,address,phoneNo,course,fee,paid,remaining }=user;
   if(user.address=="" || user.name=="" || user.phoneNo=="" || user.fee==""){
     alert("fill data");
   }
  else{
   //const { name,address,phoneNo,course,fee,paid,remaining }=user;
   const num1=0;
   const res=axios
    .post(`https://mscit-app-default-rtdb.firebaseio.com/mscitappdata/.json`, {

      name:name,
    address:address,
    phoneNo:phoneNo,
    course:course,
    fee:fee,
    paid:paid,
    remaining:remaining,
    });

   /*const res=await fetch(`https://mscit-app-default-rtdb.firebaseio.com/mscitappdata${num}.json`,
   {
    method:"POST",
    headers:{
    "Content-Type":"Application/json" ,
  },
  body:JSON.stringify({
   name,
    // name:name,
    address:address,
    phoneNo:phoneNo,
    course:course,
    fee:fee,
    paid:paid,
    remaining:remaining}),
   }
   );*/
   //setnewdata(user);
   if(res){
    
     setuser({
      name:"",
      address:"",
      phoneNo:"",
      course:"MSCIT",
      fee:"",
      paid:"",
      remaining:"",
     })
   };

    alert("data Successfully filled.");
    //debugger
    let c = props.count + 1;
    props.userAdded(c);
  }
  };
  return(
        <div style={{margin:"100px 0"}}>
 <div class="card def" >
  <div class="card-header" style={{backgroundColor:"#bc5100"}}><h5 style={{marginLeft:"25%"}}>Fill Student Information</h5></div>
  <div class="card-body"style={{backgroundColor:"#ffb04c"}}>
    {/* <h5 class="card-title">Special title treatment</h5> */}
    
         <form class="form" method="POST">
           <div class="row">
             <div class="col-lg-5" style={{margin:"auto"}}>
                <label>Name:</label><br/>
             </div>
             <div class="col-lg-7">
                <input  
                name="name"
                style={{borderColor:"#bc5100",margin:"auto"}} 
                type="text" 
                placeholder="Enter Name." 
                 value={user.name}
                required
                onChange={getDataUser} 
                /><br/>
             </div>
            </div>

            <div class="row">
              <div class="col-lg-5">
                <label style={{marginTop:"7px"}}>Address:</label><br/>
              </div>
              <div class="col-lg-7">
                <input style={{marginTop:"2px", borderColor:"#bc5100"}} 
                name="address"
                type="textarea" 
                required
                onChange={getDataUser}
                 value={user.address}
                ></input><br/>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-5">
                <label style={{marginTop:"7px"}}>Phone Number</label><br/>
               </div>
              <div class="col-lg-7">
               <input 
               style={{marginTop:"2px", borderColor:"#bc5100"}}
               type="text" 
               size="10" 
               maxlength="10"
               required
               name="phoneNo"
               onChange={getDataUser}
               value={user.phoneNo}
               
               /><br/>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-5">
                <label style={{marginTop:"7px"}}>Coueses:</label><br/>
              </div>
              <div class="col-lg-7">
               <select 
               style={{marginTop:"2px",borderColor:"#bc5100"}} 
               name="course" 
               id="course"
               required
               //name="course"
               onChange={getDataUser}
              //  value={user.course}
               >
                   <option value="MSCIT">MSCIT</option>
                   <option value="Tripal-M">Tripal-M</option>
                   <option value="Typing">typing</option>
                     {/* <option value="audi">Audi</option> */}
                </select><br/>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-5">
               <label style={{marginTop:"7px"}}>Fee:</label><br/>
              </div>
              <div class="col-lg-7">
               <input 
               style={{marginTop:"2px",borderColor:"#bc5100"}} 
               type="Text"
               required
               name="fee"
               onChange={getDataUser}
               value={user.fee}
               /><br/>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-5">
               <label style={{marginTop:"7px"}}>Paid:</label><br/>
              </div>
              <div class="col-lg-7">
               <input
                style={{marginTop:"2px",borderColor:"#bc5100"}}
                 type="text"
                 required
                 name="paid"
                 onChange={getDataUser}
                  value={user.paid}
               /><br/>
              </div>
            </div>
             
            <div class="row">
              <div class="col-lg-5">
               <label style={{marginTop:"7px"}}>Reamaining:</label><br/>
              </div>
              <div class="col-lg-7">
               <input
                style={{marginTop:"2px",borderColor:"#bc5100"}}
                type="text"
                required
                name="remaining"
                //onChange={getDataUser}
                 value={user.remaining}
                /><br/>
              </div>
            </div><br/>
            <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
           <button 
            style={{backgroundColor:"#bc5100",borderColor:"#bc5100"}}
            onClick={postData}
           >
              Submit
            </button></div>
          </form>
      </div>
    </div>

    </div>
    );
}
export default Addstudent;

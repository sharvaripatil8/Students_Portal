import Studentinfo from './studentinfo'
import { useState,useEffect } from 'react';
import axios from 'axios';

var arr1=[];

 
// import react from 'react'
export default function SearchTable2(props) {
    const[searchTerm, setsearchTerm]=useState("");
    const [users,setuser]=useState([]);
    const[show,setshow]=useState(-1);
    const[name,setName] = useState('');
   
    useEffect(()=>{
        
        setTimeout(() => {
            axios.get(`https://mscit-app-default-rtdb.firebaseio.com/mscitappdata.json`)
            .then((res)=>{
                debugger;
                let arr =[];
                arr1=res.data;
                for(let i in res.data){
                    console.log(res.data[i]);
                    arr.push(res.data[i])
                    
                    console.log(res.data);
                }
              
                debugger
                setuser(arr);
                
                
            })  
        }, 400);
        
    },[props.count])
    
    const deleterow=(index)=>{
    //alert(index);
    debugger
    var add=0;
    var str;
    for(let i in arr1)
    {
        if(add===index)
        {
            str=i;
            //alert(str);
        }
       
      // setcount(add++);
        add++;
    }
    
   // deleteRow(id, e){  
        axios.delete(`https://mscit-app-default-rtdb.firebaseio.com/mscitappdata/${str}.json`)  
          .then(res => {  
            console.log(res);  
            console.log(res.data);  
        let c = props.count - 1;
        props.userAdded(c);

           // const posts = this.state.posts.filter(item => item.id !== id);  
            //this.setState({ posts });  
          })  
        
     // }   
        
      }  
    
    return ( 
        <div className="container">
            <input type="text" 
            placeholder="Search.." 
            className="form-control" 
            style={{marginTop:50, marginBottom:20, width:"40%",borderColor:"blue"}}
            onChange={(e)=>{
                setsearchTerm(e.target.value);
            }}
            />
          <table className="table table-bordered" style={{borderColor:"#a83254"}}>
              <thead style={{backgroundColor:"#bc5100",color:"white",borderColor:"#a83254"}}>
                  <tr>
                      <th>Name</th>
                      
                       {/* <th>Address</th>
                      <th>Phone No</th>
                      <th>Course</th>
                      <th>Fee</th>
                      <th>Paid</th>
                      <th>Remaining</th> */}
                      
                      <th>Delete Data</th> 
                     
                     {/* <th>Gender</th> */}
                  </tr>
              </thead>
              <tbody style={{borderColor:"#a83254"}}>
                   {users.filter((val)=>{
                      if(searchTerm===""){
                          return val;
                      }
                      else if(
                          val.name.toLowerCase().includes(searchTerm.toLowerCase()) 
                        //   val.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        //   val.phoneNo.toLowerCase().includes(searchTerm.toLowerCase())

                      ){
                          return val;
                      }
                  }) 
                  .map((m,index)=>(
                      <tr key={m.id}>
                          <td><button onClick={()=>setshow(index)} className="data" style={{width:'100%'}}>{m.name}</button></td>
                          <td><button onClick={()=>deleterow(index)} className="data" > Delet</button></td>
                          {/* <td>{m.name}</td>
                          <td>{m.address}</td>
                          <td>{m.phoneNo}</td>
                          <td>{m.course}</td>
                          <td>{m.fee}</td>
                          <td>{m.paid}</td>
                          <td>{m.remaining}</td> */}

                          
                          {/* <td>{m.gender}</td> */}
                      </tr>
                  ))}
              </tbody>
          </table>
          {show>=0 && <Studentinfo users={users[show]} getinfo={(num1)=>{setshow(num1)}}/>}
          {/* <table>
              <thead>
                  <tr>
                      <th>
                          Name
                      </th>
                      <th>Delet Data</th>https://console.firebase.google.com/u/0/project/mscit-app/database/mscit-app-default-rtdb/data/mscitappdata/-MoS66vQAiSI9EV8Wf2E
                  </tr>
              </thead>
              <tbody>
             {users.map((m,index)=>(
               <tr >
                   <td><button onClick={()=>setshow(index)}>{m.name}</button></td>
                   <td><button onClick={()=>deleterow(index)}> Delet</button></td>
               </tr>
              ))}
              </tbody>
          </table> */}
          
        </div>
     );
}

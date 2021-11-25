import React, { useEffect,useState } from "react";
import './App.css'
import axios from 'axios'

function Studentinfo(props) {
    let d = -1;
    useEffect(() => {
        let accc = props.users;
        debugger
    }, [])

    const [user2,setdata1]=useState({
        name:props.users.name,
        address:props.users.address,
        phoneNo:props.users.phoneNo,
        course:props.users.course,
        fee:props.users.fee,
        paid:props.users.paid,
        remaining:props.users.remaining,
      });
       var name1,value1,value2,value;
      const getdata=(event)=>{
        name1=event.target.name;
        value1=event.target.value;
        setdata1({...user2,[name1]:value1})
     }
     const updateData1=async()=>{
        const { name,address,phoneNo,course,fee,paid,remaining}=user2;
        // const num1=0;
        debugger
    //  axios.put('https://mscit-app-default-rtdb.firebaseio.com/mscitappdata/-MpKdsiVXVdznkHinRIE.json', {...user2})
    //  .then((res)=>{
    //      alert(res)
    //  });


       let res= axios.put(`https://mscit-app-default-rtdb.firebaseio.com/mscitappdata/-MpKm9l69rAqYQcsseeA.json`, 
         {
         name,
         address:address,
         phoneNo,
         course,
         fee,
         paid,
         remaining,
         }
         );
     
     }
    return (

        <div className="modalbg">
            <div className="modalcontainer">

                <div class="closebutton">
                    <button onClick={() => { props.getinfo(-1) }} >X</button>
                </div>
                <div className="body">
                     {/* Address:{props.users.address}<br/>
                    Phone Number:{props.users.phoneNo}<br/>
                    course:{props.users.course}<br/>
                    fee:{props.users.fee}<br/>
                    paid:{props.users.paid}<br/>
                    remaining:{props.users.remaining}  */}
                     <form>
                         <lable>name: </lable>
                         <input
                         name="name"
                         value={user2.name}
                         className="data"
                         />
                        <label>Address:</label>
                        <input type="text"
                              name="address"
                              value={user2.address}
                              onChange={getdata}
                              className="data"
                        ></input><br/>
                        <label>Phone Number:</label>
                        <input type="text"
                               name="phoneNo"
                               value={user2.phoneNo}
                               onChange={getdata}
                               className="data"
                        ></input><br/>
                        <label>course:</label>
                        <input type="text"
                               name="course"
                               value={user2.course}
                               onChange={getdata}
                               className="data"
                        ></input><br/>
                        <label>fee:</label>
                        <input type="text"
                               name="fee"
                               value={user2.fee}
                               onChange={getdata}
                               className="data"
                        ></input><br/>
                        <label>Paid:</label>
                        <input type="text"
                               name="paid"
                               value={user2.paid}
                               onChange={getdata}
                               className="data"
                        ></input><br/>
                        <label>Remaining:</label>
                        {user2.remaining}
                        <div onClick={()=>{updateData1()}}>Update</div> 
                    </form> 
                </div>
            </div>
        </div>
    );
}
export default Studentinfo;
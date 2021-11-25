import './App.css'
import React from 'react';

function Navbar(){
    return(
              <div  >
 <nav class="navbar navbar-expand-sm navbar-dark " style={{width: '100%',backgroundColor:"#bc5100"}} >
  <div class="container-fluid">
    <a className="navbar-brand" href="javascript">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a className="nav-link" href="javascript">About Us</a>
        </li>
        
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Search" />
        <button class="btn btn-primary" type="button">Search</button>
         <button class="btn btn-danger" type="button" style={{marginLeft:"8px",width:"40%"}}>Log Out</button>
      </form>
    </div>
  </div>
</nav>
</div>
    );
}
export default Navbar;

import React, { useState } from 'react';

function Users(props) {

    // const[user , setUser]=useState(null)
    // const[print , setPrint]=useState(false)
    // const getUser = (evt) =>{
    //     evt.preventDefault()
    //     setUser(evt.target.value)
    //     setPrint(false)
    // }
    
    
    return (

        

        <div>

            {/* <input type="text"  onChange={getUser}></input>
            <button onClick={()=>{setPrint(true)}}>+ Add User</button> */}

        <ul>


           {/* <li><a href = '/four'><h1>{print?{user}: null }</h1></a></li>  */}
           <li> <a id='one' href='/one'>John Smith</a> </li>

          <li>  <a id='two' href='/two'>John Smith</a> </li>

          <li>  <a id='three' href='/three'>John Smith</a> </li>

        </ul>
        </div>
    );
}

export default Users;
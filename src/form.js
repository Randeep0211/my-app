import React, {useState} from 'react';

function Form(props) {


    const [user,setUser] = useState({
        Name : "",
        email : "",
        address : "",
      })
    
    
    
      let name,value;
      const getUserData = (event)=>{
    
        name = event.target.name;
        value = event.target.value;
    
        setUser({...user , [name]: value})
    
    
      }
    
      const postData = async (evt)=>{
        evt.preventDefault();
    
        const {Name,email,address}= user;
    
        if(Name && email && address){
    
          const res = await fetch('https://my-app-c49bb-default-rtdb.firebaseio.com/UserData.json' ,{
            method:"POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              Name ,
              email ,
              address ,
            }),
              }
              
            
          )
      
          if(res){
            setUser({
          Name : "",
          email : "",
          address : "",
            })
            alert(`data recieved`)
          }
        }
        else{
          alert("please fill all the data")
        }
    
        
      }






    return (
        <div>
            <form method="POST" path="/">
                <div>
                    <label for="name">Name:</label>
                    <input type="text" name="Name"  value={user.Name} onChange={getUserData}></input>
                   
                </div>

                <div>
                    <label for="email">Email:</label>
                    <input type="text" name="email" value={user.email} onChange={getUserData}></input>
                </div>

                <div>
                    <label for="city">City:</label>
                    <input type="text" name="address" value={user.address} onChange={getUserData}></input>
                </div>
                <button onClick={postData}>Save</button>
            </form>
        </div>
    );
}

export default Form;
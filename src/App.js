import React from 'react'
import './App.css';
import Users from './user';
import Form from './form'
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
     <>

<Users></Users>


<Routes>

<Route path="/one" element={<Form></Form>}

>
    
</Route>

<Route path="/two" element={<Form></Form>}

>
    
</Route>

<Route path="/three" element={<Form></Form>}

>
    
</Route>

</Routes>




     </>
  );
}

export default App;

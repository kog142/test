import React from 'react';
import Body from './Body';
import SignIn from './SignIn';
import { Routes, Route } from 'react-router-dom';
import Feed from './UserFeed';
import SideBar from './SideBar';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SideBar/>}/>
        <Route path='/SideBar' element={<SideBar/>}/>
        <Route path='/Body' element={<Body/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
    Home,
    Login,
    About,
    Posting
} from '../pages';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/login' exact element={<Login />}/>
        <Route path='/about' exact element={<About />}/>
        <Route path='/posting' exact element={<Posting />}/>
    </Routes>
  )
}

export default Routers;
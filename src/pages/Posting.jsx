import React, { useEffect } from 'react';
import Card from '../components/card';
import FormInput from '../components/form-input';
import Navbar from '../components/navbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, changeStatus } from '../store/action';
import { useNavigate } from 'react-router-dom';
import './css/posting/main.css';
import './css/posting/util.css';

const Posting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const oldData = useSelector(state => state.data);
  const dataFilter = oldData && oldData.length > 0 ? oldData.filter(e => e.status === 0) : null;

  const handleCheklist = (id) => {
    console.log(id);
    let data1 = oldData.filter((a)=> a.id !== id);
    let data2 = oldData.find((a)=> a.id === id);
    data2.status = 1;
    let payload = [
      ...data1,
      data2
    ];
    dispatch(changeStatus(payload));
  };

  useEffect(() => {
    if(!localStorage.token) {
      navigate('/login')
    }
    dispatch(fetchData(oldData))
    localStorage.setItem('data', JSON.stringify(oldData))
  }, [dispatch, navigate, oldData])

  return (
    <>
    <div className='w-100' style={{ minHeight: '100vh', backgroundColor: '#f9ede0' }}>
      <Navbar />
      <FormInput />
      <hr className='hr' />
      <Card data={dataFilter} checkbox={true} onChange={(e)=>handleCheklist(e)} />
    </div>
  </>
  )
}

export default Posting
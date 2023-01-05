import React, { useEffect, useState } from 'react';
// import Search from '../components/button-search';
import Card from '../components/card';
import Navbar from '../components/navbar';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../store/action';
import { useNavigate } from 'react-router-dom';
import './css/home/main.css';

const Home = () => {
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataFilter = data && data.length > 0 ? data.filter(e => e.status === 1) : null;
  const [search, setSearch] = useState([]);

  const handleSearch = (e) => {
    let tmp = e.target.value;
    setSearch(dataFilter.filter((e) => e.title === tmp))
  };

  useEffect(()=> {
    if(!localStorage.token) {
      navigate('/login')
    }
    // console.log(JSON.parse(localStorage.data), `<<< data`);
   dispatch(fetchData(data)) 
  }, [data, dispatch, navigate]);
  
  return (
    <>
      <div className='w-100' style={{ minHeigth: '100vh', backgroundColor: '#f9ede0' }}>
        <Navbar />
        {/* <Search onChange={handleSearch} /> */}
        <div className="input-group mt-2 justify-content-center">
          <div className="form-outline w-75 mb-3" style={{ marginTop: '100px' }}>
              <input 
                className="form-control" 
                list="datalistOptions" 
                id="exampleDataList" 
                placeholder="Search by title..."
                onChange={handleSearch}
              />
          </div>
        </div>
        <hr className='hr' />
        <h1 className='d-flex justify-content-center title'>Your Active List Card</h1>
        <Card data={search.length > 0 ? search : dataFilter} />
      </div>
    </>
  )
}

export default Home;
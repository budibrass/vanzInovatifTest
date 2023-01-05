import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../store/action';
import image from './assets/form.svg';

const FormInput = () => {
  const dispatch = useDispatch();
  const dataOld = useSelector(state => state.data);
  const [data, setData] = useState({ title: '', content: '', status: 0});

  const handleSubmitData = (e) => {
    e.preventDefault();
    let payload = {
      ...data,
      id: dataOld.length + 1
    }
    dispatch(addData(payload));
  };

  const handleChange = (e) => {
    if(e.target.name === "title") {
      setData({
        ...data,
        title: e.target.value
      })
    }
    if(e.target.name === "content") {
      setData({
        ...data,
        content: e.target.value
      })
    }
  };

  return (
    <div className="contact1">
      <div className="contact1-pic js-tilt" data-tilt>
        <img src={image} alt="IMG" />
      </div>
      <div className="container-contact1">
        <form onSubmit={handleSubmitData} className="contact1-form validate-form">
          <span className="contact1-form-title">
            Input Your Posting
          </span>

          <div className="wrap-input1 validate-input" data-validate = "Title is required">
            <input 
              className="input1" 
              type="text" 
              name="title" 
              placeholder="Title" 
              onChange={handleChange}
              required
            />
            <span className="shadow-input1"></span>
          </div>

          <div className="wrap-input1 validate-input" data-validate = "Content is required">
            <textarea 
              className="input1" 
              name="content" 
              placeholder="Content"
              onChange={handleChange}
              required
            />
            <span className="shadow-input1"></span>
          </div>

          <div className="container-contact1-form-btn">
            <button className="contact1-form-btn">
              <span>
                Submit
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormInput;
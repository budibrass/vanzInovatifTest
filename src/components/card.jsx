import React from 'react';

const Card = ({ data, checkbox, onChange }) => {
  return (
    <div className="row mt-4 ms-5 mx-5" style={{ marginLeft: '2px', marginRight: '2px' }}>
        {data && data.length > 0
        ? 
        data.map((e, idx) => {
            return (
                <div key={idx} className="col-4 mb-3">
                    <div className="card shadow mt-3" style={{ height: '180px' }}>
                            <div className="card-body">
                                <h5 className="card-title">{e.title}</h5>
                                <p className="card-text">{e.content}</p>
                                {checkbox
                                ?
                                <div className='mt-3'>
                                    <input 
                                        onChange={()=>onChange(e.id)} 
                                        // className="form-check-input" 
                                        type="checkbox" value="" 
                                        id="flexCheckDefault" 
                                        style={{ marginRight: '2px' }} 
                                        checked={e.status === 0 ? false : true}
                                    />
                                    <label className="">
                                        Posting
                                    </label>
                                </div>
                                : null}
                                {/* <div className='d-flex justify-content-between mt-3'>
                                    <button type="button" className="btn btn-warning w-50 mx-1">Edit</button>
                                    <button type="button" className="btn btn-danger w-50 ms-1">Delete</button>
                                </div> */}
                        </div>
                    </div>
                </div>
            )
        })
        : null}
    </div>
  )
}

export default Card;
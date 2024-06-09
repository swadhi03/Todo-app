import React, { useState } from 'react'
import Navbar from './Navbar'

const AddTodo = () => {
    const [data, changeData] = useState(
        {
            "userID": "",
            "id": "",
            "title": ""
        }
    )
    const inputHandler=(event)=>{
        changeData({...data, [event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }

    return (
        <div>
            
            <div className="container">
                <Navbar/>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xxl-6">
                                <label htmlFor="" className="form-label">User ID</label>
                                <input type="text" className="form-control" name='userID' value={data.userID} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xxl-6">
                                <label htmlFor="" className="form-label">ID</label>
                                <input type="text" className="form-control" name='id' value={data.id} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Title</label>
                                <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTodo
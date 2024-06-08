import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [todos, changeTodos] = useState([])
    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
            (response)=>{
                changeTodos(response.data)
            }
        ).catch().finally()
    }
     useEffect(()=>{fetchData()},[])    
    
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">index</th>
                                                    <th scope="col">UserId</th>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Title</th>
                                                    <th scope="col">Completed</th>
        
                                                </tr>
                                            </thead>
                                            <tbody>
                            
                                {
                                    todos.map(
                                        (value,index)=>{
                                            return <tr>
                                                <th scope="row">{index+1}</th>
                                                <td>{value.userId}</td>
                                                <td>{value.id}</td>
                                                <td>{value.title}</td>
                                                <td>{value.completed}</td>
                                            </tr>
                                        
                                        }
                                    )
                                }
                                    
                            </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll
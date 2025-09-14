import React, { useEffect, useState } from "react";
import "./Table.css"; // 👈 styling file
import { deletePost, getAllPosts } from "../api/Postapi";
import { useLocation } from "react-router-dom";
import Update from "./Update";
import { Link } from "react-router-dom";
const Read = () => {
  const [darkMode, setDarkMode] = useState(false);
  const[users, setUsers] = useState([])
  const [editdata, setEditData] = useState({
    name:"",
    email:""
})



  const handleEdit = (u) =>{
    setEditData(u);

  }
  

  const delData = async (id) =>{
    try {
      const del = await deletePost(id);
      setUsers(users.filter((u) => u.id !== id))
     

      
    } catch (error) {
      console.log(error)
      
    }
       
  }
 
   const showdata = async () => {
   const res = await getAllPosts()
   setUsers(res.data);
   }
   const location = useLocation();


  useEffect(() =>{
    showdata();
  }, [location.state?.refresh])

  return (
    <div className={darkMode ? "container dark" : "container"}>
      {/* Header with Toggle + Create */}
      <div className="header">
        <h2>Read Operation</h2>
        <div>
          <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "🌙 Dark" : "☀️ Light"}
          </button>
          <Link to='/' >
          <button className="create-btn">Create</button></Link>
        </div>
      </div>

      {/* Table */}
      <table className="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, index) => (
            <tr key={u.id}>
              <td>{index + 1}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
               <Link to={`/update/${u.id}`}  state={{ user: u }}>
                <button className="edit-btn" onClick={() =>{handleEdit(u)}} >Edit</button></Link>
                <button className="delete-btn" onClick={() =>{delData(u.id)}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Read;

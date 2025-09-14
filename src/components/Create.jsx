import React, { useState } from "react";
import { addNewPost } from "../api/Postapi";
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {

  const [createformData, setCreateFormData] = useState({
    name: "",
    email: ""
  });

  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  const handleNewPost =  async (formData) =>{
   let res= await addNewPost(formData);
   console.log("API Response:", res.data);
   
  }

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
    console.log("Form Data Submitted:", createformData);
    handleNewPost(createformData);
    // form reset after submit
    setCreateFormData({ name: "", email: "" });
      
    } catch (error) {
      console.log(error)
      
    }
    history('/read',{ state: { refresh: true } })
    
  };

  return (
    <div style={{ maxWidth: "600px", margin: "30px auto", padding: "20px" }}>
      {/* Header with Show Data button */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <h2>Create</h2>
        <Link to='/read'>
        <button
          style={{
            backgroundColor: "#0d6efd",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "6px 12px",
            cursor: "pointer"
          }}
        >
          Show Data
        </button>
        </Link>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Name</label>
          <input
            type="text"
            name="name"
            value={createformData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px"
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Email address</label>
          <input
            type="email"
            name="email"
            value={createformData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px"
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#0d6efd",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "8px 16px",
            cursor: "pointer"
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;

import React, { useState } from 'react'
import Read from './Read';
import {  Link, useLocation } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';
import { updatePost } from '../api/Postapi';

const Update = () => {

    const location = useLocation();
    const navigate = useNavigate();
      const user = location.state?.user;  // yahan se data aayega

    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || ""
      });
    
 

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value
        }));
      };

      const handleSubmit = async (e) => {
       
        e.preventDefault();
        try {
          // ✅ PUT request bhejo
          await updatePost(user.id, formData);
    
          console.log("Updated Successfully:", formData);
    
          // ✅ redirect back to /read after update
          navigate("/read");
        } catch (error) {
          console.error("Update Error:", error);
        }
      };
   
      
   
    return (
        <div style={{ maxWidth: "600px", margin: "30px auto", padding: "20px" }}>
          {/* Header with Show Data button */}
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
            <h2>Update</h2>
            
          </div>
    
          {/* Form */}
          <form  onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
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
                value={formData.email}
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
              Update
            </button>
            <Link to='/read'>
            <button
              
              style={{
                backgroundColor: "gray",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                padding: "8px 16px",
                cursor: "pointer",
                marginLeft:"5px"
              }}
            >
              Back
            </button></Link>
          </form>
        </div>
      );
}

export default Update



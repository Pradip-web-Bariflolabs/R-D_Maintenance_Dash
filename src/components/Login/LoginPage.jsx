import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function LoginPage() {
  // State to store form data
  const [loginData, setLoginData] = useState({
    identifier: "", // This should be 'username' if you're using 'username' in the input field
    password: "",
  });

  // Update state when input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  // Handle form submission
  const submitLoginData = async (event) => {
    event.preventDefault(); // Prevent form from reloading the page

    try {
      const response = await axios.post(
        `http://192.168.1.30:8002/login/`,
        loginData
      ); // Added 'http://' to URL

      // Log response for debugging purposes
      console.log(response);

      // Reset the form fields after successful submission
      setLoginData({
        identifier: "",
        password: "",
      });

      // You can add any additional actions here, like showing a success message
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div>
        {/* Center the image and make it circular */}
        <div className="d-flex justify-content-center">
          <img
            src="/images/Bfl.png"
            alt="Barflo"
            className=" "
            style={{
              width: "90px",
              height: "110px",
              objectFit: "cover",
            }}
          />
        </div>

        <div
          className="card p-5 shadow border border-dark"
          style={{
            width: "400px",
            minHeight: "480px",
            borderRadius: "15px",
            marginTop: "60px", // Adjust margin to position the card
          }}
        >
          <h3 className="text-center mb-4">Login</h3>
          <form onSubmit={submitLoginData}>
            <div className="form-group mb-4">
              <label htmlFor="identifier" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="identifier" // This should match the state key 'identifier'
                placeholder="Enter your username"
                value={loginData.identifier} // Set the input value
                onChange={handleChange} // Update state on change
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                name="password" // This should match the state key 'password'
                placeholder="Enter your password"
                value={loginData.password} // Set the input value
                onChange={handleChange} // Update state on change
              />
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary btn-lg px-5 mt-5"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

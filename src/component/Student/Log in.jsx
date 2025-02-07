import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBTypography,
  MDBIcon
} from "mdb-react-ui-kit";

 function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const gotoprofile=()=>navigate ("/profile");

  const handleLogin = async () => {
    try {
      const response = await fetch("/students.json");
      const students = await response.json();

      const student = students.find((s) => s.email === email && s.password === password);

      if (student) {
        navigate("/profile", { state: { student } });
      } else {
        navigate("/profile", { state: { student } });
      }
    } catch {
      setError("Error loading student data");
    }
  };

  return (
    <MDBContainer className="d-flex justify-content-center align-items-center vh-100">
      <MDBCard style={{ maxWidth: "400px", padding: "20px" }}>
        <MDBCardBody>
          <div className="text-center mb-4">
            <MDBIcon fas icon="user-circle" size="3x" />
            <MDBTypography tag="h4" className="mt-2">Login</MDBTypography>
          </div>

          <MDBInput type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-3" />
          <MDBInput type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-3" />

          {error && <p className="text-danger">{error}</p>}

          <MDBBtn color="primary" block onClick={handleLogin}>Login</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );

}
export default Login;

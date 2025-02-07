import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
  MDBBtn
} from "mdb-react-ui-kit";
import "./Profile.css";

export default function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const studentData = location.state?.student;

  

  const [profileImage, setProfileImage] = useState(studentData.image);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <MDBContainer className="py-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="8">
          <MDBCard className="p-3">
            <div className="text-center">
              { <MDBCardImage
                src={profileImage}
                alt="Profile"
                className="rounded-circle"
                style={{ width: "120px", height: "120px", cursor: "pointer" }}
                onClick={() => document.getElementById("imageUpload").click()}
              /> }
              { <input type="file" id="imageUpload" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} /> }
              <MDBTypography tag="h4" className="mt-3">{studentData.name}</MDBTypography> */
            </div> 
            <MDBCardBody>
              <MDBTypography tag="h6">Personal Information</MDBTypography>
              <hr />
              <MDBCardText><MDBIcon fas icon="envelope" className="me-2" /> {studentData.email}</MDBCardText>
              <MDBCardText><MDBIcon fas icon="phone" className="me-2" /> {studentData.phone}</MDBCardText>
              <MDBCardText><MDBIcon fas icon="birthday-cake" className="me-2" /> {studentData.age}</MDBCardText>
              <MDBCardText><MDBIcon fas icon="map-marker-alt" className="me-2" /> {studentData.address}</MDBCardText>
            </MDBCardBody>
            <MDBBtn color="danger" onClick={() => navigate("/")}>Logout</MDBBtn>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
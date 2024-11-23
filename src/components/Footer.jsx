import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter className="bg-dark text-center text-white footer">
      <MDBContainer
        className="d-flex align-items-center justify-content-center flex-wrap"
        style={{ gap: "12px", padding: "8px" }}
      >
        <MDBBtn outline color="light" floating href="#!" role="button">
          <MDBIcon fab icon="facebook-f" />
        </MDBBtn>

        <MDBBtn outline color="light" floating href="#!" role="button">
          <MDBIcon fab icon="twitter" />
        </MDBBtn>

        <MDBBtn outline color="light" floating href="#!" role="button">
          <MDBIcon fab icon="linkedin-in" />
        </MDBBtn>

        <MDBBtn outline color="light" floating href="#!" role="button">
          <MDBIcon fab icon="instagram" />
        </MDBBtn>
        <MDBBtn outline color="light" floating href="#!" role="button">
          <MDBIcon fab icon="github" />
        </MDBBtn>
        <MDBBtn outline color="light" floating href="#!" role="button">
          <MDBIcon fab icon="google" />
        </MDBBtn>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a
          className="text-white"
          href="https://www.linkedin.com/in/juan-ignacio-godoy-grando-87bb43322/"
        >
          Juan Ignacio Godoy Grando
        </a>
      </div>
    </MDBFooter>
  );
}

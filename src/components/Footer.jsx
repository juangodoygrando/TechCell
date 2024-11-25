import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter className="footer">
      <MDBContainer
        className="d-flex align-items-center justify-content-center flex-wrap"
        style={{ gap: "12px", padding: "8px" }}
      >
        <MDBBtn outline color="light" floating href="https://www.linkedin.com/in/juan-ignacio-godoy-grando-87bb43322/" role="button">
          <MDBIcon fab icon="linkedin-in" />
        </MDBBtn>

        <MDBBtn outline color="light" floating href="https://www.instagram.com/" role="button">
          <MDBIcon fab icon="instagram" />
        </MDBBtn>
        <MDBBtn outline color="light" floating href="https://github.com/juangodoygrando/Movix-react-Js" role="button">
          <MDBIcon fab icon="github" />
        </MDBBtn>
        <MDBBtn outline color="light" floating href="https://workspace.google.com/intl/es/gmail/" role="button">
          <MDBIcon fab icon="google" />
        </MDBBtn>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", color: "white", borderRadius:"5px"}}
      >
        &copy; {new Date().getFullYear()} Copyright:
        {" Juan Ignacio Godoy Grando"}
        <a
          className="text-white"
          href="https://www.linkedin.com/in/juan-ignacio-godoy-grando-87bb43322/"
        ></a>
      </div>
    </MDBFooter>
  );
}

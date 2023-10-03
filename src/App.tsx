import "./App.css";

import { MDBContainer, MDBInputGroup, MDBNavbar } from "mdb-react-ui-kit";

function App() {
  return (
    <>
      <MDBNavbar light bgColor="light" sticky>
        <MDBContainer>
          <MDBInputGroup tag="form" className="d-flex w-auto ">
            <input
              className="form-control"
              placeholder="Type query"
              aria-label="Search"
              type="Search"
            />
          </MDBInputGroup>
        </MDBContainer>
      </MDBNavbar>
      <MDBContainer></MDBContainer>
    </>
  );
}

export default App;

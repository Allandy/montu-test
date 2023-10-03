import "./App.css";

import { MDBContainer, MDBInputGroup, MDBNavbar } from "mdb-react-ui-kit";
import { useEffect, useReducer } from "react";
import { initialState, reducer } from "./store";

import { ImagesGrid } from "./ImagesGrid";
import { IAPIGiphy } from "./interfaces";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // initial load/reload start with trending  - restore favs - start from page 0
  useEffect(() => {
    // in dev mode react calls this twice when in strict mode
    let ignore = false;
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/trending?api_key=F3piKmQWp1YMUAQYbIrxDjDdznT9rFR3&limit=${state.limit}&offset=0&rating=g&lang=en`
        );
        if (!ignore) {
          const { data } = (await response.json()) as IAPIGiphy;
          dispatch({ type: "load-images", payload: data });
          dispatch({ type: "set-query", payload: "" });
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchImages();
    return () => {
      ignore = true;
    };
  }, []);

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
        <MDBContainer>
          <ImagesGrid images={state.images} />
        </MDBContainer>
      </MDBNavbar>
      <MDBContainer></MDBContainer>
    </>
  );
}

export default App;

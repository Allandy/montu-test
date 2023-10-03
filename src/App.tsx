import "animate.css";
import "./App.css";

import {
  MDBBtn,
  MDBContainer,
  MDBInputGroup,
  MDBNavbar
} from "mdb-react-ui-kit";
import { useEffect, useReducer } from "react";
import { initialState, reducer } from "./store";

import { ImagesGrid } from "./ImagesGrid";
import { IAPIGiphy } from "./interfaces";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const minQueryLength = 3;

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

  // load more button press works on both trending and search api resource
  useEffect(() => {
    const fetchImages = async () => {
      try {
        let apiResource = "";

        if (state.query.length === 0) {
          apiResource = "trending";
        } else {
          apiResource = "search";
        }

        if (state.query.length < minQueryLength && apiResource == "search")
          return;

        if (state.pageOffset === 0) return;

        const baseUurl = `https://api.giphy.com/v1/gifs/${apiResource}?api_key=F3piKmQWp1YMUAQYbIrxDjDdznT9rFR3&`;
        const url = `${baseUurl}q=${state.query}&offset=${state.pageOffset}&limit=${state.limit}&rating=g&lang=en`;
        const response = await fetch(url);
        const { data } = (await response.json()) as IAPIGiphy;

        dispatch({ type: "concat-images", payload: data });
      } catch (e) {
        console.log(e);
      }
    };

    fetchImages();
  }, [state.pageOffset]);

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
          <ImagesGrid images={state.images} dispatch={dispatch} />
          <MDBBtn
            onClick={() => dispatch({ type: "get-next-page" })}
            className="me-1"
          >
            Load More...
          </MDBBtn>
        </MDBContainer>
      </MDBNavbar>
      <MDBContainer></MDBContainer>
    </>
  );
}

export default App;

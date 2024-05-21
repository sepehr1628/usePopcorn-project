import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Practice from "./practice";
// import App from "./preatice-1";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Practice /> */}
  </React.StrictMode>
);

// useEffect(
//   function () {
//     async function fetchMovie() {
//       try {
//         const res = await fetch(
//           `http://www.omdbapi.com/?apikey=${KEY}&S=${query}`
//         );

//         if (!res.ok)
//           throw new Error("Something went wrong with fetching movies!");

//         const data = await res.json();
//         setMovies(data.Search);
//         console.log(data.Search);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     fetchMovie();
//   },
//   [query]
// );

// The above code is mine.
// in the I've add query state in dependency array but ESLint tells me this : React Hook useEffect has an unnecessary dependency
// Why tells me to remove that?

///////////////////////////////////////////////////////

// useEffect(
//   function () {
//     const controller = new AbortController();

//     async function fetchMovies() {
//       try {
//         setIsLoading(true);
//         setError("");

//         const res = await fetch(
//           `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
//           { signal: controller.signal }
//         );

//         if (!res.ok)
//           throw new Error("Something went wrong with fetching movies");

//         const data = await res.json();
//         if (data.Response === "False") throw new Error("Movie not found");

//         setMovies(data.Search);
//         setError("");
//       } catch (err) {
//         if (err.name !== "AbortError") {
//           console.log(err.message);
//           setError(err.message);
//         }
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     if (query.length < 3) {
//       setMovies([]);
//       setError("");
//       return;
//     }

//     handleCloseMovie();
//     fetchMovies();

//     return function () {
//       controller.abort();
//     };
//   },
//   [query]
// );
// But this code is same and using query state as a parameter and not using it directly.
// Why ESLint doesn't complain?

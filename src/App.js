import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from "react";
import FlagList from "./Components/FlagList";
import Header from "./Components/Header";

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("There was a problem with the fetch");
        }
        console.log(response);
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <FlagList flag={countries} />
    </div>
  );
};

export default App;

// const [flags, setFlags] = useState([]);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await fetch("https://swapi.dev/api/starships/");
//       console.log(response);

//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }

//       const data = await response.json();
//       setFlags(data.results);
//       setLoading(false);
//       console.log(data);
//     } catch (error) {
//       setError(error);
//       setLoading(false);
//       console.log(error);
//     }
//   };

//   fetchData();
// }, []);

// if (loading) {
//   return <p>Loading...</p>;
// }

// if (error) {
//   return <p>Error: {error.message}</p>;
// }

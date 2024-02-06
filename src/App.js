import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setIsLoading(true);
        const response = await fetch();

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data);
        setBooks(data.items);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
        console.log(error);
      }
    };

    fetchBooks();
  }, []);

  console.log(books);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error :(</h1>;
  }

  return (
    <div className="App">
      <h1>This is a app</h1>
    </div>
  );
}

export default App;

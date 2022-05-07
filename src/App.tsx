import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/shared/header/Header";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import "./App.css";
import people from "./components/data/data";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? people
    : people.filter((person) =>
        person.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  return (
    <div className="App">
      <Header searchTerm={searchTerm} handleChange={handleChange} />
      <Routes>
        <Route path="/" element={<HomePage results={results} />} />
        <Route path="/CartPage" element={<CartPage />} />
      </Routes>
    </div>
  );
};

export default App;

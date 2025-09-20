import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<div>About Page</div>} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <div>About Page</div>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;

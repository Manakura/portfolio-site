import { Link } from "react-router";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-gradient-to-b from-blue-100 to-blue-300">
      <h1 className="text-4xl font-bold mb-4">Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;

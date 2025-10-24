import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <nav>
        <Link to="team">Team</Link> | <Link to="history">History</Link>
      </nav>
      <Outlet />
    </div>
  );
}

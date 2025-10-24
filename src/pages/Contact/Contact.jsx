import { Link, Outlet } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <nav>
        <Link to="email">Email</Link> | <Link to="phone">Phone</Link>
      </nav>
      <Outlet />
    </div>
  );
}

import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="sub1">Sub Home 1</Link> | <Link to="sub2">Sub Home 2</Link>
      </nav>
      <Outlet />
    </div>
  );
}

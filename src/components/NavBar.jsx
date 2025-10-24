import { Link } from "react-router-dom";
import { signInWithGoogle, logout, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function NavBar() {
  const [user] = useAuthState(auth);

  return (
    <nav style={{ padding: "10px", background: "#333", color: "#fff" }}>
      <Link to="/" style={{ color: "#fff", marginRight: "10px" }}>Home</Link>
      <Link to="/about" style={{ color: "#fff", marginRight: "10px" }}>About</Link>
      <Link to="/contact" style={{ color: "#fff", marginRight: "10px" }}>Contact</Link>

      <span style={{ float: "right" }}>
        {user ? (
          <>
            <img src={user.photoURL} alt="avatar" width="30" style={{ borderRadius: "50%" }} />{" "}
            {user.displayName}
            <button onClick={logout} style={{ marginLeft: "10px" }}>Logout</button>
          </>
        ) : (
          <button onClick={signInWithGoogle}>Sign In with Google</button>
        )}
      </span>
    </nav>
  );
}

export default NavBar;
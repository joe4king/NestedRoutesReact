import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    // 🚫 Not signed in? Send back home
    return <Navigate to="/" replace />;
  }

  // ✅ Signed in? Enter room
  return children;
}

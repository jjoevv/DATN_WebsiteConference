import { Link, Navigate, Outlet, useOutlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Container, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
// ...

export const AuthLayout = () => {
  const auth = useAuth()
  const outlet = useOutlet();

  if (!auth.token) {
    return <Navigate to="/home" />;
  }

  return (
    <Container  className="d-flex w-100 mw-100">
          <Sidebar/>
          <Outlet/>
    </Container>
  )
};
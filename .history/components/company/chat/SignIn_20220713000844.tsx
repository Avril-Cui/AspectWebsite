import React from "react";
import Link from "next/link";
import Button from "../../UI/Button";
import { useAuth } from "../../../context/AuthContext";
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useRouter } from 'next/router';

function SignIn() {
    const { user, logout } = useAuth();
    const router = useRouter();

  return (
    <div>
      <Button>
        <p>
          {user ? (
            <Nav.Link
              onClick={() => {
                logout();
                router.push("/login/login");
              }}
            >
              Log Out
            </Nav.Link>
          ) : (
            <Link href="/login/login">Log In</Link>
          )}
        </p>
      </Button>
    </div>
  );
}

export default SignIn;
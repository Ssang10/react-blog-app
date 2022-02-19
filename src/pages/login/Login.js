import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub } from "react-icons/fa";

import EmailPassword from "../../components/email-password/EmailPassword";
import "./styles.css";
import handleGoogleSignin from "../../firebase/services/auth/googleAuth";
import { GlobalContext } from "../../context/GlobalState";
import handleFBSignin from "../../firebase/services/auth/fbAuth";
import handleGitHubSignin from "../../firebase/services/auth/githubAuth";

const Login = () => {
  const { setIsAuth } = useContext(GlobalContext);

  let navigate = useNavigate();

  const handleSignIn = async (provider) => {
    let user = await (provider === "google"
      ? handleGoogleSignin()
      : provider === "fb"
      ? handleFBSignin()
      : handleGitHubSignin());
    if (user) {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    }
  };

  return (
    <div className="login-page">
      <h2>Log In or Sign Up</h2>
      <section className="login-icons">
        <FcGoogle className="icon" onClick={() => handleSignIn("google")} />
        <FaFacebookF
          className="icon"
          onClick={() => handleSignIn("fb")}
          style={{ color: " #3b5998" }}
        />
        <FaGithub className="icon" onClick={() => handleSignIn("github")} />
      </section>
      <p className="or-line">
        <span>or</span>{" "}
      </p>
      <EmailPassword />
      <section className="create-account-container">
        <p
          className="create-account-link"
          onClick={() => navigate("/createaccount")}
        >
          I don't have an account
        </p>
      </section>
    </div>
  );
};

export default Login;

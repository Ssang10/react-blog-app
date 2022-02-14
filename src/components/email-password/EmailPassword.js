import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import { loginEmailPassword } from "../../firebase/services/auth/emailpassword";
import "./emailpassword.css";

const EmailPassword = () => {
  const navigate = useNavigate();

  const { setIsAuth } = useContext(GlobalContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = await loginEmailPassword(email, password);
    if (user) {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    }
  };

  return (
    <form className="email-password" onSubmit={handleSubmit}>
      <label htmlFor="email">Email </label> <br />
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br /> <br />
      <label htmlFor="password">Password</label> <br />
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        minLength="6"
      />
      <br /> <br />
      <button type="submit" className="btn">
        Log In
      </button>
    </form>
  );
};

export default EmailPassword;

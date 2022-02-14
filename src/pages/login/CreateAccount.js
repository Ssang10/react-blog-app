import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import { createAccount } from "../../firebase/services/auth/emailpassword";
import "./styles.css";

const CreateAccount = () => {
  const navigate = useNavigate();

  const { setIsAuth } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === password2) {
      const user = await createAccount(name, email, password);
      if (user) {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
      }
    } else {
      alert("Please Type same password!");
    }
  };

  return (
    <div className="login-page">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name </label> <br />
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /> <br />
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
        <label htmlFor="password2">Confirm Password</label> <br />
        <input
          type="password"
          id="password2"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          required
          minLength="6"
        />
        <br /> <br />
        <button type="submit" className="btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;

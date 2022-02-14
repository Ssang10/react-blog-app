import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import YourPost from "./pages/yourPost/YourPost";
import Login from "./pages/login/Login";
import Explore from "./pages/explore/Explore";
import CreatePost from "./pages/createPost/CreatePost";
import Navbar from "./components/navbar/Navbar";
import CreateAccount from "./pages/login/CreateAccount";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/yourposts" element={<YourPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Explore />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/createaccount" element={<CreateAccount />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

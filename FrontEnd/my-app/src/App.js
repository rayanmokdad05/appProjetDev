import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Inscrire from "./Components/signup/Signup";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Profile from "./Components/Profile/Profile";
import Offres from "./Components/Offres/Offres";
function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Inscrire />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/offres" element={<Offres />} />
          <Route
            path="/profile/:userId"
            element={<Profile user={loggedInUser} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

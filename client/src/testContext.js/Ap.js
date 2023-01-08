import React, { useState } from "react";
import Login from "./Login";
import Profile from "./Profile";
import { LoginContext } from "./LoginContext";

export default function Ap() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");
  return (
    <div>
      <LoginContext.Provider value={{ username, setUsername, setShowProfile }}>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

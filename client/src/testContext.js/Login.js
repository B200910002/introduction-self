import React, {  useContext } from "react";
import { LoginContext } from "./LoginContext";

export default function Login() {
  const { setUsername, setShowProfile } = useContext(LoginContext);

  return (
    <>
      <input
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input type="password" />
      <button
        onClick={() => {
          setShowProfile(true);
        }}
      >
        Login
      </button>
    </>
  );
}

import React, { useContext } from "react";
import { LoginContext } from "./LoginContext";

export default function Home() {
  const { username } = useContext(LoginContext);

  return (
    <>
      <h1>Profile</h1>
      <h2>Username: {username}</h2>
    </>
  );
}

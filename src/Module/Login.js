import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import Dashboard from "./Dashboard";

const Login = () => {
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );
  const handleLogin = async (googleData) => {
    const res = await fetch("/api/google-login", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: { "Content-Type": "application-json" },
    });
    console.log("response", res);
    const data = await res.json();
    setLoginData(data);
    localStorage.setItem("localData", JSON.stringify(data));
  };
  const handleFailure = (result) => {
    alert(result);
  };
  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setLoginData(null);
  };
  console.log(loginData);
  return (
    <>
      <h1> Login Page </h1>
      {loginData ? (
        <Dashboard logout={handleLogout} />
      ) : (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Log in with Google"
          onSuccess={handleLogin}
          onFailure={handleFailure}
          cookiePolicy={"single_host_origin"}
        ></GoogleLogin>
      )}
    </>
  );
};

export default Login;

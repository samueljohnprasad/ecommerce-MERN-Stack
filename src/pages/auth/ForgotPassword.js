import React, { useState, useEffect } from "react";
import { auth, googleAuthProvider } from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  //event
  const handleForgotPass = async (e) => {
    e.preventDefault();
    setLoading(true);
    const config = {
      url:process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT_URL,
      handleCodeInApp: true,
    };
    await auth.sendPasswordResetEmail(email, config)
      .then(() => {
        setEmail("");
        setLoading(false);
        //console.log('then')
        toast.success("check your email for your password reset");
      })
      .catch((err) => {
        setLoading(false);
        //console.log('catch')
        toast.error(err.message);
      });
  };
  return (
    <div className="container col-md-6 offset-md-3 p-5">
      {!loading ? <h4>forgot password</h4> : <h4>loading</h4>}
      <form onSubmit={handleForgotPass}>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Type your email"
          autoFocus
        />
        <br />

        <button className="btn btn-raised" disabled={!email}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;

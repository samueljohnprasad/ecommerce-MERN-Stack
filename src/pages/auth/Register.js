import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
const Register = ({history}) => {
  const [email, setEmail] = useState("");

  //state
  const { user } = useSelector((state) => ({ ...state }));

  //events
  useEffect(() => {
    if (user && user.token) history.push("/");
    console.log(user, "user");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log("env", process.env.REACT_APP_REGISTER_REDIRECT_URL);

    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);
    //toast msg
    toast.success(
      `Email is send to ${email}, click the link to complete registration`
    );
    //save email to local storage
    window.localStorage.setItem("emailFormRegistration", email);
    //clear fields
    setEmail("");
  };
  const register = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="enter your email"
        autoFocus
      ></input>
      <br />
      <button type="submit" className="btn btn-raised">
        Register
      </button>
    </form>
  );
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>register</h4>

          {register()}
        </div>
      </div>
    </div>
  );
};

export default Register;

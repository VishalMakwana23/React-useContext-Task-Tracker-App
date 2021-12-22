import { useState } from "react";
export default function Login({ onbtnlogin }) {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();

    if (!uname) {
      alert("Please Enter User Name");
      return;
    }
    if (!password) {
      alert("Please Enter Password");
      return;
    }

    onbtnlogin({ uname, password });
    setUname("");
    setPassword("");
  };
  return (
    <form onSubmit={login}>
      <div className="form-control">
        <label>Enter Username: </label>
        <input
          type="text"
          value={uname}
          onChange={(e) => setUname(e.target.value)}
          name="uname"
        />
        <br />
        <label>Enter Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />
        <br />
        <input className="btn" type="submit" value="Login" />
      </div>
    </form>
  );
}

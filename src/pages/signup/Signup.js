import styles from "./Signup.module.css";

import React, { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [id, setId] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, id, email, password);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>Signup</h2>
      <label>
        <span>Name</span>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>

      <label>
        <span>Residential ID</span>
        <input
          type="number"
          onChange={(e) => setId(e.target.value)}
          value={id}
        />
      </label>

      <label>
        <span>email</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label>
        <span>password</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label> 
      <button className="btn">Signup</button>
    </form>
  );
}

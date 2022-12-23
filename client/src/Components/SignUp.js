import React, { useState } from "react";


function SignUp({onLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
console.log(errors)
  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        // password_confirmation: passwordConfirmation,
        image_url: imageUrl,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => {
          console.log(err)
          setErrors(err.errors) 
          
        });
        
      
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
         <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
  
      
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
  
{/* 
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        /> */}
    
        <label htmlFor="imageUrl">Profile Image</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
    

        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
     
        {/* {errors.map((err) => (
          <error key={err}>{err}</error>
        ))} */}

    </form>
  );
}

export default SignUp;
import { useState } from "react";

export default function Form() {
  let [formdata, setFormdata] = useState({
    fullname: "",
    username: "",
    password:""
  });

  let inpu = (event) => {
    setFormdata((currdata) => ({
      ...currdata,
      [event.target.name]: event.target.value
    }));
  };

  let handlesub = (event) => {
    event.preventDefault();
    console.log(formdata); // Log formdata to verify submission
  }

  return (
    <div>
      <form onSubmit={handlesub}>
        <label htmlFor="fullname">Full</label>
        <input
          placeholder="TEXTsf"
          type="text"
          value={formdata.fullname} // Controlled component, value tied to state
          onChange={inpu} // Call inpu on input change
          id="fullname"
          name="fullname"
        />
        <br></br>
        <br></br>
        <label htmlFor="username">Usrname</label>
        <input
          placeholder="user"
          type="text"
          value={formdata.username} // Controlled component, value tied to state
          onChange={inpu} // Call inpu on input change
          id="username"
          name="username"
        />
        <br></br>
        <br></br>
        <label htmlFor="password">password</label>
        <input
          placeholder="password"
          type="password"
          value={formdata.password} // Controlled component, value tied to state
          onChange={inpu} // Call inpu on input change
          id="password"
          name="password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

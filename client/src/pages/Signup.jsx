import React, { useState } from "react";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmint = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <section className="container">
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img
                src="/images/register.png"
                alt="a girl is try to do registration"
                width="500"
                height="500"
              />
            </div>
            <div className="registration-form">
              <h1 className="main-heading">Registration form</h1>
              <br />
              <form onSubmit={handleSubmint}>
                <div>
                  <label htmlFor="username">username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    required
                    placeholder="username"
                  />
                </div>
                <div>
                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="phone">phone</label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    required
                    value={user.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone"
                  />
                </div>
                <div>
                  <label htmlFor="password">password</label>
                  <input
                    required
                    type="password"
                    id="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="password"
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Signup;

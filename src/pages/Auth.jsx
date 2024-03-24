import { useState } from "react";

const Auth = () => {
  const [signUp, setSignUp] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData :>> ", formData);
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-50">
      <div className="w-2/3 sm:w-2/5 bg-white rounded-lg p-3 shadow-2xl ">
        <h1 className="text-lg sm:text-2xl font-bold text-center text-indigo-600 p-3">
          {signUp ? "REGISTER" : "LOGIN"}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 ">
          {signUp && (
            <input
              type="text"
              placeholder="Username"
              className="input-style"
              name="username"
              onChange={handleChange}
              value={formData.username}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="input-style"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-style"
            name="password"
            onChange={handleChange}
            value={formData.password}
            required
          />
          <button
            className="w-full p-2 mt-2  text-center bg-indigo-600 text-white rounded-md cursor-pointer hover:bg-indigo-800"
            type="submit"
          >
            {signUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <div>
          {signUp ? (
            <span onClick={() => setSignUp(!signUp)} className="span-style">
              Do you have an account?
            </span>
          ) : (
            <span onClick={() => setSignUp(!signUp)} className="span-style">
              {" "}
              Do you want to create an account?{" "}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;

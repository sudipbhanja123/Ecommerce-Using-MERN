// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { useLoginUserMutation } from "../redux/features/auth/authApi";
// import { setUser } from "../redux/features/auth/authSlice";

// const Login = () => {
//   const [message, setMessage] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const dispatch = useDispatch();
//   const [loginUser, { isloading: loginLoading }] = useLoginUserMutation();
//   const navigate = useNavigate();
//   // console.log("Login", loginUser);

//   // Handle login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const data = {
//       email,
//       password,
//     };
//     try {
//       const response = await loginUser(data).unwrap();
//       console.log(response);
//       const { token, user } = response;
//       dispatch(setUser({ user }));
//       // localStorage.setItem("user", JSON.stringify(response));

//       alert("Login Successfull");

//       navigate("/");
//     } catch (error) {
//       setMessage("Please provide email and password");
//     }
//   };
//   return (
//     <section className="h-screen flex items-center justify-center">
//       <div className="max-w-s border shadow bg-white mx-auto p-8">
//         <h2 className=" text-2xl font-semibold ot-5">Please Login</h2>
//         <form
//           onSubmit={handleLogin}
//           className="space-y-5 max-w-sm mx-auto pt-8"
//         >
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             type="text"
//             name="email"
//             id="email"
//             placeholder="Email Address"
//             required
//             className="w-full bg-gray-100 focus:outline-none px-5 py-3"
//           />
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             name="password"
//             id="password"
//             placeholder="Password"
//             required
//             className="w-full bg-gray-100 focus:outline-none px-5 py-3"
//           />
//           {message && <p className="text-red-500">{message}</p>}
//           <button
//             type="submit"
//             className=" w-full mt-5 bg-primary hover:bg-indigo-500 font-medium py-3 rounded-md"
//           >
//             Login
//           </button>
//         </form>
//         <p className="my-5 italic text-sm text-center">
//           Don't have an account?{" "}
//           <Link className="text-red-500 underline px-1" to="/register">
//             Register
//           </Link>{" "}
//           here.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";

const Login = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const [loginUser, { isLoading: loginLoading }] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({ email, password }).unwrap();
      console.log("Login Response:", response);

      // ✅ If your backend returns just user data:
      dispatch(setUser(response));

      // ✅ Store in localStorage for persistence
      localStorage.setItem("user", JSON.stringify(response));

      alert("Login Successful");
      navigate("/");
    } catch (error) {
      console.error("Login Error:", error);
      setMessage("Invalid email or password");
    }
  };

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="max-w-s border shadow bg-white mx-auto p-8">
        <h2 className=" text-2xl font-semibold ot-5">Please Login</h2>
        <form
          onSubmit={handleLogin}
          className="space-y-5 max-w-sm mx-auto pt-8"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            id="email"
            placeholder="Email Address"
            required
            className="w-full bg-gray-100 focus:outline-none px-5 py-3"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            className="w-full bg-gray-100 focus:outline-none px-5 py-3"
          />
          {message && <p className="text-red-500">{message}</p>}
          <button
            type="submit"
            className=" w-full mt-5 bg-primary hover:bg-indigo-500 font-medium py-3 rounded-md"
            disabled={loginLoading}
          >
            {loginLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="my-5 italic text-sm text-center">
          Don't have an account?{" "}
          <Link className="text-red-500 underline px-1" to="/register">
            Register
          </Link>{" "}
          here.
        </p>
      </div>
    </section>
  );
};

export default Login;

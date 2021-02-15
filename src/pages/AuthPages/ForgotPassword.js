// import React, { useRef, useState } from "react";
// import { useAuth } from "../../contexts/AuthContext";
// import { Link } from "react-router-dom";

// const ForgotPassword = () => {
//   const emailRef = useRef();
//   const { resetPassword } = useAuth();
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   async function handleSubmit(e) {
//     e.preventDefault();

//     try {
//       setMessage("");
//       setError("");
//       setLoading(true);
//       await resetPassword(emailRef.current.value);
//       setMessage("Check your inbox for further instructions");
//     } catch (err) {
//       setError(err.code);
//     }

//     setLoading(false);
//   }
//   return (
//     <div className="w-full">
//       <div className="flex justify-center content-center h-full items-center border-2 ">
//         <div className=" shadow-2xl px-20 py-10 rounded-xl ">
//           <h1 className="text-xl text-center border-b-2 border-gray-200 px-3 mb-5 pb-3">
//             TaniPedia
//           </h1>
//           {error && (
//             <div
//               className="flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3 rounded-lg mb-3"
//               role="alert"
//             >
//               <p>{error}</p>
//             </div>
//           )}
//           <form action="" onSubmit={handleSubmit}>
//             <label className="block">
//               <span className="text-gray-700">Email</span>
//               <input
//                 id="email"
//                 type="email"
//                 className="form-input mt-1 py-3 px-5 block w-full border-2 border-blue-300 rounded-lg focus:border-blue-400 focus:outline-none "
//                 placeholder="Email"
//                 ref={emailRef}
//                 required
//               />
//             </label>
//             <div className=" flex justify-center ">
//               <button className="text-center text-white bg-blue-500 hover:bg-blue-400 py-2 w-full rounded-xl mt-4 block">
//                 Reset Password
//               </button>
//             </div>
//           </form>
//           <div className=" flex justify-center ">
//             <Link
//               to="/Login"
//               className="text-center text-blue-500 ml-3  hover:text-blue-400 mt-4 "
//             >
//               Login
//             </Link>
//           </div>

//           <h1 className="mt-4">
//             Belum mempunyai akun ?
//             <Link
//               to="/Register"
//               className=" text-blue-500 ml-3  hover:text-blue-400 "
//             >
//               Register
//             </Link>
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;

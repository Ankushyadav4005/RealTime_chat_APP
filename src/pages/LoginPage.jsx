// const LoginPage = () => {
//   const [currState, setCurrState] = useState("sign up");
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [bio, setBio] = useState("");
//   const [isDataSubmitted, setIsDataSubmitted] = useState(false);


//   const onSubmitHandler=(event)=>
//   {
//     event.preventDefault();

//     if(currState==='sign up' && !isDataSubmitted)
//     {
//       setIsDataSubmitted(true)
//       return;
//     }
//   }
//   return (
//     <div className='min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>
      
//       {/* Left: Logo */}
//       <img src={assets.logo_big} alt='logo' className='w-[250px] max-w-[30vw]' />

//       {/* Right: Form */}
//       <form onSubmit={onSubmitHandler} className="border-2 bg-white/10 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg">
//         <h2 className='font-medium text-2xl flex justify-between items-center'>
//           {currState}
//           {isDataSubmitted  && <img  onClick={()=>setIsDataSubmitted(false)} src={assets.arrow_icon} alt="toggle" className='w-5 cursor-pointer' />}
          
//         </h2>

//         {currState === "sign up" && !isDataSubmitted && (
//           <input
//             onChange={(e) => setFullName(e.target.value)}
//             value={fullName}
//             type="text"
//             className='p-2 border border-gray-500 rounded-md focus:outline-none'
//             placeholder='Full Name'
//             required
//           />
//         )}

//         {!isDataSubmitted && (
//           <>
//             <input
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//               type="text"
//               placeholder='Email Address'
//               required
//               className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
//             />
//             <input
//               onChange={(e) => setPassword(e.target.value)}
//               value={password}
//               type="password"
//               placeholder='Password'
//               required
//               className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
//             />
//           </>
//         )}

//         {currState === "sign up" && isDataSubmitted && (
//           <textarea
//             onChange={(e) => setBio(e.target.value)}
//             value={bio}
//             rows={4}
//             className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
//             placeholder='Provide a short bio...'
//             required
//           />
//         )}

//         <button type="submit" className='py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer'>
//           {currState === "sign up" ? "Create Account" : "Login Now"}
//         </button>

//         <div className='flex items-center gap-2 text-sm text-gray-500'>
//           <input type="checkbox" />
//           <p>Agree to the terms of use & privacy policy.</p>
//         </div>

//         <div className='flex flex-col pag-2'>
//           {currState==="sign up" ?
//           (<p>Already have an account ? <span  onClick={()=>{setCurrState("Login"); setIsDataSubmitted(false)}} className='font-medium text-violet-500 cursor-pointer'>Login here</span></p>):(<p> Create an account <span  onClick={()=>setCurrState("sign up")}  className='font-medium text-violet-500 cursor-pointer'>Click here</span></p>)}

//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;









import React, { useState } from 'react';
import assets from '../assets/assets';

const LoginPage = () => {
  const [currState, setCurrState] = useState("sign up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (currState === 'sign up' && !isDataSubmitted) {
      setIsDataSubmitted(true);
      return;
    }

    const userData = {
      fullName,
      email,
      password,
      bio,
    };

    console.log('Submitted:', userData);
    alert(`${currState === 'sign up' ? 'Account created' : 'Login successful'}!`);

    // Reset form
    setFullName('');
    setEmail('');
    setPassword('');
    setBio('');
    setIsDataSubmitted(false);
  };

  return (
    <div className='min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>
      
      {/* Left: Logo */}
      <img src={assets.logo_big} alt='logo' className='w-[250px] max-w-[30vw]' />

      {/* Right: Form */}
      <form onSubmit={onSubmitHandler} className="border-2 bg-white/10 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg">
        <h2 className='font-medium text-2xl flex justify-between items-center'>
          {currState}
          {isDataSubmitted && (
            <img
              onClick={() => setIsDataSubmitted(false)}
              src={assets.arrow_icon}
              alt="toggle"
              className='w-5 cursor-pointer'
            />
          )}
        </h2>

        {currState === "sign up" && !isDataSubmitted && (
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            type="text"
            className='p-2 border border-gray-500 rounded-md focus:outline-none'
            placeholder='Full Name'
            required
          />
        )}

        {!isDataSubmitted && (
          <>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder='Email Address'
              required
              className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder='Password'
              required
              className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
            />
          </>
        )}

        {currState === "sign up" && isDataSubmitted && (
          <textarea
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            rows={4}
            className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
            placeholder='Provide a short bio...'
            required
          />
        )}

        <button type="submit" className='py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer'>
          {currState === "sign up" ? "Create Account" : "Login Now"}
        </button>

        <div className='flex items-center gap-2 text-sm text-gray-500'>
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>

        <div className='flex flex-col p-2'>
          {currState === "sign up" ? (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => {
                  setCurrState("Login");
                  setIsDataSubmitted(false);
                }}
                className='font-medium text-violet-500 cursor-pointer'
              >
                Login here
              </span>
            </p>
          ) : (
            <p>
              Create an account{" "}
              <span
                onClick={() => setCurrState("sign up")}
                className='font-medium text-violet-500 cursor-pointer'
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

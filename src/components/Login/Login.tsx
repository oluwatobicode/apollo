import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface logInState {
  email: string;
  password: string;
}

function Login() {
  const [loginFormData, setLoginFormData] = useState<logInState>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log(name);
    console.log(value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginFormData);
    //LOGIN API lOGIC GOES HERE
    navigate("/app");
  };

  return (
    <div className="m-10">
      <div className="flex items-center justify-between">
        <div className="" onClick={() => navigate("/")}>
          <img src="/APOLLO.svg" className="" alt="nav-logo" />
        </div>

        <button
          onClick={() => navigate("/signup")}
          className="md:w-[150px] md:h-[50px] w-[100px] h-[40px] font-fontOne rounded-md border-2 border-textColor lg:text-[20px] text-[13px] font-semibold"
        >
          Sign Up
        </button>
      </div>
      <div className="flex flex-col h-fit p-5  items-center justify-center">
        <h1 className="md:text-[36px] text-[20px] font-bold font-fontOne mt-10 mb-5">
          Sign In
        </h1>
        <p className="font-medium md:text-[15px] lg:[20px] font-fontOne mb-5">
          <span className="font-bold">APOLLO</span> welcome&apos;s you back!
        </p>
        <div className="flex flex-col">
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-5">
              <input
                className="active:bg-transparent w-[300px] font-fontOne placeholder:font-fontOne placeholder:font-medium placeholder:text-[15px] pl-2 h-[50px] bg-transparent  border-2 border-textColor rounded-md font-normal text-[16px]
                  "
                placeholder="Email"
                type="email"
                onChange={handleChange}
                value={loginFormData.email}
                name="email"
              />
            </div>
            <div className="mb-5 flex flex-col">
              <input
                className="w-[300px]  font-fontOne placeholder:font-fontOne placeholder:font-medium placeholder:text-[15px] pl-2 h-[50px] bg-transparent  border-2 border-textColor rounded-md font-normal text-[16px]
                  "
                placeholder="Password"
                type="password"
                onChange={handleChange}
                value={loginFormData.password}
                name="password"
              />
              <button className="text-right mt-2 underline font-fontOne font-normal leading-[20.72px] text-[13px]">
                Forgot Password?Reset
              </button>
            </div>

            <button
              // onClick={() => navigate("/app")}
              className="w-[300px] h-[50px] text-textColorSec bg-textColor font-fontOne rounded-md font-normal text-[16px]"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;

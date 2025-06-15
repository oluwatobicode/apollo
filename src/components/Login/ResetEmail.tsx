import React, { useState } from "react";

type emailProps = {
  confirmEmail?: string;
};

function ResetEmail() {
  const [resetEmail, setResetEmail] = useState<emailProps>({
    confirmEmail: "",
  });

  const handleResetEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setResetEmail((prevEmail) => ({ ...prevEmail, [name]: value }));
  };

  const validateResetEmail = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    //API LOGIC GOES HERE
  };

  return (
    <div>
      <div className="m-10">
        <img src="/APOLLO.svg" className="w-[90px]" alt="nav-logo" />
      </div>

      <form
        className="flex flex-col justify-center items-center"
        onSubmit={validateResetEmail}
      >
        <div className="text-center mb-10 mt-10">
          <h1 className="font-bold font-fontOne text-textColor text-[30px] leading-[59.92px]">
            Reset Password!
          </h1>
          <p className="font-medium font-fontOne text-textColor text-[20px] outline-0 leading-[29.96px]">
            Enter your email to reset password
          </p>
        </div>
        <input
          type="email"
          name="confirmEmail"
          value={resetEmail.confirmEmail}
          onChange={handleResetEmail}
          id=""
          placeholder="Email"
          className="w-[300px] mb-5 font-fontOne placeholder:font-fontOne placeholder:font-medium placeholder:text-[15px] pl-2 h-[50px] bg-transparent  border-2 border-textColor rounded-md font-medium text-[16px]
                "
        />

        <button className="w-[300px] h-[50px] mb-5 text-textColorSec bg-textColor font-fontOne rounded-md font-normal text-[16px]">
          Next
        </button>
      </form>
    </div>
  );
}
export default ResetEmail;

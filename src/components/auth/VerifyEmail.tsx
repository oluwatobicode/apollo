interface VerifyEmailProps {
  email: string;
  onVerify: () => void;
  onResendEmail: () => void;
}

function VerifyEmail({ email, onVerify, onResendEmail }: VerifyEmailProps) {
  return (
    <div className="m-10">
      <div className="">
        <img src="/APOLLO.svg" className="w-[90px]" alt="nav-logo" />
      </div>
      <div className="flex flex-col items-center">
        <div className="mb-4 mt-5 flex flex-col place-items-center">
          <img src="/email.svg" alt="" />
          <h1 className="font-medium font-fontOne text-[20px]">Verify email</h1>
        </div>
        <div className="text-center mb-5">
          <p className="md:text-[15px] text-[12px] font-fontOne font-medium">
            We sent an email to
            <span className="font-bold">{email}</span>
            <span className="block">
              Please confirm your email and continue
            </span>
            <span className="block">with APOLLO as you like.</span>
          </p>
        </div>
        <button
          onClick={onVerify}
          className="md:w-[350px] w-[300px] h-[50px] bg-black text-textColorSec rounded-md mb-5 font-fontOne font-medium"
        >
          Confirm Email
        </button>
        <button
          onClick={onResendEmail}
          className="md:w-[350px] w-[300px] h-[50px] bg-black text-textColorSec rounded-md mb-5 font-fontOne font-medium"
        >
          Resend verification email
        </button>
      </div>
    </div>
  );
}
export default VerifyEmail;

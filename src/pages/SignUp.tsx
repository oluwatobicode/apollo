import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import SignIn from "../components/SignIn/SignIn";
import VerifyEmail from "../components/auth/VerifyEmail";
import OTPInput from "../components/auth/OTPInput";
import axios from "axios";

interface AuthState {
  email: string;
  token: string;
}

function SignUp() {
  const [formStep, setFormStep] = useState<number>(3);
  const [authState, setAuthState] = useState<AuthState>({
    email: "",
    token: "",
  });

  // Handle successful signup
  const handleSignUpSuccess = (email: string, token: string) => {
    setAuthState({ email, token });
    setFormStep(2);
    // Send verification email
    sendVerificationEmail(token);
  };

  // Send verification email
  const sendVerificationEmail = async (token: string) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/send-verification-email`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Verification email sent!");
    } catch (error) {
      toast.error("Failed to send verification email");
    }
  };

  // Handle email verification
  const handleEmailVerification = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/auth/verify-email`,
        {
          headers: {
            Authorization: `Bearer ${authState.token}`,
          },
        }
      );

      if (response.data.status) {
        // Send the OTP after email verification to the user
        await sendOTP();
        setFormStep(3);
        toast.success("Email verified! Please enter OTP");
      }
    } catch (error) {
      toast.error("Email verification failed");
    }
  };

  // Send OTP
  const sendOTP = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/send-otp`,
        {},
        {
          headers: {
            Authorization: `Bearer ${authState.token}`,
          },
        }
      );
    } catch (error) {
      toast.error("Failed to send OTP");
    }
  };

  // Handle OTP verification
  const handleOTPComplete = async (pin: string) => {
    try {
      // Verify OTP with your backend
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/verify-otp`,
        { otp: pin },
        {
          headers: {
            Authorization: `Bearer ${authState.token}`,
          },
        }
      );

      if (response.data.status) {
        toast.success("Successfully verified!");
        // Navigate to dashboard or home page
        // navigate("/dashboard");
      }
    } catch (error) {
      // toast.error("Invalid OTP");
    }
  };

  return (
    <div>
      <ToastContainer />
      {formStep === 1 && <SignIn onSuccess={handleSignUpSuccess} />}
      {formStep === 2 && (
        <VerifyEmail
          email={authState.email}
          onVerify={handleEmailVerification}
          onResendEmail={() => sendVerificationEmail(authState.token)}
        />
      )}
      {formStep === 3 && (
        <OTPInput
          length={4}
          onComplete={handleOTPComplete}
          onResendOTP={sendOTP}
        />
      )}
    </div>
  );
}

export default SignUp;

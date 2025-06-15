import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface SignInProps {
  onSuccess: (email: string, token: string) => void;
}

// validation scheme
const signUpSchema = z
  .object({
    email: z.string().email("Please enter a valid email"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters!")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match!",
    path: ["confirmPassword!"],
  });

type signUpFormData = z.infer<typeof signUpSchema>;

function SignIn({ onSuccess }: SignInProps) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<signUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: signUpFormData) => {
    try {
      setIsLoading(true);

      const response = await axios.post("/user/signup", {
        email: data?.email,
        password: data?.password,
      });

      // handle a successful sign-up!

      if (response?.data) {
        localStorage.setItem("token", response?.data?.token);
        toast.success("Successful!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // reset the form
        reset();

        onSuccess(data.email, response.data.token);

        setTimeout(() => {
          navigate("/otp");
        }, 2000);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(
          err.response?.data?.message || "An error occurred during sign up",
          {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
      } else {
        toast.error("An unexpected error occurred", {
          position: "top-right",
          autoClose: 4000,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="m-10">
      <div className="flex items-center justify-between">
        <div className="" onClick={() => navigate("/")}>
          <img src="/APOLLO.svg" className="" alt="nav-logo" />
        </div>

        <button
          onClick={() => navigate("/login")}
          className="md:w-[150px] md:h-[50px] w-[100px] h-[40px] font-fontOne rounded-md border-2 border-textColor lg:text-[20px] text-[13px] font-semibold"
        >
          Log in
        </button>
      </div>
      <div className="flex flex-col h-fit p-5  items-center justify-center">
        <h1 className="text-[36px] font-bold font-fontOne mt-5 mb-5">
          Sign up
        </h1>
        <p className="font-medium text-[15px] font-fontOne mb-5">
          Create an account with <span className="font-bold">APOLLO</span>
        </p>
        <div className="flex flex-col">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <input
                className="w-[300px] font-fontOne placeholder:font-fontOne placeholder:font-medium placeholder:text-[15px] pl-2 h-[50px] bg-transparent  border-2 border-textColor rounded-md font-normal text-[16px]
                "
                placeholder="Email"
                type="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mb-5">
              <input
                className="w-[300px]  font-fontOne placeholder:font-fontOne placeholder:font-medium placeholder:text-[15px] pl-2 h-[50px] bg-transparent  border-2 border-textColor rounded-md font-normal text-[16px]
                "
                placeholder="Password"
                type="password"
                {...register("password")}
              />
              {errors?.password && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="mb-5">
              <input
                className="w-[300px] font-fontOne placeholder:font-fontOne placeholder:font-medium placeholder:text-[15px] pl-2 h-[50px] bg-transparent  border-2 border-textColor rounded-md font-normal text-[16px]
                "
                placeholder="Confirm password"
                type="password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-[300px] h-[50px] text-textColorSec bg-textColor font-fontOne rounded-md font-normal text-[16px]"
            >
              {isLoading ? "Signing up..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignIn;

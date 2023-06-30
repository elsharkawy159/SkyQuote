import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router.js";
import Swal from "sweetalert2";

const AuthContext = createContext();

export default function AuthData({ children }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [signUpRes, setSignUpRes] = useState(null);
  const [signInRes, setSignInRes] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("UserData")) {
      localStorage.setItem("UserData", []);
      setIsLogged(false);
    } else {
      setIsLogged(true);
      setSignInRes(JSON.parse(localStorage.getItem("UserData")));
    }
  }, []);

  const SignUp = async (values) => {
    setIsLoading(true);
    setSignUpRes(null);
    try {
      const { data } = await axios.post(
        "https://note-keep-6545.vercel.app/user/signup",
        values
      );
      setSignUpRes(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const SignIn = async (values) => {
    setIsLoading(true);
    setSignInRes(null);
    try {
      const { data } = await axios.post(
        "https://note-keep-6545.vercel.app/user/signin",
        values
      );
      setSignInRes(data);

      if (data && data.success) {
        setIsLogged(true);
        localStorage.setItem("UserData", JSON.stringify(data.user));
        const Toast = Swal.mixin({
          toast: true,
          position: "bottom-start",
          showConfirmButton: false,
          timer: 3000,
          background: "black",
          color: "white",
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
        setTimeout(() => {
          router.push("/");
        }, 500);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      return error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        SignUp,
        signUpRes,
        setSignUpRes,

        SignIn,
        isLogged,
        setIsLogged,
        signInRes,
        setSignInRes,

        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

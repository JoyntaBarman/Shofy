"use client";

import { addUser } from "@/redux/user/userSlice";
import { signIn, useSession } from "next-auth/react";
import { useDispatch } from "react-redux";

export default function Login() {
  return <div className="flex justify-center items-center mt-24">
    LogIn
  </div>;
}

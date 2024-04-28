import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PassWord from "../components/password";
import Id from "../components/id";

interface IJoinForm {
  text: string;
}

export default function LogIn() {
  const router = useRouter();
  const [prev, setPrev] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IJoinForm>();
  function closeClicked() {
    router.back();
  }
  function nextClick() {
    setPrev(!prev);
  }
  return (
    <div className="bg-neutral-200 w-screen h-screen">
      <div className="absolute h-auto w-[50%] top-[6%] left-[32%]">
        <Id />
      </div>
    </div>
  );
}

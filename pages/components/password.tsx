import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface IJoinForm {
  text: string;
}

export default function LogIn() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IJoinForm>();
  function closeClicked() {
    router.back();
  }
  const showingClick = () => {
    setShow(!show);
  };
  return (
    <div className="flex h-auto w-[70%] flex-col rounded-xl bg-white">
      <div className="flex flex-row p-4">
        <svg
          onClick={closeClicked}
          className="w-6 h-6 cursor-pointer"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
        <svg
          className="ml-[43%] w-9 h-9"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 32 32"
        >
          <path d="M 4.0175781 4 L 13.091797 17.609375 L 4.3359375 28 L 6.9511719 28 L 14.246094 19.34375 L 20.017578 28 L 20.552734 28 L 28.015625 28 L 18.712891 14.042969 L 27.175781 4 L 24.560547 4 L 17.558594 12.310547 L 12.017578 4 L 4.0175781 4 z M 7.7558594 6 L 10.947266 6 L 24.279297 26 L 21.087891 26 L 7.7558594 6 z"></path>
        </svg>
      </div>
      <form className="flex flex-col gap-9 px-14 py-10">
        <h3 className=" text-3xl font-semibold">비밀번호를 입력하세요</h3>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-full h-14  justify-center relative text-left flex flex-col gap-2 py-2">
            <input
              {...register("text", { required: true })}
              type="text"
              id="text-input"
              className="block rounded-md border-[1px] border-neutral-300 px-2.5 pb-2.5 pt-5 w-full text-lg text-neutral-500 appearance-none focus:border-blue-400 focus:outline-none focus:border-2  peer"
              placeholder=" "
            />
            <label
              htmlFor="text-input"
              className="absolute text-lg px-3 pb-2 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-400 peer-focus:pb-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              비밀번호
            </label>
            <label
              htmlFor="text-input"
              className="absolute text-lg px-3 pb-2 top-4 left-[88%] z-10 origin-[0] start-2.5"
              onClick={showingClick}
            >
              {!show ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
            </label>
            <Link href={router.back()}>
              <p>비밀번호 찾기</p>
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 mt-48">
          <div className="w-full rounded-full border-[1px] border-neutral-300 bg-black px-10 py-4 text-center font-semibold text-white">
            로그인하기
          </div>
        </div>
        <div className="text-sm">
          <span>
            계정이 없으신가요? <a className="text-blue-400">가입하기</a>
          </span>
        </div>
      </form>
    </div>
  );
}

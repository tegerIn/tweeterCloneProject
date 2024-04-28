import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PassWord from "../components/password";

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
    <>
      {!prev ? (
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
            <h3 className=" text-3xl font-semibold">X 가입하기</h3>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex w-full flex-row items-center justify-center rounded-full border-[1px] border-neutral-300 px-5 py-2">
                <svg
                  className="w-7 h-7 pr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                <span className="text-sm">Google 계정으로 가입하기</span>
              </div>
              <div className="flex w-full flex-row items-center justify-center rounded-full border-[1px] border-neutral-300 px-10 py-2">
                <svg
                  className="w-7 h-7 pr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 30 30"
                >
                  <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"></path>
                </svg>
                <span className="text-base">Apple에서 가입하기</span>
              </div>
              <div className="flex w-full flex-row items-center justify-center gap-2">
                <div className="h-[0.025rem] w-[42%] bg-neutral-300"></div>
                <div>또는</div>
                <div className="h-[0.025rem] w-[42%] bg-neutral-300"></div>
              </div>
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
                  휴대폰 번호, 이메일 주소 또는 사용자 아이디
                </label>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <div
                onClick={nextClick}
                className="w-full rounded-full border-[1px] border-neutral-300 bg-black px-10 py-1.5 text-center font-semibold text-white"
              >
                다음
              </div>
              <div className="w-full rounded-full border-[1px] border-neutral-300 px-10 py-1.5 text-center font-semibold text-black">
                비밀번호를 잊으셨나요?
              </div>
            </div>
            <div className="text-sm">
              <span>
                계정이 없으신가요? <a className="text-blue-400">가입하기</a>
              </span>
            </div>
          </form>
        </div>
      ) : (
        <PassWord />
      )}
    </>
  );
}

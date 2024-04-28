"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Footer from "../components/footer";

export default function CreateAccount() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  function clickedLogin() {
    setClicked(!clicked);
    router.push("/log-in", undefined, { shallow: true });
  }
  return (
    <div
      className={`${
        clicked ? "h-screen w-screen bg-neutral-200" : "h-screen w-screen"
      }`}
    >
      <div className="flex h-[90%] flex-row gap-[5.5rem] pl-20 pr-5 py-20">
        <div className="flex w-[50%] items-center justify-center py-12">
          <svg
            className="h-96 w-96"
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
        <div className="flex flex-col items-start gap-12">
          <h2 className="text-[4rem] font-bold w-full">
            지금 일어나고 있는 일
          </h2>
          <div className="flex flex-col gap-9">
            <h3 className="text-3xl font-semibold">지금 가입하세요.</h3>
            <div className="flex flex-col gap-2">
              <div className="cursor-pointer flex w-[72%] flex-row items-center justify-center rounded-full border-[1px] border-gray-200 px-5 py-2 hover:bg-blue-50 hover:border-blue-100">
                <svg
                  className="w-6 h-6 pr-1"
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
              <div className="cursor-pointer flex w-[72%] flex-row items-center justify-center rounded-full border-[1px] border-gray-200 px-10 py-2  hover:bg-neutral-100">
                <svg
                  className="w-6 h-6 pr-1"
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
              <div className="flex flex-row items-center gap-2 text-sm">
                <div className="h-[0.025rem] w-[30%] bg-gray-200"></div>
                <div>또는</div>
                <div className="h-[0.025rem] w-[30%] bg-gray-200"></div>
              </div>
              <div className="flex w-[72%] flex-col gap-1">
                <div className="cursor-pointer rounded-full bg-blue-500 px-10 py-2 text-center font-semibold text-sm text-white  hover:bg-blue-700">
                  계정만들기
                </div>
                <div className="text-xs ">
                  가입하시려면{" "}
                  <span className="a-notice">
                    <Link
                      href="https://help.twitter.com/ko/rules-and-policies/x-cookies"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      쿠키 사용
                    </Link>
                  </span>
                  을 포함해{" "}
                  <span className="a-notice">
                    <Link
                      href="https://twitter.com/ko/tos"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      이용약관
                    </Link>
                  </span>
                  과{" "}
                  <span className="a-notice">
                    <Link
                      href="https://twitter.com/ko/privacy"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      개인정보 처리방침
                    </Link>
                  </span>
                  에 동의해야 합니다.
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-4">
              <span className="text-base font-semibold">
                이미 트위터에 가입하셨나요?
              </span>
              <div
                onClick={clickedLogin}
                className="cursor-pointer w-[72%] rounded-full border-[1px] border-gray-200 px-10 py-2 text-center font-semibold text-blue-500 hover:bg-blue-100"
              >
                로그인
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

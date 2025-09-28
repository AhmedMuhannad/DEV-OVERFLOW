"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import githubLogo from "@/public/icons/github.svg";
import ROUTES from "@/constants/routes";
import googleLogo from "@/public/icons/google.svg";
import { signIn } from "next-auth/react";
const SocialAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1  px-4 py-3";
  const handleSignIn = async (provider: "github" | "google") => {
    // Implement sign-in logic here, e.g., redirect to OAuth provider
    try {
      await signIn(provider, {
        callBackUrl: ROUTES.HOME,
        redirect: true,
      });
    } catch (err) {}
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          src={githubLogo}
          alt="github logo"
          width={20}
          height={20}
          className="invert-colors mr-2 object-contain"
        />
        <span>Log in with Github</span>
      </Button>
      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
        <Image
          src={googleLogo}
          alt="github logo"
          width={20}
          height={20}
          className=" mr-2 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;

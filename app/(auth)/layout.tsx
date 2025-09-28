import Navbar from "@/components/navigation/navbar";
import React, { ReactNode } from "react";
import Image from "next/image";
import siteLogo from "@/public/images/site-logo.svg";
import SocialAuthForm from "@/components/forms/SocialAuthForm";
const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <section className="light-border background-light800_dark200 border light-border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8 shadow-light_dark100 min-w-full">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="h2-bold text-dark-100_light900 ">Join DevFlow</h1>
            <p className="paraagraph-regular text-dark500_light400">
              To get your questions answered
            </p>
          </div>
          <Image
            src={siteLogo}
            alt="site logo"
            className="object-contain"
            width={50}
            height={50}
          />
        </div>
        {children}
        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;

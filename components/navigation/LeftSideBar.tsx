import React from "react";
import NavLinks from "./navbar/NavLinks";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import { Button } from "@/components/ui/button";
const LeftSideBar = () => {
  return (
    <section className="custom-scrollbar background-light900dark200 sticky light-border left-0 top-0 h-screen flex flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks />
      </div>
      <div className="flex flex-col gap-2">
        <Link href={ROUTES.SIGN_IN}>
          <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg py-3 px-4 shadow-none">
            <span className="primary-text-gradient">Log in</span>
          </Button>
        </Link>
        <Link href={ROUTES.SIGN_UP}>
          <Button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg py-3 px-4 shadow-none text-dark400_light300">
            <span className="primary-text-gradient">SIGN UP</span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default LeftSideBar;

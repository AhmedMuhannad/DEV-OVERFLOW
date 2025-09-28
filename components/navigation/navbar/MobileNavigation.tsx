import React from "react";
import Image from "next/image";
import Link from "next/link";
import hamburger from "@/public/icons/hamburger.svg";
import siteLogo from "@/public/images/site-logo.svg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetClose,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ROUTES from "@/constants/routes";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";
const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src={hamburger}
          alt="Hamburger image"
          width={36}
          height={36}
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none p-4"
      >
        <SheetTitle className="hidden"></SheetTitle>
        <Link href="/" className="flex items-center gap-1">
          <Image src={siteLogo} alt="site logo image" width={28} height={28} />
          <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 ">
            Dev<span className="text-primary-500">Overflow</span>
          </p>
        </Link>
        <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className="flex h-full flex-col gap-6 pt-16">
              <NavLinks />
            </section>
          </SheetClose>
          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg py-3 px-4 shadow-none">
                  <span className="primary-text-gradient">Log in</span>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_UP}>
                <Button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg py-3 px-4 shadow-none text-dark400_light300">
                  <span className="primary-text-gradient">SIGN UP</span>
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;

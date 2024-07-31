import Link from "next/link";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Theme from "@/components/shared/navbar/Theme";
import Mobile from "@/components/shared/navbar/Mobile";
import GlobalSearch from "@/components/shared/search/GlobalSearch";
import LanguageSelector from "@/components/shared/navbar/LanguageSelector";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
          alt="Stack Overflow"
        />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          stack<span className="text-primary-500">overflow</span>
        </p>
      </Link>

      <GlobalSearch />

      <div className="flex-between gap-5">
        <Theme />
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>
        <LanguageSelector />{" "}
        {/* Ensure LanguageSelector is correctly imported */}
        <Mobile />
      </div>
    </nav>
  );
};

export default Navbar;

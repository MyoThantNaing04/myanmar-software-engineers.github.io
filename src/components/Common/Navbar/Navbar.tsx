import MseLink from "@/components/Ui/MseLink/MseLink";
import MseLogo from "@/components/Ui/MseLogo/MseLogo";
import { cn } from "@/utils";
import Container from "../Container/Container";
import SpacingDivider from "../SpacingDivider/SpacingDivider";

const Navbar = () => {
  return (
    <nav className={cn("w-full py-5 mb-2")}>
      <Container withPadding className={cn("flex flex-row justify-between")}>
        {/* ---- Logo: Start ---- */}
        <div className="flex-1">
          <MseLogo />
        </div>
        {/* ---- Logo: Finish ---- */}

        {/* ---- Links: Start ---- */}
        <div className="hidden lg:flex flex-1 flex-row space-x-8 justify-around min-w-[300px]">
          <MseLink href="/">Home</MseLink>
          <MseLink href="/profile">Profiles</MseLink>
          <MseLink href="/blog">Blogs</MseLink>
        </div>
        {/* ---- Links: Finish ---- */}

        {/* ---- DarkMode: Start ---- */}
        <div className="hidden lg:flex flex flex-1 justify-end">
          <MseLink href="/">...</MseLink>
        </div>
        {/* ---- DarkMode: Finish ---- */}
      </Container>

      <SpacingDivider />
    </nav>
  );
};
export default Navbar;

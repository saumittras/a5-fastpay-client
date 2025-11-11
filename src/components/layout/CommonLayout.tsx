import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface IProps {
  children: ReactNode;
}

export default function CommonLayout({ children }: IProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div id="nav-manu">
        <Navbar />
      </div>
      <div className="grow-1">{children}</div>
      <Footer />
    </div>
  );
}

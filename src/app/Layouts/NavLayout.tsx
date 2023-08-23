import React from "react";
import Add from "../components/Main/Add/add";
import Footer from "../Footer/footer";

const NavLayout = ({ children }: any) => {
  return (
    <div className="mx-auto">
      <Add />
      {children}
      <Footer />
    </div>
  );
};

export default NavLayout;

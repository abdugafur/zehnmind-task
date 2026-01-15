import React, { type JSX, type ReactNode } from "react";
import { Header } from "./Header";

export const Layout: React.FC<{
  childrem: JSX.Element;
}> = ({ childrem }) => {
  return (
    <>
      <Header />
      {childrem}
    </>
  );
};

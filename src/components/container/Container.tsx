import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const Container = ({ children }: Props) => {
  return (
    <div className="flex justify-between items-center w-full max-w-[1246px] mx-auto">
      {children}
    </div>
  );
};

export default Container;

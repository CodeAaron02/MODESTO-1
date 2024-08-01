import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center justify-center min-h-[100dvh]">
      {children}
    </div>
  );
};

export default AuthLayout;

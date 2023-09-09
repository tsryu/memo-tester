import { ReactNode } from "react";


const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center min-h-screen content-center flex-wrap">
      <div>{children}</div>
    </div>
  );
};

export default Container;

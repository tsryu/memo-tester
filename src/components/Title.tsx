import { ReactNode } from "react";


const Title = ({ children, ...rest }: { children: ReactNode }) => {
  return (
    <h1 {...rest} className="text-3xl font-bold underline italic mb-12">
      {children}
    </h1>
  );
};

export default Title;

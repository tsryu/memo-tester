import { HTMLAttributes, ReactNode } from "react";


const Button = ({ underline, children, ...rest }: { underline?: boolean, children: ReactNode } & HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...rest} className={underline ? 'underline p-2' : 'rounded-full border-4 py-2 px-6 m-2'}>
      {children}
    </button>
  );
};

export default Button;

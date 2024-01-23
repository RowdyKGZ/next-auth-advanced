"use clinet";

import { logout } from "@/actions/logout";

interface LogOutProps {
  children: React.ReactNode;
}

export const LogoutButton = ({ children }: LogOutProps) => {
  const onClick = () => {
    logout();
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

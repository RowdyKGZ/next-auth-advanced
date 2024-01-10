"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProp {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  asChild,
  mode = "redirect",
}: LoginButtonProp) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>Todo modal</span>;
  }

  return (
    <div onClick={onClick} className="cursor-pointer">
      {children}
    </div>
  );
};

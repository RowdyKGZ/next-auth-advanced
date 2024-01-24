"use client";

import { useCurrentRole } from "@/hooks/use-current-role";
import { UserRole } from "@prisma/client";
import { FormError } from "@/components/form-error";

interface RoleGateProps {
  children: React.ReactNode;
  allowedUser: UserRole;
}

export const RoleGate = ({ allowedUser, children }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedUser) {
    return (
      <FormError message="You do no have permission to view this content" />
    );
  }

  return <div>{children}</div>;
};

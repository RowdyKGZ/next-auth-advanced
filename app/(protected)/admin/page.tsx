"use client";

import { toast } from "sonner";
import { UserRole } from "@prisma/client";

import { Button } from "@/components/ui/button";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { admin } from "@/actions/admin";

const AdminPage = () => {
  const onServerActionClick = () => {
    admin().then((data) => {
      if (data.error) {
        toast.error(data.error);
      }

      if (data.success) {
        toast.success(data.success);
      }
    });
  };

  const onApiRouteClick = () => {
    fetch("/api/admin").then((res) => {
      if (res.ok) {
        toast.success("Api Ok");
      } else {
        toast.error("Api Error");
      }
    });
  };

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">🔐Admin</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <RoleGate allowedUser={UserRole.ADMIN}>
          <FormSuccess message="You are allowed to see this content" />
        </RoleGate>

        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin only API route</p>
          <Button onClick={onApiRouteClick}>Click Test</Button>
        </div>

        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin only Server Actions</p>
          <Button onClick={onServerActionClick}>Click Test</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;

import React from "react";

import { getSession } from "@/utils/supabase-server";

import { DashboardClient } from "./dashboard-client";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {

  const session = await getSession();

  return (
    <>
      <DashboardClient session={session}>
        {children}
      </DashboardClient>
    </>
  );
};
